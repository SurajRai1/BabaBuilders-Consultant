'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { ArrowUpRight, Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
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
            {t.contact.kicker}
          </span>
          <h2>
            {t.contact.headingLine1}
            <br />
            <em>{t.contact.headingLine2}</em>
          </h2>
          <p className="contact-subtitle">
            {t.contact.subtitle}
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
                <h3>{t.contact.form.successTitle}</h3>
                <p>{t.contact.form.successMessage}</p>
              </div>
            ) : (
              <>
                <div className="contact-field">
                  <label htmlFor="contact-name">{t.contact.form.nameLabel}</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label htmlFor="contact-email">{t.contact.form.emailLabel}</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-phone">{t.contact.form.phoneLabel}</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.phonePlaceholder}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-project">{t.contact.form.projectTypeLabel}</label>
                  <select
                    id="contact-project"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">{t.contact.form.selectProject}</option>
                    <option value="residential">{t.contact.form.types.residential}</option>
                    <option value="commercial">{t.contact.form.types.commercial}</option>
                    <option value="renovation">{t.contact.form.types.renovation}</option>
                    <option value="consultation">{t.contact.form.types.consultation}</option>
                    <option value="other">{t.contact.form.types.other}</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">{t.contact.form.messageLabel}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
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
                      {isSubmitting ? t.contact.form.submittingBtn : t.contact.form.submitBtn}
                      {!isSubmitting && <Send size={15} style={{ marginLeft: 8 }} />}
                    </span>
                    <span>
                      {isSubmitting ? t.contact.form.submittingBtn : t.contact.form.submitBtn}
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
                <h4>{t.contact.info.officeTitle}</h4>
                <p>
                  {t.contact.info.officeAddress1}
                  <br />
                  {t.contact.info.officeAddress2}
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4>{t.contact.info.callTitle}</h4>
                <p>
                  <a href={`tel:${SITE_CONFIG.contact.phoneTel}`}>{SITE_CONFIG.contact.phone}</a>
                  <br />
                  <span>{t.contact.info.callHours}</span>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>{t.contact.info.emailTitle}</h4>
                <p>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
                  <br />
                  <span>{t.contact.info.emailResponse}</span>
                </p>
              </div>
            </div>

            <div className="contact-info-card contact-map-card">
              <div className="contact-map-placeholder">
                <MapPin size={28} />
                <span>{SITE_CONFIG.location.coordinates}</span>
                <small>
                  {t.contact.info.officeAddress1}, {SITE_CONFIG.location.country}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
