export default function PowerUpsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '80px' }}>
          <h1 className="h1">Power-Ups</h1>
          <p className="body-lg" style={{ marginTop: '24px' }}>Extending Draftr with integrations and plugins to supercharge your workflow.</p>
        </div>
        
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {[
            { name: 'Figma Sync', desc: 'Import your Figma designs directly into Draftr while maintaining all layers and styles.' },
            { name: 'Slack Notifications', desc: 'Get notified in Slack whenever someone leaves a comment or updates a design.' },
            { name: 'Github Desktop', desc: 'Push your exported code and assets directly to your Github repositories.' },
            { name: 'Notion Sync', desc: 'Embed interactive Draftr prototypes directly inside your Notion pages.' }
          ].map((item, i) => (
            <div key={i} className="card" style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'var(--light-bg)', borderRadius: '16px', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🔌</div>
              <h3 className="h3" style={{ marginBottom: '12px' }}>{item.name}</h3>
              <p className="body-md">{item.desc}</p>
              <button className="btn btn-outline btn-sm" style={{ marginTop: '24px' }}>Install</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
