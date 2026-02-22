import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      {/* HERO */}
      <section className={`${styles.hero} bg-lavender`}>
        <div className="container">
          <h1 className="h1">Design isn't just what we <br /> do — it's how we think.</h1>
          <p className="body-lg" style={{ maxWidth: '700px', margin: '24px auto 0' }}>
            At Draftr, we're building the next generation of design tools — simple, collaborative, and lightning fast. 
            Our mission is to empower teams to move from idea to execution without friction.
          </p>
          
          <div className={styles.teamHeroImage}>
            {/* Placeholder for team photo */}
            <div className={styles.imagePlaceholder}>
              Team Photo
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueContent}>
              <h2 className="h2">Our values & principles</h2>
              <ul className={styles.principlesList}>
                <li>
                  <strong>Simplicity by default</strong>
                  <p className="body-md">We believe powerful tools shouldn't be complex. We prioritize clarity and ease of use in everything we build.</p>
                </li>
                <li>
                  <strong>Collaboration is core</strong>
                  <p className="body-md">Design is a team sport. Our platform is built from the ground up to make working together seamless.</p>
                </li>
                <li>
                  <strong>Speed as a feature</strong>
                  <p className="body-md">We value your time. Draftr is optimized for performance, so you can stay in the flow without waiting.</p>
                </li>
              </ul>
            </div>
            
            <div className={styles.statsCard}>
              <div className="card" style={{ padding: '60px', background: 'var(--black)', color: 'white', textAlign: 'center' }}>
                <span style={{ fontSize: '80px', fontWeight: '800', lineHeight: '1' }}>98%</span>
                <p className="body-lg" style={{ color: 'var(--light-grey)', marginTop: '20px' }}>
                  Customer satisfaction score across all users worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 className="h2">Meet the team</h2>
            <p className="body-lg">The humans behind the tools you love.</p>
          </div>
          
          <div className={styles.teamGrid}>
            {[
              { name: 'Alex Rivera', role: 'Founder & CEO' },
              { name: 'Sarah Chen', role: 'Head of Product' },
              { name: 'Marcus Thorne', role: 'Engineering Lead' },
              { name: 'Elena Vance', role: 'Design Director' }
            ].map((member, i) => (
              <div key={i} className={styles.teamMember}>
                <div className={styles.memberPhoto} />
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
