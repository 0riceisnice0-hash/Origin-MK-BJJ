'use client';

import type { SubmitEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

const interests = ['Beginners', 'Gi Jiu-Jitsu', 'No-Gi Jiu-Jitsu', 'JitzJudo', 'Membership', 'Something else'];
const attributionFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'referrer_origin'];

export default function LeadForm({ source, interest }: { source: string; interest?: string }) {
  function captureAttribution(event: SubmitEvent<HTMLFormElement>) {
    const query = new URLSearchParams(window.location.search);
    for (const name of attributionFields) {
      const input = event.currentTarget.elements.namedItem(name) as HTMLInputElement;
      if (name === 'referrer_origin') {
        try { input.value = document.referrer ? new URL(document.referrer).origin : ''; } catch { input.value = ''; }
      } else input.value = (query.get(name) ?? '').slice(0, 160);
    }
  }
  return <form id="enquiry-form" className="contact-form" action="https://formspree.io/f/mnpnowpn" method="POST" onSubmit={captureAttribution}>
    <input type="hidden" name="subject" value="New Origin MK BJJ enquiry from {{ name }}" />
    <input type="hidden" name="source_page" value={source} />
    {attributionFields.map(name => <input type="hidden" key={name} name={name} defaultValue="" />)}
    <label className="form-honeypot" aria-hidden="true">Leave this empty<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
    <div className="form-row">
      <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
      <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
    </div>
    <div className="form-row">
      <label><span>Phone <small>(optional)</small></span><input type="tel" name="phone" autoComplete="tel" /></label>
      <label><span>Interested in</span><select name="enquiry" defaultValue={interest ?? ''} required><option value="" disabled>Choose one</option>{interests.map(item => <option key={item} value={item}>{item}</option>)}</select></label>
    </div>
    <label><span>How can we help?</span><textarea name="message" rows={4} required placeholder="Tell us about the class you would like to try." /></label>
    <p className="form-privacy">Your details are sent to Origin through Formspree so we can reply. See <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noreferrer">Formspree’s privacy policy</a>.</p>
    <button type="submit">Send enquiry <ArrowUpRight size={18} /></button>
  </form>;
}
