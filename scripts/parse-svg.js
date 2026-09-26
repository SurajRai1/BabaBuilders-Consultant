const fs = require('fs');

const svg = fs.readFileSync('public/logo.svg', 'utf8');

// Match each path
const matches = [...svg.matchAll(/<path\s+d="([^"]+)"/g)];
console.log('Total paths found:', matches.length);

const parsedPaths = [];

matches.forEach((m, idx) => {
  const d = m[1];
  // Parse commands and rough bounding box
  // The SVG has commands like M X Y, c ..., l ..., etc.
  // Let's trace approximate points
  const commands = d.match(/([a-df-z])|([-+]?[0-9]*\.?[0-9]+)/gi) || [];
  let curX = 0, curY = 0;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  let cmd = '';

  let i = 0;
  while (i < commands.length) {
    const token = commands[i];
    if (/^[a-df-z]$/i.test(token)) {
      cmd = token;
      i++;
    } else {
      if (cmd === 'M') {
        curX = parseFloat(token);
        curY = parseFloat(commands[i+1]);
        i += 2;
      } else if (cmd === 'm') {
        curX += parseFloat(token);
        curY += parseFloat(commands[i+1]);
        i += 2;
      } else if (cmd === 'l') {
        curX += parseFloat(token);
        curY += parseFloat(commands[i+1]);
        i += 2;
      } else if (cmd === 'L') {
        curX = parseFloat(token);
        curY = parseFloat(commands[i+1]);
        i += 2;
      } else if (cmd === 'c') {
        // dx1 dy1 dx2 dy2 dx dy
        curX += parseFloat(commands[i+4]);
        curY += parseFloat(commands[i+5]);
        i += 6;
      } else if (cmd === 'C') {
        curX = parseFloat(commands[i+4]);
        curY = parseFloat(commands[i+5]);
        i += 6;
      } else {
        // default advance
        i++;
      }
      minX = Math.min(minX, curX);
      maxX = Math.max(maxX, curX);
      minY = Math.min(minY, curY);
      maxY = Math.max(maxY, curY);
    }
  }

  parsedPaths.push({
    idx,
    d,
    minX: Math.round(minX),
    maxX: Math.round(maxX),
    minY: Math.round(minY),
    maxY: Math.round(maxY),
    width: Math.round(maxX - minX),
    height: Math.round(maxY - minY),
    len: d.length
  });
});

console.log('Path summary:');
parsedPaths.sort((a,b) => b.maxY - a.maxY);
parsedPaths.forEach(p => {
  console.log(`Path ${p.idx}: Y range [${p.minY}, ${p.maxY}], X range [${p.minX}, ${p.maxX}], W=${p.width}, H=${p.height}, len=${p.len}`);
});
