import Link from "next/link";

export default function PilotPage() {
  return (
    <main className="pilot-page">
      <div className="container">
        <div className="pilot-header">
          <Link href="/" className="pilot-back">← Back to BuildWise AI</Link>
          <span className="eyebrow">BUILDWISE AI</span>
          <h1>Request a Pilot</h1>
          <p>Tell us about your construction operation and what you want to improve. We’ll review your information and get in touch to discuss a suitable pilot.</p>
        </div>

        <form className="pilot-form" action="https://formsubmit.co/martinezeno@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="BuildWise AI — New Pilot Request" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />

          <section>
            <h2>1. Your information</h2>
            <div className="form-grid">
              <label>Full name *<input name="Full Name" required /></label>
              <label>Position / Role *<input name="Position / Role" required /></label>
              <label>Company / Organization *<input name="Company / Organization" required /></label>
              <label>Business email *<input type="email" name="Email" required /></label>
              <label>Mobile number *<input type="tel" name="Mobile Number" required /></label>
              <label>Company website<input type="url" name="Company Website" /></label>
            </div>
          </section>

          <section>
            <h2>2. Project information</h2>
            <div className="form-grid">
              <label>Project name *<input name="Project Name" required /></label>
              <label>Project location *<input name="Project Location" required /></label>
              <label>Project type *<select name="Project Type" required><option value="">Select one</option><option>Building / Commercial</option><option>Residential</option><option>Infrastructure</option><option>Industrial</option><option>Road / Transport</option><option>Other</option></select></label>
              <label>Number of active projects<input type="number" name="Active Projects" min="1" /></label>
              <label>Approx. project size / value<input name="Project Size or Value" placeholder="e.g. 20,000 sqm / ₱100M" /></label>
              <label>Expected pilot start<input type="date" name="Expected Pilot Start" /></label>
            </div>
          </section>

          <section>
            <h2>3. What would you like BuildWise to help with?</h2>
            <div className="check-grid">
              {["Progress monitoring","Field data and reporting","Workforce productivity","Equipment utilization","Cost visibility","Project risk / early warnings","Document and information management","Management dashboards / decision support"].map(item => (
                <label className="check-option" key={item}><input type="checkbox" name="Pilot Needs" value={item} /> <span>{item}</span></label>
              ))}
            </div>
            <label>What are the biggest problems you want to solve? *<textarea name="Biggest Problems" required rows={5} /></label>
          </section>

          <section>
            <h2>4. Current setup</h2>
            <div className="form-grid">
              <label>How do you currently track project data?<select name="Current Tracking"><option value="">Select one</option><option>Paper / manual reports</option><option>Excel / spreadsheets</option><option>Project management software</option><option>Multiple systems</option><option>Other</option></select></label>
              <label>Approx. number of field / office users<input type="number" name="Potential Users" min="1" /></label>
            </div>
            <label>Systems or tools currently being used<textarea name="Current Systems" rows={3} placeholder="ERP, spreadsheets, messaging apps, project management tools, etc." /></label>
          </section>

          <section>
            <h2>5. Pilot objectives</h2>
            <label>What would a successful pilot look like for you? *<textarea name="Pilot Success Criteria" required rows={5} placeholder="Describe the results, improvements, or decisions you want BuildWise AI to help you achieve." /></label>
            <label>Anything else we should know?<textarea name="Additional Information" rows={4} /></label>
          </section>

          <div className="pilot-submit">
            <p>By submitting this form, you agree that ZenLabs may use the information provided to contact you about the BuildWise AI pilot.</p>
            <button className="btn btn-primary" type="submit">Submit Pilot Request</button>
          </div>
        </form>
      </div>
    </main>
  );
}
