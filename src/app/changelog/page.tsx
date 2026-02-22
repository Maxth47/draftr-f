export default function ChangelogPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1" style={{ marginBottom: '16px' }}>Changelog</h1>
        <p className="body-lg" style={{ marginBottom: '60px' }}>New features, improvements, and fixes we've released recently.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {[
            { v: 'v2.4.0', date: 'Feb 15, 2024', title: 'Multi-player editing', desc: 'Real-time collaborative editing is now smoother than ever with improved cursor syncing and conflict resolution.' },
            { v: 'v2.3.5', date: 'Jan 28, 2024', title: 'Variable support', desc: 'Define and use local variables for colors and spacing across your entire project.' },
            { v: 'v2.3.0', date: 'Jan 10, 2024', title: 'Asset export revamp', desc: 'One-click export for all your assets in optimized SVG, PNG, and WebP formats.' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '40px' }}>
              <div style={{ flexShrink: 0, width: '120px' }}>
                <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--purple)' }}>{item.date}</span>
                <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '800', background: 'var(--light-bg)', padding: '4px 8px', borderRadius: '4px', display: 'inline-block' }}>{item.v}</div>
              </div>
              <div>
                <h3 className="h3" style={{ marginBottom: '12px' }}>{item.title}</h3>
                <p className="body-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
