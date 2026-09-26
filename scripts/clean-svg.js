const fs = require('fs');

const svg = fs.readFileSync('public/logo.svg', 'utf8');
const matches = [...svg.matchAll(/<path\s+d="([^"]+)"/g)];

const parsedPaths = [];

matches.forEach((m, idx) => {
  const d = m[1];
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
        curX += parseFloat(commands[i+4]);
        curY += parseFloat(commands[i+5]);
        i += 6;
      } else if (cmd === 'C') {
        curX = parseFloat(commands[i+4]);
        curY = parseFloat(commands[i+5]);
        i += 6;
      } else {
        i++;
      }
      minX = Math.min(minX, curX);
      maxX = Math.max(maxX, curX);
      minY = Math.min(minY, curY);
      maxY = Math.max(maxY, curY);
    }
  }

  const isRightDust = maxX > 5000;

  parsedPaths.push({
    idx,
    d,
    minX: Math.round(minX),
    maxX: Math.round(maxX),
    minY: Math.round(minY),
    maxY: Math.round(maxY),
    isRightDust
  });
});

const validPaths = parsedPaths.filter(p => !p.isRightDust);

// Mark paths: Upper emblem (stylized B + Baba + roof + windows)
const markPaths = validPaths.filter(p => p.minY >= 2000);

let markMinX = Math.min(...markPaths.map(p => p.minX));
let markMaxX = Math.max(...markPaths.map(p => p.maxX));
let markMinY = Math.min(...markPaths.map(p => p.minY));
let markMaxY = Math.max(...markPaths.map(p => p.maxY));

// Transform: translate(0, 522) scale(0.1, -0.1)
const markScreenMinX = markMinX * 0.1;
const markScreenMaxX = markMaxX * 0.1;
const markScreenMinY = 522 - (markMaxY * 0.1);
const markScreenMaxY = 522 - (markMinY * 0.1);
const markW = markScreenMaxX - markScreenMinX;
const markH = markScreenMaxY - markScreenMinY;

const padMark = 8;
const markViewBox = `${(markScreenMinX - padMark).toFixed(1)} ${(markScreenMinY - padMark).toFixed(1)} ${(markW + padMark * 2).toFixed(1)} ${(markH + padMark * 2).toFixed(1)}`;

const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${markViewBox}" preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
    ${markPaths.map(p => `<path d="${p.d}"/>`).join('\n    ')}
  </g>
</svg>`;
fs.writeFileSync('public/logo-mark.svg', markSvg);

// Clean full logo ending at "Pvt. Ltd." (minY >= 280)
const fullPaths = validPaths.filter(p => p.minY >= 280);
let fullMinX = Math.min(...fullPaths.map(p => p.minX));
let fullMaxX = Math.max(...fullPaths.map(p => p.maxX));
let fullMinY = Math.min(...fullPaths.map(p => p.minY));
let fullMaxY = Math.max(...fullPaths.map(p => p.maxY));

const fullScreenMinX = fullMinX * 0.1;
const fullScreenMaxX = fullMaxX * 0.1;
const fullScreenMinY = 522 - (fullMaxY * 0.1);
const fullScreenMaxY = 522 - (fullMinY * 0.1);
const fullW = fullScreenMaxX - fullScreenMinX;
const fullH = fullScreenMaxY - fullScreenMinY;

const padFull = 15;
const fullViewBox = `${(fullScreenMinX - padFull).toFixed(1)} ${(fullScreenMinY - padFull).toFixed(1)} ${(fullW + padFull * 2).toFixed(1)} ${(fullH + padFull * 2).toFixed(1)}`;

const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${fullViewBox}" preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
    ${fullPaths.map(p => `<path d="${p.d}"/>`).join('\n    ')}
  </g>
</svg>`;
fs.writeFileSync('public/logo.svg', fullSvg);

// Also generate a version with "Sunsari, Nepal" as clean text below if desired!
const fullWithTextSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${(fullScreenMinX - padFull).toFixed(1)} ${(fullScreenMinY - padFull).toFixed(1)} ${(fullW + padFull * 2).toFixed(1)} ${(fullH + padFull * 2 + 35).toFixed(1)}" preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
    ${fullPaths.map(p => `<path d="${p.d}"/>`).join('\n    ')}
  </g>
  <text x="${(fullScreenMinX + fullW / 2).toFixed(1)}" y="${(fullScreenMaxY + 28).toFixed(1)}" text-anchor="middle" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="14" font-weight="600" letter-spacing="4" fill="currentColor">SUNSARI, NEPAL</text>
</svg>`;
fs.writeFileSync('public/logo-with-location.svg', fullWithTextSvg);

console.log('Successfully regenerated public/logo-mark.svg, public/logo.svg, and public/logo-with-location.svg');
