export default function ContactPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1 text-center" style={{ marginBottom: '24px' }}>Get in touch</h1>
        <p className="body-lg text-center" style={{ marginBottom: '60px' }}>
          Have questions about our plans or want to see a demo? Drop us a message.
        </p>
        
        <form className="card" style={{ padding: '48px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600' }}>First Name</label>
              <input type="text" placeholder="John" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600' }}>Last Name</label>
              <input type="text" placeholder="Doe" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600' }}>Work Email</label>
            <input type="email" placeholder="john@company.com" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600' }}>Message</label>
            <textarea placeholder="Tell us more..." rows={5} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }} />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '12px' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
