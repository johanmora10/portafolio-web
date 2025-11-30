'use client'
export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title">Contact</h2>
        <p className="text-center text-gray-300 mt-2">Email me for projects, freelance or work opportunities.</p>
        <div className="mt-6">
          <form action={`mailto:estebanmora363@gmail.com`} method="POST" encType="text/plain" className="max-w-xl mx-auto space-y-4">
            <input name="name" placeholder="Name" className="w-full p-3 rounded bg-black/40" />
            <input name="email" placeholder="Email" className="w-full p-3 rounded bg-black/40" />
            <textarea name="message" placeholder="Message" rows={5} className="w-full p-3 rounded bg-black/40" />
            <button type="submit" className="btn-accent">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}