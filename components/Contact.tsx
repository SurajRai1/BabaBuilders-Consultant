'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { ArrowUpRight, Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (formRef.current) {
        const fields = formRef.current.querySelectorAll('.contact-field, .contact-submit');
        gsap.fromTo(
          fields,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (infoRef.current) {
        const items = infoRef.current.querySelectorAll('.contact-info-card');
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: infoRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    };
    init();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission (replace with actual API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    }, 4000);
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-section section-pad">
      <div className="container">
        <div ref={headingRef} className="contact-header">
          <span className="font-eyebrow contact-eyebrow">
            <span className="contact-eyebrow-line" />
            Get in Touch
          </span>
          <h2>
            Ready to build?
            <br />
            <em>Let&apos;s talk.</em>
          </h2>
          <p className="contact-subtitle">
            Share your vision with us. Whether you&apos;re planning a new home, renovation, or
            commercial project — we&apos;re here to guide you from concept to completion.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <form
            ref={formRef}
            className={`contact-form ${isSubmitted ? 'is-submitted' : ''}`}
            onSubmit={handleSubmit}
          >
            {isSubmitted ? (
              <div className="contact-success">
                <CheckCircle2 size={48} />
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977 98X-XXXXXXX"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-project">Project Type</label>
                  <select
                    id="contact-project"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Home</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="renovation">Renovation / Remodel</option>
                    <option value="consultation">Consultation / Naksha</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project vision, timeline, budget range, or any questions you have..."
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gold btn-slide contact-submit"
                  disabled={isSubmitting}
                >
                  <span className="btn-text">
                    <span>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send size={15} style={{ marginLeft: 8 }} />}
                    </span>
                    <span>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send size={15} style={{ marginLeft: 8 }} />}
                    </span>
                  </span>
                </button>
              </>
            )}
          </form>

          {/* Contact Info Cards */}
          <div ref={infoRef} className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Visit Our Office</h4>
                <p>
                  Dharan Road, Sunsari
                  <br />
                  Koshi Province, Nepal
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+9779800000000">+977 980-0000000</a>
                  <br />
                  <span>Mon – Sat, 9AM – 6PM</span>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:hello@bababuilders.com">hello@bababuilders.com</a>
                  <br />
                  <span>We respond within 24 hours</span>
                </p>
              </div>
            </div>

            <div className="contact-info-card contact-map-card">
              <div className="contact-map-placeholder">
                <MapPin size={28} />
                <span>26° 39&apos; N / 87° 20&apos; E</span>
                <small>Sunsari, Nepal</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
