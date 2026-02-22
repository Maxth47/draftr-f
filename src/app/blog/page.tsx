export default function BlogPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="h1 text-center" style={{ marginBottom: '60px' }}>Blog</h1>
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card" style={{ overflow: 'hidden' }}>
              <div style={{ aspectRatio: '16/9', background: 'var(--light-bg)' }} />
              <div style={{ padding: '24px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--purple)', textTransform: 'uppercase' }}>Design System</span>
                <h3 className="h3" style={{ margin: '12px 0' }}>The future of multi-platform design workflows</h3>
                <p className="body-md">How to streamline your design process across mobile, web, and desktop using Draftr's newest features.</p>
                <div style={{ marginTop: '20px', fontSize: '14px', color: 'var(--light-grey)' }}>Feb 21, 2024 • 5 min read</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
