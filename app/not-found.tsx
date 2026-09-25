import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B3530',
        color: '#EDE8DE',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontSize: '11px',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: '#CA7D57',
          marginBottom: '16px',
        }}
      >
        404 / Page Not Found
      </span>
      <h1
        style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          fontFamily: 'var(--font-playfair), serif',
          margin: '0 0 20px',
        }}
      >
        This space does not exist.
      </h1>
      <p
        style={{
          maxWidth: '440px',
          fontSize: '15px',
          lineHeight: 1.7,
          color: 'rgba(209, 204, 191, 0.7)',
          marginBottom: '36px',
        }}
      >
        The page you are looking for has been moved, removed, or never built.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '16px 32px',
          backgroundColor: '#CA7D57',
          color: '#1a2320',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
