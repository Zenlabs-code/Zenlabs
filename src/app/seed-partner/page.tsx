import Link from "next/link";

export default function SeedPartnerPage() {
  return (
    <main className="pilot-page">
      <div className="container">
        <div className="pilot-header">
          <Link href="/" className="pilot-back">← Back to BuildWise AI</Link>
          <span className="eyebrow">BUILDWISE AI</span>
          <h1>Strategic Seed Partner Interest Form</h1>
          <p>Help BuildWise AI transform how construction projects are planned, managed, and delivered. We’re looking for early partners who can bring capital, industry expertise, pilot opportunities, market access, or strategic support.</p>
        </div>
        <form className="pilot-form" action="https://formsubmit.co/martinezeno@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="BuildWise AI — Strategic Seed Partner Interest" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <section><h2>1. Your information</h2><div className="form-grid">
            <label>Full Name *<input name="Full Name" required /></label><label>Company / Organization *<input name="Company / Organization" required /></label>
            <label>Position / Role *<input name="Position / Role" required /></label><label>Email Address *<input type="email" name="Email Address" required /></label>
            <label>Mobile / WhatsApp *<input type="tel" name="Mobile / WhatsApp" required /></label>
          </div></section>
          <section><h2>2. How would you like to participate?</h2><div className="check-grid">{["Capital investment","Strategic partnership","Construction-industry pilot","Technology partnership","Market / channel access","Other"].map(item => <label className="check-option" key={item}><input type="checkbox" name="Participation" value={item} /> <span>{item}</span></label>)}</div></section>
          <section><h2>3. Indicative funding interest (optional)</h2><select name="Indicative Funding Interest"><option value="">Select one</option><option>₱100K–₱500K</option><option>₱500K–₱1M</option><option>₱1M–₱5M</option><option>₱5M+</option><option>Prefer to discuss</option></select></section>
          <section><label>What can you bring to BuildWise AI?<textarea name="What You Can Bring" required rows={5} /></label><label>Why are you interested in BuildWise AI?<textarea name="Why Interested" required rows={5} /></label><label>Additional Message<textarea name="Additional Message" rows={4} /></label></section>
          <div className="pilot-submit"><p>By submitting this form, you agree that we may use the information provided to contact you about BuildWise AI partnership opportunities. This form is an expression of interest only and does not constitute an offer of securities or an investment agreement.</p><button className="btn btn-primary" type="submit">EXPLORE PARTNERSHIP</button><p className="form-note">Please do not send funds at this stage. Funding instructions will only be provided after the appropriate structure and documentation have been agreed upon.</p></div>
        </form>
      </div>
    </main>
  );
}