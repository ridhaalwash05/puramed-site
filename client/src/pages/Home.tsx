import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  CircleArrowUp,
  Clock3,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Play,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const pillars = [
  {
    number: "01",
    title: "Translate evidence",
    body: "We turn complex health research into clear ideas that students, communities, and decision-makers can use.",
    color: "teal",
  },
  {
    number: "02",
    title: "Build better questions",
    body: "We give curious students a place to interrogate the systems shaping health — and design sharper questions together.",
    color: "coral",
  },
  {
    number: "03",
    title: "Make room at the table",
    body: "We create routes for young people to publish, convene, and contribute to the future of health.",
    color: "yellow",
  },
];

const stories = [
  {
    tag: "FIELD NOTE",
    title: "The care between the lines",
    excerpt: "What community health workers teach us about trust, proximity, and the invisible work of keeping people well.",
    author: "Maya El-Sayed",
    date: "Sep 12, 2026",
    read: "6 min read",
    tone: "story-teal",
  },
  {
    tag: "THE PURAMED BRIEF",
    title: "Who gets to be healthy?",
    excerpt: "A new generation of health thinkers is asking a simple question with complicated consequences.",
    author: "PuraMed Editorial",
    date: "Sep 05, 2026",
    read: "4 min read",
    tone: "story-coral",
  },
  {
    tag: "STUDENT VOICES",
    title: "Learning to look twice",
    excerpt: "Three students on the moments that changed how they see a patient, a policy, and their own role in care.",
    author: "The PuraMed Circle",
    date: "Aug 29, 2026",
    read: "8 min read",
    tone: "story-navy",
  },
];

function Mark({ light = false }: { light?: boolean }) {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span className={light ? "mark-tile light" : "mark-tile"}>
        <span className="mark-line mark-line-one" />
        <span className="mark-line mark-line-two" />
        <span className="mark-line mark-line-three" />
      </span>
      <span className={light ? "brand-name light" : "brand-name"}>PuraMed</span>
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={light ? "eyebrow eyebrow-light" : "eyebrow"}>{children}</div>;
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Enter a valid email address to join the circle.");
      return;
    }
    setSubmitted(true);
    toast.success("You’re on the list. See you in the next Brief.");
    setEmail("");
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <main className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        <span>Applications for the 2026 PuraMed Circle are open</span>
        <a href="#join" onClick={closeMobile}>
          Apply now <ArrowUpRight size={13} />
        </a>
      </div>

      <header className="site-nav">
        <a href="#top" aria-label="PuraMed home" onClick={closeMobile}>
          <Mark />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#why">Why PuraMed</a>
          <a href="#programs">Programs</a>
          <a href="#brief">The Brief</a>
          <a href="#about">About us</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search" onClick={() => toast("Search is coming soon") }>
            <Search size={18} strokeWidth={1.8} />
          </button>
          <a className="nav-join" href="#join">Join the circle <ArrowUpRight size={15} /></a>
          <button className="mobile-menu-button" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((open) => !open)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#why" onClick={closeMobile}>Why PuraMed</a>
            <a href="#programs" onClick={closeMobile}>Programs</a>
            <a href="#brief" onClick={closeMobile}>The Brief</a>
            <a href="#about" onClick={closeMobile}>About us</a>
            <a href="#join" className="mobile-join" onClick={closeMobile}>Join the circle <ArrowUpRight size={15} /></a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <Eyebrow>Student-led health thinking</Eyebrow>
          <h1>Health is more than a <em>headline.</em></h1>
          <p className="hero-deck">PuraMed is a global community of students making space for the questions, ideas, and people shaping a healthier world.</p>
          <div className="hero-actions">
            <a href="#why" className="button button-dark">Explore our thinking <ArrowUpRight size={16} /></a>
            <a href="#brief" className="text-link">Read the latest <ChevronRight size={15} /></a>
          </div>
          <div className="hero-note"><span className="note-rule" /> New ideas for an old question: <strong>who gets to be well?</strong></div>
        </div>
        <div className="hero-art-wrap">
          <img className="hero-art" src="/manus-storage/puramed-hero-blue_1cca2653.png" alt="Blue flowing river and butterflies representing the butterfly effect, knowledge, and connected health" />
          <div className="hero-art-caption"><span>01 / 04</span><span>Care is collective.</span></div>
          <div className="hero-stamp"><Sparkles size={16} /><span>Ideas in<br />motion</span></div>
        </div>
      </section>

      <section className="manifesto-section" id="why">
        <div className="manifesto-topline"><span>We believe</span><span>Scroll to discover <CircleArrowUp size={16} /></span></div>
        <div className="manifesto-grid">
          <div className="manifesto-lede">The future of health needs <span>more voices</span> in the room.</div>
          <div className="manifesto-copy"><p>Not just the voices with the most letters after their name. The student with a sharp question. The community member with lived experience. The researcher willing to look again.</p><p>PuraMed is where those voices meet — to learn, challenge, and imagine better ways of caring for one another.</p><a href="#about" className="underlined-link">Our point of view <ArrowUpRight size={14} /></a></div>
        </div>
        <div className="ticker" aria-hidden="true"><span>research</span><i>✳</i><span>community</span><i>✳</i><span>curiosity</span><i>✳</i><span>care</span><i>✳</i><span>research</span><i>✳</i><span>community</span></div>
      </section>

      <section className="pillars-section" id="programs">
        <div className="section-heading-row"><div><Eyebrow>How we work</Eyebrow><h2>Small questions.<br /><em>Wide ripples.</em></h2></div><p>We build the conditions for thoughtful health leadership: a place to think slowly, work collectively, and leave things better than we found them.</p></div>
        <div className="pillars-grid">
          {pillars.map((pillar) => <article className={`pillar-card ${pillar.color}`} key={pillar.number}><div className="pillar-number">{pillar.number}</div><div><h3>{pillar.title}</h3><p>{pillar.body}</p><a href="#join" className="circle-arrow" aria-label={`Learn about ${pillar.title}`}><ArrowUpRight size={17} /></a></div></article>)}
        </div>
      </section>

      <section className="programs-banner">
        <div className="programs-text"><Eyebrow light>For curious people</Eyebrow><h2>There is a place for<br /><em>your kind of curious.</em></h2><p>Whether you want to write, research, convene, or simply ask better questions — come as you are.</p><a href="#join" className="button button-light">Find your way in <ArrowUpRight size={16} /></a></div>
        <div className="programs-list">
          <a href="#join" className="program-row"><span className="program-index">01</span><span><strong>The PuraMed Circle</strong><small>A six-month student fellowship</small></span><ArrowUpRight size={20} /></a>
          <a href="#join" className="program-row"><span className="program-index">02</span><span><strong>Open Research Studio</strong><small>Collaborative projects in public health</small></span><ArrowUpRight size={20} /></a>
          <a href="#brief" className="program-row"><span className="program-index">03</span><span><strong>The Brief</strong><small>A weekly dispatch for better health thinking</small></span><ArrowUpRight size={20} /></a>
        </div>
      </section>

      <section className="brief-section" id="brief">
        <div className="section-heading-row brief-heading"><div><Eyebrow>The PuraMed Brief</Eyebrow><h2>Read widely.<br /><em>Think deeply.</em></h2></div><div className="brief-heading-side"><p>A weekly letter about the ideas, systems, and people changing how we understand health.</p><a href="#newsletter" className="underlined-link">Get it in your inbox <ArrowUpRight size={14} /></a></div></div>
        <div className="stories-grid">
          {stories.map((story, index) => <article className={`story-card ${index === 0 ? "story-featured" : ""}`} key={story.title}><div className={`story-art ${story.tone}`}><span className="story-art-mark">{index === 0 ? "◒" : index === 1 ? "✳" : "∿"}</span><span className="story-tag">{story.tag}</span></div><div className="story-body"><div className="story-meta"><span>{story.date}</span><span>{story.read}</span></div><h3>{story.title}</h3><p>{story.excerpt}</p><div className="story-footer"><span className="author-avatar">{story.author.split(" ").map((part) => part[0]).join("")}</span><span>{story.author}</span><button className="read-button" onClick={() => toast("Full story publishing is coming soon")}>Read story <ArrowUpRight size={14} /></button></div></div></article>)}
        </div>
        <div className="brief-footer"><span>More from the archive</span><a href="#newsletter" className="button button-outline">Browse all writing <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="newsletter-section" id="newsletter">
        <div className="newsletter-copy"><Eyebrow>Never miss a thought</Eyebrow><h2>Keep a little<br /><em>room for wonder.</em></h2><p>One considered email each week. No noise, no jargon — just the best of PuraMed, delivered with care.</p></div>
        <div className="newsletter-form-wrap"><div className="newsletter-number">/ 01</div>{submitted ? <div className="submitted-state"><Sparkles size={26} /><h3>You’re in the circle.</h3><p>Look out for the next Brief in your inbox.</p></div> : <form className="newsletter-form" onSubmit={handleSubscribe}><label htmlFor="email">Your email address</label><div className="input-row"><input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /><button type="submit" aria-label="Subscribe"><ArrowUpRight size={19} /></button></div><span>By subscribing, you agree to receive the PuraMed Brief.</span></form>}</div>
      </section>

      <section className="join-section" id="join"><div className="join-ornament"><BookOpen size={23} /><span>Make a mark<br />with us.</span></div><div className="join-copy"><Eyebrow>Come closer</Eyebrow><h2>Health needs<br /><em>your perspective.</em></h2><p>Tell us what you’re curious about, what you’re building, or what you think we’re missing. There’s always room for another good question.</p><a className="button button-dark" href="mailto:hello@puramed.org?subject=Hello%20PuraMed">Say hello <Mail size={16} /></a></div></section>

      <footer className="site-footer" id="about"><div className="footer-top"><Mark light /><div className="footer-tagline">A student-led health<br />think tank for a<br /><em>more thoughtful</em> future.</div><div className="footer-links"><div><span>Explore</span><a href="#why">Why PuraMed</a><a href="#programs">Programs</a><a href="#brief">The Brief</a></div><div><span>Connect</span><a href="mailto:hello@puramed.org">Email us</a><a href="#join">Join the circle</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></div></div></div><div className="footer-bottom"><span>© 2026 PuraMed. Made with care.</span><span>Health is a shared practice.</span><div className="social-row"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={15} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a><a href="mailto:hello@puramed.org" aria-label="Email"><Mail size={15} /></a></div></div></footer>
    </main>
  );
}
