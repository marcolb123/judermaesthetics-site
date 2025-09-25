import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Star, Phone, Mail, MapPin, Clock, Instagram, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// === QUICK SETUP NOTES ===
// 1) Replace CLINIC_NAME, CITY, PHONE, EMAIL, ADDRESS, BOOKING_URL.
// 2) Swap placeholder images (unsplash) with real photos.
// 3) Edit services/prices text inline below.
// 4) Deploy: this is a single-file React component; it works in Next.js/App Router or CRA/Vite.

const CLINIC_NAME = "JU Dermasthetics";
const CITY = "Glasgow";
const PHONE = "+44 7542 060998";
const EMAIL = "Juaesthetic25@gmail.com";
const ADDRESS = "44 woodlands rd G3 6UR";
const BOOKING_URL = "https://portal.aestheticnursesoftware.com/book-online/19692"; // replace with real link

const navItems = [
  { id: "treatments", label: "Treatments", href: "/#treatments" },
  { id: "packages", label: "Packages", href: "/#packages" },
  { id: "about", label: "About", href: "/#about" },
  { id: "faq", label: "FAQ", href: "/#faq" },
  { id: "contact", label: "Contact", href: "/#contact" },
  { id: "policies", label: "Policies", href: "/#policies" }, // Link to Policies page
];


const testimonials = [
  {
    name: "Xiang-Qi “Zoey” Chan",
    text: `I had my skin booster treatment done by Julia two weeks ago, and I’m very happy with the results! I’ve known Julia for years, so I felt completely comfortable throughout the entire process. I also know that I can trust her with her pharmaceutical background when she recommend the product to me.

It’s been two weeks and I can really tell the natural glow on my skin. Julia takes each step very carefully and constantly check in with me to make sure I am okay throughout the process.

My bumps took about an hour to subside and my skin is fully healed 48 hours later. Julia continued to check in with me during this time to ensure I am okay.

I really appreciate having someone I trust do this kind of treatment and would definitely recommend her to anyone looking to try skin booster!`,
    rating: 5,
  },
  {
    name: "Rita Hu",
    text: "I did anti wrinkle treatment with the Julia 2 weeks ago and I really love the results after. Julia really looked after me and the whole process was really pleasant. She is really nice and friendly and followed up with me 2 weeks later for the after results and made sure everything was fine. Highly recommend her if you need any aesthetics treatment done",
    rating: 5,
  },
  {
    name: "Marios Laugh",
    text: `A few days ago, I went for my skin booster facial injection treatment.

Julia told me what to expect well in advance before the appointment and she shared the product she'll use.

During the process, Julia was very patient with me (as my pain tolerance isn't the highest - classic man!) and she guided my breath throughout to help with the pain.

Julia's years of experience as a pharmacist, plus the fact that she cares more about the client feeling good, makes me trust her.
I know she has my best interest at heart and that was evident during our first consultation.

She's a great practitioner!!`,
    rating: 5,
  },
  {
    name: "Teh JunQi",
text: "Went for a skin booster treatment with Julia today and it went seamless!\n\nFelt very at ease and comfortable at her gentle and steady hands.\n\nA few hours later already my skin is starting to glow! Would recommend to anyone looking to give their skin some TLC and glow",
rating: 5,
  },
];

const faqs = [
  {
    q: "Is a consultation needed before treatment?",
    a: "Yes, I always start with a consultation to understand your goals, assess your skin, and recommend the best treatment for you. This helps ensure safe and natural-looking results tailored just for you.",
  },
  {
    q: "Is numbing cream applied during the treatment?",
    a: "Whether I use numbing cream depends on the treatment and your comfort level. If you’d like to know what’s best for you, just send me a message and we can chat!",
  },
  {
    q: "How long will I see results?",
    a: `Results vary depending on the treatment.

Anti-wrinkle injections: Full effect in 2 weeks.

Dermal fillers: Results are immediate, with optimal settling in 1–2 weeks.

Skin boosters & Polynucleotide therapy: Improvement is gradual, usually over 2–4 weeks, and a course of a few sessions is recommended for the best results.`,
  },
 
];

const policies = [
  {
    q: "Deposits & Payments",
    a: `A £50 deposit is required to secure all bookings.

Deposits are non-refundable, but may be transferred once if at least 48 hours’ notice is given.

If rescheduling with less than 48 hours’ notice, the deposit will be forfeited and a new deposit will be required.

For package plans, the first month’s payment plus a £50 deposit is payable upfront to secure your plan.

Remaining package payments are collected automatically by direct debit on the same date each month.`,
  },
  {
    q: "Cancellations & Rescheduling",
    a: `48-hour cancellation policy applies to all appointments.

Less than 48 hours’ notice = deposit forfeited, session lost, and a new deposit required for rebooking.

No-shows (failure to attend without notice) = full treatment or room rental cost charged, deposit forfeited.

Appointments may be rescheduled once only with 48+ hours’ notice.

Please arrive on time — lateness of 15 minutes or more may result in your treatment being cancelled and charged as a no-show.`,
  },
  {
    q: "Packages & Plans",
    a: `Packages are non-transferable, except when purchased as a gift.

In this case, the recipient’s full name must be provided at the time of purchase, and the package will only be valid for that named individual.

Treatments within a package must be used within the specified timeframe:
- General packages: within 6 months of purchase.
- Revive Package: must be completed within 6 weeks.
- Rejuvenate Package: runs over 3 months.

Minimum commitments apply to monthly plans:
- Radiance Package: 3-month minimum at £110/month (rolling monthly thereafter, cancellable with 30 days’ notice).
- Rejuvenate Package: 3-month minimum at £150/month (rolling monthly thereafter, cancellable with 30 days’ notice).

Package prices are fixed at the time of purchase but may be adjusted if the treatment plan changes.

No refunds once a package has started. If a medical issue prevents completion, we will work with you to find a fair solution.`,
  },
  {
    q: "Treatment Requirements",
    a: `A consultation is required before treatment to assess suitability.

A post-treatment review may be needed to track progress and results.

If treatment is deemed unsuitable, we may deny treatment and recommend alternatives.

A patch test is required for all peel treatments.

Alternative brands of skin boosters may be used where necessary, with any additional costs discussed in advance.`,
  },
  {
    q: "Consent & Medical Forms",
    a: `Consent and medical history forms will be sent prior to your appointment.

These must be completed and returned before treatment day.

Failure to return forms in time may result in cancellation, with your deposit forfeited.`,
  },
  {
    q: "Summary",
    a: `Deposit: £50 (non-refundable, transferable once with 48+ hrs notice).

Cancellations/No-Shows: Deposit forfeited; full charge may apply.

Packages: For personal use only, unless purchased as a gift (recipient’s name required at purchase).

Plans: Minimum terms apply; rolling thereafter with 30 days’ cancellation notice.

Treatment Safety: Consultation, reviews, forms, and patch tests required where applicable.`,
  },
  {
    q: "Privacy Policy",
    a: `We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we handle your data, treatment records, and images in line with professional standards.

1. Confidentiality
All personal information, medical history, treatment notes, and records are kept strictly confidential.
Your details will never be shared with third parties without your explicit consent, except where required by law.

2. Treatment Records
We maintain secure treatment records to ensure your safety, track progress, and provide continuity of care.
Records are stored securely and are only accessible to authorised staff involved in your treatment.

3. Before & After Photos
Before and after photos may be taken as part of your treatment journey.
These images are used strictly for medical and record-keeping purposes unless you provide explicit written consent for them to be shared.
If you consent, photos may be used on platforms such as social media, websites, or marketing materials.
Consent to share photos is entirely optional, and you may withdraw it at any time.

4. Communication & Contact
We may contact you using the details you provide to confirm appointments, follow up on treatments, or share important updates.
We will not send marketing communications without your prior consent, and you may opt out at any time.

5. Your Rights
You have the right to:
- Access your personal records.
- Request corrections to inaccurate information.
- Withdraw consent for sharing photos or personal data.
- Request that your records are securely deleted (except where we are legally required to retain them).

6. Data Protection
All records are handled in compliance with UK data protection laws, including GDPR.
We use secure systems to protect your data against loss, misuse, or unauthorised access.

Contact
If you have any questions about your privacy or data, please contact us directly.`,
  },
];

function StarRow({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
}

function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-cmu text-primary-700">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

// Add logos for CMAC and HIS

// FAQ Dropdown Component
function FAQDropdown({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <ul className="space-y-4">
        {faqs.map((f, idx) => (
          <li key={idx} className="border-b pb-4">
            <button
              className="w-full text-left font-semibold text-primary-900 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
            >
              {f.q}
              <span className="ml-2 text-primary-700">{openIdx === idx ? "−" : "+"}</span>
            </button>
            {openIdx === idx && (
              <div className="mt-2 text-primary-700 text-sm whitespace-pre-line">{f.a}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClinicLanding() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-primary-900">
      {/* SEO + JSON-LD */}
      <head>
        <title>{CLINIC_NAME} • {CITY} Aesthetics</title>
        <meta name="description" content={`${CLINIC_NAME} offers medical aesthetics in ${CITY}: anti‑wrinkle injections, dermal fillers, skin boosters and advanced facials. Safe, natural results.`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: CLINIC_NAME,
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS,
            addressLocality: CITY,
            addressCountry: "UK",
          },
          telephone: PHONE,
          email: EMAIL,
          url: typeof window !== 'undefined' ? window.location.href : "ju_dermaesthetics",
          medicalSpecialty: ["Dermatology", "CosmeticSurgery"],
          areaServed: CITY,
          openingHours: "Fri-Sa 10:00-17:00",
        }) }} />
      </head>

      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-primary/80 border-b border-primary-200">
        <div className="max-w-16xl mx-auto px-4 h-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Replace clinic name text with logo image */}
            <div className="flex items-center gap-2">
          {/* Make logo clickable to scroll to top */}
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <img src="images/logo/logo words.png" alt="JU Dermaesthetics" className="h-9 cursor-pointer" />
          </a>
        </div>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) =>
              n.href ? (
                <a key={n.label} href={n.href} className="text-sm hover:opacity-70">{n.label}</a>
              ) : (
                <a key={n.id} href={`#${n.id}`} className="text-sm hover:opacity-70">{n.label}</a>
              )
            )}
          </nav>
          {/* Mobile Nav Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            aria-label="Open navigation"
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor"/>
              <rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl">Book now</Button>
            </a>
          </div>
        </div>
        {/* Mobile Nav Dropdown */}
        {mobileNavOpen && (
          <nav className="md:hidden bg-white border-b border-primary-200 px-4 py-2">
            <ul className="flex flex-col gap-2">
              {navItems.map((n) =>
                n.href ? (
                  <li key={n.label}>
                    <a
                      href={n.href}
                      className="block py-2 px-2 text-sm text-primary-900 hover:bg-primary-50 rounded"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {n.label}
                    </a>
                  </li>
                ) : (
                  <li key={n.id}>
                    <a
                      href={`#${n.id}`}
                      className="block py-2 px-2 text-sm text-primary-900 hover:bg-primary-50 rounded"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {n.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2400&auto=format&fit=crop"
            alt="Clinic ambience"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-28 md:py-36">
          {/* Flex container for hero text (left) and logo (right) */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <Badge className="mb-4">Medical Aesthetics • {CITY}</Badge>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-primary-900 font-playfair">
                BEAUTY FROM THE ROOT
                <span className="block text-primary-700 font-cmu text-2xl md:text-3xl">
                  INSPIRED BY 祖 (ZǓ) — FOUNDATION AND ORIGIN.
                </span>
              </h1>
                <p className="mt-4 text-lg md:text-xl text-primary-800 font-montserrat">
                Our mission is to nurture your natural radiance, restore balance, and reveal beauty that flows from within. Every treatment is clinically informed, patient-focused, and individually tailored to refine your individual features with safety and precision.
                </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={BOOKING_URL} target="_blank" rel="noreferrer"><Button className="rounded-2xl">Book a consultation</Button></a>
                <a href="#treatments" className="inline-flex items-center gap-2 text-sm underline">
                  Explore treatments <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> GPhC trained</div>
                <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Fully insured</div>
                <div className="flex items-center gap-2"><Star className="w-4 h-4" /> 5‑star client reviews</div>
              </div>
            </motion.div>
            {/* Logo on the right */}
            <div className="flex justify-center md:justify-start mb-8 md:mb-0">
              <img src="images/logo/logo.png" alt="JU Dermaesthetics Logo" className="h-100 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <Section id="treatments" title="Treatments" subtitle="Carefully curated for fresh, natural results">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="images/treatments/service 1.jpg"
              alt="Facial rejuvenation Profile Balancing"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="images/treatments/service 2.jpg"
              alt="Anti-Wrinkles Treatment"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="images/treatments/service 3.jpg"
              alt="Polynucleotides"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="images/treatments/service 4.jpg"
              alt="Skin Booster"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="packages" title="Signature Packages" subtitle="A glimpse into our bespoke care and results">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="images\packages\6.jpg"
              alt="Treatment 1"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="images\packages\7.jpg"
              alt="Treatment 2"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="images\packages\8.jpg"
              alt="Treatment 3"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="images\packages\9.png"
              alt="Treatment 3"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-primary-700">
          Each treatment is carried out with precision and care, ensuring natural results tailored to your features.
        </p>
      </Section>

      {/* About */}
      <Section id="about" title="Meet Your Practitioner">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img src="images\headshot.jpg" alt="Practitioner portrait" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary-900">Julia Lau, Independent Prescribing Pharmacist (MPharm) | Aesthetics Practitioner</h3>
            <p className="mt-3 text-primary-700">
              Julia is an Independent Prescribing Pharmacist with over seven years of clinical experience, specialising in skin health and the management of minor clinical conditions. Trained with the Derma Institute and Inspired Cosmetic Training, she combines her medical expertise with a passion for aesthetics and wellbeing, delivering treatments that are safe, effective, and tailored to each individual. Julia is fully insured, registered with the General Pharmaceutical Council (GPhC), and practices in a clinic registered with Healthcare Improvement Scotland, where patient care and safety are always the top priority.
            </p>
            
            <div className="mt-6 flex gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer"><Button className="rounded-2xl">Book consultation</Button></a>
            </div>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" title="Client Reviews" >
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base text-primary-900">{t.name}</CardTitle>
                  <StarRow n={t.rating} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary-700">“{t.text}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

    

      {/* FAQ */}
      <Section id="faq" title="Frequently Asked Questions">
        <FAQDropdown faqs={faqs} />
      </Section>

      {/* Policies */}
      <Section id="policies" title="Booking, Cancellation & Treatment Policy">
        <div className="mb-6 text-primary-700">
        </div>
        <FAQDropdown faqs={policies} />
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact Information">
        <div className="flex justify-center">
          <Card className="w-full max-w-xl">
            <CardHeader>
              <CardTitle className="text-primary-900">Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-sm text-primary-700">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> {PHONE}</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> {EMAIL}</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {ADDRESS}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Fri–Sat 10:00–17:00</div>
              <div className="flex items-center gap-2"><Instagram className="w-4 h-4 text-primary" /> ju_dermaesthetics</div>
            </CardContent>
            <CardFooter>
              <a href="https://instagram.com/ju_dermaesthetics" target="_blank" rel="noreferrer" className="w-full">
                <Button className="w-full rounded-2xl">Message online</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </Section>



    
   {/* Footer */}
<footer className="border-t border-primary-200">
  <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    {/* Image 1 */}
    <div className="flex justify-center">
      <img
        src="/images/logo/HIS logo.png"
        alt="Healthcare Improvement Scotland logo"
        className="h-16 md:h-20 w-auto object-contain"
        loading="lazy"
      />
    </div>

    {/* Image 2 (placeholder for middle logo) */}
    <div className="flex justify-center">
      <img
        src="/images/logo/logo.png"  
        alt="Placeholder middle logo"
        className="h-16 md:h-40 w-auto object-contain opacity-50"
        loading="lazy"
      />
    </div>

    {/* Image 3 */}
    <div className="flex justify-center">
      <img
        src="/images/logo/cmac logo.png"
        alt="CMAC logo"
        className="h-16 md:h-20 w-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>

  <div className="text-xs text-center text-primary-700 pb-8">
    © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
  </div>
</footer>


    </div>
  );
}
