// Contact.jsx — booking / enquiry form
const { useState: useStateContact } = React;

const Contact = () => {
  const [form, setForm] = useStateContact({
    name: '', email: '', kind: 'editorial', date: '', message: ''
  });
  const [sent, setSent] = useStateContact(false);

  const upd = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <section className="section">
      <div className="section-header">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="eyebrow">enquire</span>
          <h2 className="section-title">tell us about<br/>the shoot.</h2>
        </div>
      </div>

      <div className="contact">
        <div>
          {sent ? (
            <div style={{ padding: '64px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span className="eyebrow" style={{ color: 'var(--forest)' }}>received</span>
              <p className="lede" style={{ fontSize: 28 }}>thank you, {form.name || 'friend'}. we’ll be in touch within five working days.</p>
              <button className="btn btn-outline" style={{ alignSelf: 'flex-start' }} onClick={() => { setSent(false); setForm({ name: '', email: '', kind: 'editorial', date: '', message: '' }); }}>send another</button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
              <div className="field"><label>your name</label><input value={form.name} onChange={upd('name')} placeholder="Marisol Calderón" /></div>
              <div className="field"><label>email</label><input type="email" value={form.email} onChange={upd('email')} placeholder="you@studio.com" /></div>
              <div className="field"><label>kind of shoot</label>
                <select value={form.kind} onChange={upd('kind')}>
                  <option value="portrait">portrait sitting</option>
                  <option value="editorial">editorial</option>
                  <option value="commercial">commercial / brand</option>
                  <option value="still-life">still life</option>
                  <option value="other">something else</option>
                </select>
              </div>
              <div className="field"><label>approximate date</label><input value={form.date} onChange={upd('date')} placeholder="early october, ideally" /></div>
              <div className="field"><label>tell us about the shoot</label>
                <textarea rows="4" value={form.message} onChange={upd('message')} placeholder="three looks, two locations, half-day. mostly natural light." />
              </div>
              <button className="btn btn-primary" type="submit" style={{ marginTop: 16 }}>send enquiry</button>
            </form>
          )}
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div>
            <h5 className="eyebrow" style={{ marginBottom: 12 }}>studio</h5>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.55, color: 'var(--graphite)' }}>
              241 36th street, studio 4D<br/>brooklyn, ny 11232
            </p>
          </div>
          <div>
            <h5 className="eyebrow" style={{ marginBottom: 12 }}>write</h5>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--graphite)' }}>
              <a href="#">studio@iviejo.co</a><br/>
              <span style={{ color: 'var(--slate)', fontSize: 13 }}>we respond within five working days.</span>
            </p>
          </div>
          <div>
            <h5 className="eyebrow" style={{ marginBottom: 12 }}>hours</h5>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--graphite)', lineHeight: 1.7 }}>
              tue — fri &nbsp; 10–18<br/>sat &nbsp; by appointment
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

window.Contact = Contact;
