import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const clientLogos = [
  { src: "/images/client-image.svg", alt: "KOBE" },
  { src: "/images/client-image-2.svg", alt: "On_Event" },
  { src: "/images/client-image-3.svg", alt: "theo" },
  { src: "/images/client-image-4.svg", alt: "oslo." },
  { src: "/images/client-image-5.svg", alt: "Imprintify" },
  { src: "/images/client-image-6.svg", alt: "Berlin." },
  { src: "/images/client-image-7.svg", alt: "U-Turn" },
  { src: "/images/client-image-8.svg", alt: "Swiss" },
];

const integrationIcons = [
  { src: "/images/integration-image.svg", alt: "Integration 1" },
  { src: "/images/integration-image-2.svg", alt: "Integration 2" },
  { src: "/images/integration-image-3.svg", alt: "Integration 3" },
  { src: "/images/integration-image-4.svg", alt: "Integration 4" },
  { src: "/images/integration-image-5.svg", alt: "Integration 5" },
  { src: "/images/integration-image-6.svg", alt: "Integration 6" },
  { src: "/images/integration-image-7.svg", alt: "Integration 7" },
  { src: "/images/integration-image-8.svg", alt: "Integration 8" },
  { src: "/images/integration-image-9.svg", alt: "Integration 9" },
  { src: "/images/integration-image-10.svg", alt: "Integration 10" },
];

export default function Home() {
  return (
    <div className={styles.main}>
      {/* HERO SECTION */}
      <section className={`${styles.hero} bg-lavender`}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeNew}>New</span>
              <span>Revolutionize your design workflow</span>
            </div>
            <h1 className="h1">Bring ideas to life in just a few clicks.</h1>
            <p className={styles.heroSubtitle}>
              Design, prototype, and collaborate in real-time - all in one
              powerful platform. Elevate your <strong>creative process</strong>{" "}
              with <strong>seamless teamwork</strong> and limitless
              possibilities.
            </p>
            <Link href="/signup" className={styles.heroBtn}>
              Get Started • it&apos;s free
              <span className={styles.heroBtnIcon}>
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          {/* Hero Images */}
          <div className={styles.heroImages}>
            <div className={styles.heroMainImage}>
              <Image
                src="/images/hero-image.png"
                alt="Draftr design tool"
                width={900}
                height={560}
                priority
              />
            </div>
            <div className={styles.heroSideImage}>
              <Image
                src="/images/hero-image-2.png"
                alt="Draftr mobile"
                width={380}
                height={440}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <section className={styles.clients}>
        <div className={styles.marqueeWrapper}>
          <ul className={styles.marqueeTrack}>
            {[
              ...clientLogos,
              ...clientLogos,
              ...clientLogos,
              ...clientLogos,
            ].map((logo, i) => (
              <li key={i} className={styles.clientLogo}>
                <Image src={logo.src} alt={logo.alt} width={114} height={36} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresSectionTitle}>
            <h2 className="h2">
              The ultimate toolkit for designers &amp; teams
            </h2>
            <p className={styles.heroSubtitle}>
              Everything you need to create, prototype, and collaborate - all in
              a single, easy-to-use platform.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureImageWrap}>
                <Image
                  src="/images/feature-image.png"
                  alt="Drag and drop editor"
                  width={500}
                  height={430}
                />
              </div>
              <div className={styles.featureContent}>
                <h3>Intuitive drag &amp; drop editor</h3>
                <p>
                  Create stunning designs effortlessly with a user-friendly
                  interface.
                </p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImageWrap}>
                <Image
                  src="/images/feature-image-3.png"
                  alt="Advanced prototyping"
                  width={500}
                  height={430}
                />
              </div>
              <div className={styles.featureContent}>
                <h3>Advanced prototyping</h3>
                <p>
                  Turn ideas into interactive prototypes without writing a
                  single line of code.
                </p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImageWrap}>
                <Image
                  src="/images/feature-image-5.png"
                  alt="Real-time collaboration"
                  width={500}
                  height={430}
                />
              </div>
              <div className={styles.featureContent}>
                <h3>Real-time collaboration</h3>
                <p>Work seamlessly with your team, get instant feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className={styles.workflow}>
        <div className={styles.workflowContainer}>
          <div className={styles.workflowGrid}>
            <div className={styles.workflowLeft}>
              <h2 className="h2">Simplify your workflow</h2>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>01</div>
                  <div className={styles.stepContent}>
                    <h3>Start your project</h3>
                    <p>
                      Create a new design or import files with just a click. Set
                      up your workspace effortlessly.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>02</div>
                  <div className={styles.stepContent}>
                    <h3>Design with ease</h3>
                    <p>
                      Use our intuitive drag-and-drop editor, smart tools
                      stunning designs.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>03</div>
                  <div className={styles.stepContent}>
                    <h3>Export &amp; Share</h3>
                    <p>
                      Easily integrate with your favorite tools to launch your
                      project effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.workflowRight}>
              <div className={styles.workflowImageWrap}>
                <Image
                  src="/images/step-image.png"
                  alt="Workflow preview"
                  width={600}
                  height={500}
                />
              </div>
              <div className={styles.availableOn}>
                Available on Windows &amp; Mac
                <span className={styles.platformBtn}>
                  <Image
                    src="/images/icon-2.svg"
                    alt="Windows"
                    width={20}
                    height={20}
                  />
                </span>
                <span className={styles.platformBtn}>
                  <Image
                    src="/images/icon-3.svg"
                    alt="Mac"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS SECTION */}
      <section className={styles.integrations}>
        <div className={styles.integrationsContainer}>
          <div className={styles.integrationsGrid}>
            <div className={styles.integrationsLeft}>
              <div className={styles.integrationsTree}>
                <div className={styles.integrationsIconsRow}>
                  {integrationIcons.slice(0, 5).map((icon, i) => (
                    <div key={i} className={styles.integrationIcon}>
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={64}
                        height={64}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.integrationsIconsRow}>
                  {integrationIcons.slice(5).map((icon, i) => (
                    <div key={i} className={styles.integrationIcon}>
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={64}
                        height={64}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.treeLines}>
                  <svg
                    viewBox="0 0 540 200"
                    width="540"
                    height="200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Left outer curve */}
                    <path
                      d="M1 0c0 150 250 75 250 200"
                      stroke="rgba(82, 53, 239, 0.2)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Left mid curve */}
                    <path
                      d="M250 200c0-125-150-50-150-200"
                      stroke="rgba(82, 53, 239, 0.2)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Left inner curve */}
                    <path
                      d="M250 200c0-125-50-50-50-200"
                      stroke="rgba(82, 53, 239, 0.2)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Right inner curve */}
                    <path
                      d="M250 200c0-125 50-50 50-200"
                      stroke="rgba(82, 53, 239, 0.2)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Right mid curve */}
                    <path
                      d="M250 200c0-125 150-50 150-200"
                      stroke="rgba(82, 53, 239, 0.2)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Right outer curve */}
                    <path
                      d="M250 200c0-125 250-50 250-200"
                      stroke="rgba(82, 53, 239, 0.2)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className={styles.treeCenterIcon}>
                  <Image
                    src="/images/logo.svg"
                    alt="Draftr"
                    width={50}
                    height={58}
                  />
                </div>
              </div>
            </div>
            <div className={styles.integrationsRight}>
              <div className={styles.integrationsSectionTitle}>
                <h2 className="h2">One platform, unlimited integrations</h2>
                <Link
                  href="/power-ups"
                  className={styles.pricingBtnDark}
                  style={{ alignSelf: "flex-start", margin: 0 }}
                >
                  View all integrations
                </Link>
              </div>
              <div className={styles.ceoQuoteWrap}>
                <blockquote className={styles.ceoQuote}>
                  &ldquo;Our platform empowers teams to collaborate, innovate,
                  and bring ideas to life—seamlessly and effortlessly.&rdquo;
                </blockquote>
                <div className={styles.ceoInfo}>
                  <Image
                    src="/images/sofia-delgado.jpg"
                    alt="Daniel Vaughn"
                    width={35}
                    height={35}
                    className={styles.ceoAvatar}
                  />
                  <span>Daniel Vaughn, Founder &amp; CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK FEATURES SECTION */}
      <section className={styles.darkFeaturesWrap}>
        <div className={styles.darkFeatures}>
          <div className={`${styles.darkFeaturesSectionTitle} text-center`}>
            <h2 className="h2" style={{ color: "var(--white)" }}>
              Power up your workflow with next-gen features
            </h2>
          </div>

          <div className={styles.darkCardsGrid}>
            <div className={styles.darkCard}>
              <div className={styles.darkCardImage}>
                <div className={styles.cardComposition}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/dark-card-bg.png"
                    alt=""
                    className={styles.cardBgMap}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/cloud-icon.svg"
                    alt=""
                    className={styles.cardCloudIcon}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/element-image.svg"
                    alt=""
                    className={styles.cardCursorLeft}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/cloud-image.svg"
                    alt=""
                    className={styles.cardCursorRight}
                  />
                </div>
              </div>
              <div className={styles.darkCardContent}>
                <h3 className="h3" style={{ color: "var(--white)" }}>
                  Cloud-based accessibility
                </h3>
                <p className="body-md">
                  Access your projects anytime, anywhere—no downloads or
                  installations needed.
                </p>
              </div>
            </div>
            <div className={styles.darkCard}>
              <div className={styles.darkCardImage}>
                <div className={styles.cardComposition}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icon-7.svg"
                    alt=""
                    className={styles.cardLightning}
                  />
                  <div className={styles.cardArrows}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/arrow-icon.svg"
                      alt=""
                      style={{ width: "28px", opacity: 0.3 }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/arrow-icon.svg"
                      alt=""
                      style={{ width: "34px", opacity: 0.5 }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/arrow-icon.svg"
                      alt=""
                      style={{ width: "46px", opacity: 0.7 }}
                    />
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icon-9.svg"
                    alt=""
                    className={styles.cardShield}
                  />
                </div>
              </div>
              <div className={styles.darkCardContent}>
                <h3 className="h3" style={{ color: "var(--white)" }}>
                  Fast &amp; secure performance
                </h3>
                <p className="body-md">
                  Experience lightning-fast speed with enterprise-level security
                  and version control.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.darkFeaturesRow}>
            <div className={styles.darkFeatureItem}>
              <div className={styles.darkFeatureIcon}>
                <Image src="/images/icon-4.svg" alt="" width={22} height={22} />
              </div>
              <div>
                <h3 className="h3" style={{ color: "var(--white)" }}>
                  Effortless design experience
                </h3>
                <p className="body-md">
                  Intuitive interface and smart tools to speed up your creative
                  process.
                </p>
              </div>
            </div>
            <div className={styles.darkFeatureItem}>
              <div className={styles.darkFeatureIcon}>
                <Image src="/images/icon-5.svg" alt="" width={22} height={22} />
              </div>
              <div>
                <h3 className="h3" style={{ color: "var(--white)" }}>
                  Hassle-free prototyping
                </h3>
                <p className="body-md">
                  Transform static designs into interactive prototypes in just a
                  few clicks.
                </p>
              </div>
            </div>
            <div className={styles.darkFeatureItem}>
              <div className={styles.darkFeatureIcon}>
                <Image src="/images/icon-6.svg" alt="" width={22} height={22} />
              </div>
              <div>
                <h3 className="h3" style={{ color: "var(--white)" }}>
                  One-click export &amp; handoff
                </h3>
                <p className="body-md">
                  Generate code, export assets, and collaborate with developers
                  effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialsLeft}>
              <h2 className="h2">Loved by designers &amp; teams</h2>
            </div>
            <div className={styles.testimonialsRight}>
              <div className={styles.avatarStack}>
                <Image
                  src="/images/aavtar-image.jpg"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
                <Image
                  src="/images/aavtar-image-2.jpg"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
                <Image
                  src="/images/aavtar-image-3.jpg"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
                <Image
                  src="/images/aavtar-image-4.jpg"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
                <Image
                  src="/images/aavtar-image-5.jpg"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
              </div>
              <blockquote className={styles.testimonialQuote}>
                &ldquo;As a small agency, time is everything. Draftr helped us
                streamline client communication, feedback loops, and approvals —
                now we deliver projects faster and with less
                back-and-forth.&rdquo;
              </blockquote>
              <p className={styles.testimonialAuthor}>
                Ryan Chen, Creative Director, Pixel &amp; Hue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className={styles.pricing}>
        <div className={styles.pricingContainer}>
          <div className={styles.pricingSectionTitle}>
            <h2 className="h2">Flexible pricing plans</h2>
            <p className={styles.heroSubtitle}>
              Choose a plan that grows with you. Start for free and upgrade
              anytime for more features and support
            </p>
            <div className={styles.pricingToggle}>
              <span>Monthly</span>
              <div className={styles.toggleSwitch} />
              <span>
                Yearly <span className={styles.discountBadge}>20%off</span>
              </span>
            </div>
          </div>

          <div className={styles.pricingGrid}>
            {/* Starter */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTop}>
                <div className={styles.pricingPriceRow}>
                  <div className={styles.pricingTitleRow}>
                    <h3>Starter plan</h3>
                    <p>For individuals &amp; new creators</p>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.amount}>$19</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <Link href="#" className={styles.pricingBtnDark}>
                  Get Started
                </Link>
              </div>
              <div className={styles.pricingFeatures}>
                <p className={styles.includedLabel}>Included features:</p>
                <ul className={styles.featuresList}>
                  <li>1 active project</li>
                  <li>Basic collaboration tools</li>
                  <li>Limited prototyping options</li>
                  <li>500MB cloud storage</li>
                  <li className={styles.featureStrikethrough}>Seamless third-party integrations</li>
                  <li className={styles.featureStrikethrough}>Community support</li>
                </ul>
              </div>
            </div>

            {/* Pro */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTop}>
                <div className={styles.pricingPriceRow}>
                  <div className={styles.pricingTitleRow}>
                    <h3>Pro plan</h3>
                    <p>For freelancers &amp; small teams</p>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.amount}>$49</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <Link href="#" className={styles.pricingBtnPrimary}>
                  Get Started
                </Link>
              </div>
              <div className={styles.pricingFeatures}>
                <p className={styles.includedLabel}>Included features:</p>
                <ul className={styles.featuresList}>
                  <li>Unlimited projects</li>
                  <li>Real-time collaboration</li>
                  <li>Advanced prototyping tools</li>
                  <li>Cloud storage &amp; version history</li>
                  <li>Seamless third-party integrations</li>
                  <li className={styles.featureStrikethrough}>Email &amp; chat support</li>
                </ul>
              </div>
            </div>

            {/* Business */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTop}>
                <div className={styles.pricingPriceRow}>
                  <div className={styles.pricingTitleRow}>
                    <h3>Business plan</h3>
                    <p>For growing teams &amp; agencies</p>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.amount}>$79</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <Link href="#" className={styles.pricingBtnDark}>
                  Get Started
                </Link>
              </div>
              <div className={styles.pricingFeatures}>
                <p className={styles.includedLabel}>Included features:</p>
                <ul className={styles.featuresList}>
                  <li>Everything in Pro +</li>
                  <li>Team management &amp; permissions</li>
                  <li>Enhanced security controls</li>
                  <li>Priority integrations &amp; API access</li>
                  <li>Advanced cloud storage</li>
                  <li>24/7 priority support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaLeft}>
              <div className={styles.ctaMockup}>
                <Image
                  src="/images/app-image.png"
                  alt="App mockup"
                  width={500}
                  height={600}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/element-image-6.png"
                  alt=""
                  className={styles.ctaOverlay}
                />
              </div>
            </div>
            <div className={styles.ctaRight}>
              <div className={styles.ctaTitleWrap}>
                <h2 className="h2">
                  The perfect design solution for every workflow
                </h2>
                <p className={styles.heroSubtitle} style={{ textAlign: "left" }}>
                  Discover how our design platform fits your needs, whether
                  you&apos;re a freelancer, startup, or enterprise.
                </p>
              </div>
              <div className={styles.ctaLinks}>
                <Link href="#">
                  <ArrowRight size={16} /> UI/UX designers
                </Link>
                <Link href="#">
                  <ArrowRight size={16} /> App &amp; Web developers
                </Link>
                <Link href="#">
                  <ArrowRight size={16} /> Product teams
                </Link>
                <Link href="#">
                  <ArrowRight size={16} /> Marketing teams
                </Link>
                <Link href="#">
                  <ArrowRight size={16} /> Enterprises Organizations
                </Link>
                <Link href="#">
                  <ArrowRight size={16} /> Agencies &amp; Enterprises
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaContainer}>
          <div className={styles.finalCtaSectionTitle}>
            <h2 className="h2" style={{ textAlign: "center" }}>
              Take your creative workflow to the next level
            </h2>
            <p className={styles.heroSubtitle}>
              Supercharge your workflow with powerful design tools and effortless
              collaboration—perfect for freelancers and teams.
            </p>
            <div className={styles.finalCtaActions}>
              <Link href="/signup" className={styles.heroBtn}>
                Get Started
                <span className={styles.heroBtnIcon}>
                  <ArrowRight size={16} />
                </span>
              </Link>
              <div className={styles.platformLogos}>
                <span className={styles.platformBtnLg}>
                  <Image
                    src="/images/icon-2.svg"
                    alt="Windows"
                    width={20}
                    height={20}
                  />
                </span>
                <span className={styles.platformBtnLg}>
                  <Image
                    src="/images/icon-3.svg"
                    alt="Mac"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.finalCtaImage}>
            <div className={styles.finalCtaDashboard}>
              <Image
                src="/images/dashboard.png"
                alt="Draftr dashboard"
                width={1100}
                height={650}
              />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cursor-mike.svg"
              alt=""
              className={styles.finalCtaCursor}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
