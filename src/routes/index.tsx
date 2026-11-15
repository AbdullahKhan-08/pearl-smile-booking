import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ChevronDown, Clock3, Heart, Menu, Phone, ShieldCheck, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import appointmentPhoto from "@/assets/pearl-dental-appointment.jpg";

const clinicPhoneHref = "tel:+994409157750";
const mapSearchUrl = `https://www.google.com/maps/embed/v1/search?key=${import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"]}&q=Pearl%20Dental%20Clinic`;

const services = [
  { number: "01", icon: Sparkles, name: "Everyday dentistry", title: "A healthier smile, one visit at a time.", text: "Thoughtful checkups, gentle cleanings, and preventive care made to feel like a little less of a big deal." },
  { number: "02", icon: Heart, name: "Cosmetic dentistry", title: "Feel more like yourself, smiling.", text: "From a brighter smile to a small refinement, explore options that feel right for you and your goals." },
  { number: "03", icon: ShieldCheck, name: "Restorative care", title: "Comfortable care when you need it.", text: "Get to know your treatment options with a clear plan and supportive guidance at every step." },
];

const faqs = [
  { question: "What should I expect at my first visit?", answer: "Your first appointment is a chance to get to know you and your smile. We’ll talk through your dental history, listen to your goals, and make a care plan together." },
  { question: "I feel nervous about visiting the dentist. Can you help?", answer: "Absolutely. Let us know how you’re feeling when you book. We’ll take things at your pace, explain what’s happening, and make space for questions." },
  { question: "How do I book an appointment?", answer: "Give our team a call to find a time and let us know what brings you in. We look forward to speaking with you." },
  { question: "Do you welcome new patients?", answer: "We’d love to meet you. Call the clinic and our team can share current availability and help you plan a first visit." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl Dental Clinic | A little more at ease" },
      { name: "description", content: "A thoughtful, welcoming dental experience at Pearl Dental Clinic. Meet your team, explore our care, and get in touch to arrange a visit." },
      { property: "og:title", content: "Pearl Dental Clinic | A little more at ease" },
      { property: "og:description", content: "Thoughtful dental care, with a little more ease at every visit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PearlHome,
});

function PearlHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="topline"><div className="topline-inner"><span>Thoughtful dentistry. A more comfortable visit.</span><a href={clinicPhoneHref}><Phone size={13} /> Call our team</a></div></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Pearl Dental Clinic home"><span className="brand-mark"><span></span><span></span><i /></span><span className="brand-name">pearl<small>DENTAL CLINIC</small></span></a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#care" onClick={() => setMenuOpen(false)}>Our care</a><a href="#experience" onClick={() => setMenuOpen(false)}>Your visit</a><a href="#questions" onClick={() => setMenuOpen(false)}>FAQs</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-phone" href={clinicPhoneHref}><Phone size={15} /> Call the clinic</a>
          <Button asChild className="header-book"><a href="#contact" onClick={() => setMenuOpen(false)}>Arrange a visit <ArrowRight size={15} /></a></Button>
        </nav>
        <Button variant="ghost" size="icon" className="menu-trigger" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow"><span className="eyebrow-line" /> A WARMER KIND OF DENTAL CARE</span>
          <h1>Feel good<br />about your <em>smile.</em></h1>
          <p className="hero-copy">At Pearl, good dentistry starts with feeling at ease. Get thoughtful care, clear answers, and a little more room to be yourself.</p>
          <div className="hero-actions"><Button asChild className="pearl-button"><a href="#contact">Let’s plan your visit <ArrowRight size={17} /></a></Button><a href="#care" className="text-link">Get to know us <ArrowDown size={15} /></a></div>
          <div className="hero-note"><div className="note-icon"><Heart size={17} /></div><span><strong>Care that meets you where you are.</strong><br />A little more listening. A lot less rushing.</span></div>
        </div>
        <div className="hero-visual"><div className="hero-image-wrap"><img src={appointmentPhoto} alt="A patient and her dentist talk through her care plan together" width={1920} height={1440} fetchPriority="high" /><div className="image-scrim" /></div><div className="visual-label"><span>GOOD TO MEET YOU</span><span>YOUR DENTAL HOME, REIMAGINED <ArrowRight size={14} /></span></div><div className="hero-stamp"><span>CARE WITH</span><Heart size={20} /><span>A LITTLE MORE</span><strong>heart</strong></div></div>
      </section>

      <div className="trust-strip" aria-label="Our approach to your care"><div className="trust-item"><Heart /><span>Gentle, personal care</span></div><span className="trust-dot">✳</span><div className="trust-item"><Sparkles /><span>Made around you</span></div><span className="trust-dot">✳</span><div className="trust-item"><ShieldCheck /><span>Clear answers, always</span></div><span className="trust-dot">✳</span><div className="trust-item"><Clock3 /><span>Time to feel at ease</span></div></div>

      <section className="welcome section-padding" id="experience"><div className="welcome-kicker">A NOTE FROM PEARL</div><div className="welcome-body"><h2>Good care should feel <em>good, too.</em></h2><div className="welcome-copy"><p>We believe a trip to the dentist can be more than a box to check. It can be a place where you feel heard, understand your options, and leave feeling taken care of.</p><a href="#contact" className="text-link">Come say hello <ArrowRight size={15} /></a></div></div><div className="welcome-bottom"><span>NO JUDGEMENT. JUST A FRESH START.</span><span>THE PEARL WAY · EST. WITH CARE</span></div></section>

      <section className="care-section" id="care"><div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" /> GET THE CARE YOU NEED</span><h2>Here for every<br /><em>kind of smile.</em></h2></div><p>Whether it’s time for a checkup or you’re exploring something new, we’ll find the right place to start — together.</p></div><div className="service-list">{services.map(({ number, icon: Icon, name, title, text }) => <article className="service-row" key={number}><span className="service-number">{number} <span>—</span> PEARL DENTAL</span><div className="service-middle"><div className="service-icon"><Icon /></div><div><span className="service-name">{name}</span><h3>{title}</h3><p>{text}</p></div></div><a className="service-arrow" href={clinicPhoneHref} aria-label={`Call about ${name}`}><ArrowRight size={21} /></a></article>)}</div></section>

      <section className="comfort-section"><div className="comfort-top"><span className="eyebrow"><span className="eyebrow-line" /> YOU’RE IN GOOD HANDS</span><span className="comfort-index">THE PEARL PROMISE&nbsp; · &nbsp;01—04</span></div><div className="comfort-content"><h2>Dental visits,<br />a little more <em>human.</em></h2><div className="comfort-note"><p>We’ll explain what’s happening, hear what matters to you, and make your next step feel doable. Because caring for your smile should never mean putting your comfort second.</p><Button asChild variant="outline" className="outline-button"><a href="#contact">Meet us where you are <ArrowRight size={16} /></a></Button></div></div><div className="comfort-bottom"><span>LISTEN FIRST.</span><span>EXPLAIN EVERYTHING.</span><span>MOVE AT YOUR PACE.</span><span>ALWAYS YOUR CALL.</span></div></section>

      <section className="faq-section" id="questions"><div className="faq-intro"><span className="eyebrow"><span className="eyebrow-line" /> GOOD QUESTIONS, GOOD ANSWERS</span><h2>A little clarity<br /><em>goes a long way.</em></h2><p>Curious about a first visit? Our team is always just a phone call away.</p><a className="text-link" href={clinicPhoneHref}>Talk to our team <ArrowRight size={15} /></a></div><div className="faq-list">{faqs.map(({ question, answer }, index) => <article className={`faq-item ${openFaq === index ? "faq-open" : ""}`} key={question}><button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><span className="faq-chevron"><ChevronDown size={16} /></span></button>{openFaq === index && <p className="faq-answer">{answer}</p>}</article>)}</div></section>

      <section className="contact-section" id="contact">
        <div className="contact-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> FIND A TIME TO VISIT</span>
          <h2>We’re here when<br /><em>you’re ready.</em></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <h3>Sample opening hours</h3>
            <p className="hours-note">Temporary hours — please confirm with the clinic before visiting.</p>
            <dl className="hours-list">
              <div><dt>Monday – Friday</dt><dd>9:00 am – 6:00 pm</dd></div>
              <div><dt>Saturday</dt><dd>10:00 am – 2:00 pm</dd></div>
              <div><dt>Sunday</dt><dd>Closed</dd></div>
            </dl>
            <div className="contact-phone">
              <span>CALL THE CLINIC</span>
              <a href={clinicPhoneHref}><Phone size={16} /> +994 40 915 77 50</a>
            </div>
          </div>
          <div className="contact-map-wrap">
            <iframe
              className="contact-map"
              src={mapSearchUrl}
              title="Google Maps search for Pearl Dental Clinic"
              loading="lazy"
              referrerPolicy="no-referrer"
              allowFullScreen
            />
            <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Pearl%20Dental%20Clinic" target="_blank" rel="noreferrer">Open the search in Google Maps <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="closing-cta"><div className="cta-flower" aria-hidden="true">✳</div><span className="eyebrow">WHENEVER YOU’RE READY</span><h2>Let’s make your next<br />visit feel <em>different.</em></h2><p>We’d love to get to know you and your smile.</p><Button asChild className="pearl-button cta-button"><a href={clinicPhoneHref}><Phone size={16} /> Give us a call <ArrowRight size={16} /></a></Button><span className="cta-footnote">ONE QUESTION OR A WHOLE NEW CARE PLAN. WE’RE HERE.</span></section>

      <footer className="site-footer"><div className="footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span></span><span></span><i /></span><span className="brand-name">pearl<small>DENTAL CLINIC</small></span></a><p>A little more ease.<br />A lot more reason to smile.</p><div className="footer-links"><span>LET’S GET TO KNOW EACH OTHER</span><a href="#care">Our care</a><a href="#experience">Your visit</a><a href="#questions">FAQs</a><a href="#contact">Contact</a></div><div className="footer-contact"><span>WE’RE JUST A CALL AWAY</span><a href={clinicPhoneHref}><Phone size={14} /> Call the clinic <ArrowRight size={15} /></a><p>Ask us a question or request an appointment.<br />Our team will be happy to help.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PEARL DENTAL CLINIC</span><span>MADE WITH CARE, FOR YOUR SMILE <Heart size={12} /></span></div></footer>
    </main>
  );
}