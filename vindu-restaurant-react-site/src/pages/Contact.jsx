import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

const whatsappMessage = encodeURIComponent('Hello Vindu Restaurant, I want to place an order.');

export default function Contact() {
  document.title = 'Contact | Vindu Restaurant';

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-saffron">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-black sm:text-5xl">Visit Vindu Restaurant</h1>
          <p className="mt-4 text-sm leading-7 text-white/66">
            Call directly, order on WhatsApp, or visit Vindu Restaurant at GV8P+VX6, Medikuntapally, Bhuvanagiri.
          </p>

          <div className="mt-8 space-y-4">
            <div className="glass rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-saffron">Restaurant Name</p>
              <h2 className="mt-2 font-display text-2xl font-bold">{restaurantInfo.name}</h2>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-saffron">Phone</p>
              <a href={`tel:${restaurantInfo.phone}`} className="mt-2 block font-display text-2xl font-bold">
                {restaurantInfo.phone}
              </a>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-saffron">Email</p>
              <a href={`mailto:${restaurantInfo.email}`} className="mt-2 block font-display text-2xl font-bold text-saffron">
                {restaurantInfo.email}
              </a>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-saffron">Location</p>
              <p className="mt-2 text-base leading-7 text-white/76">
                {restaurantInfo.address}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider text-white/50">Located near Bhongir Bus Stand</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-5 py-4 text-sm font-black text-white shadow-glow"
            >
              <Phone size={18} />
              Call Button
            </a>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-sm font-black text-white"
            >
              <MessageCircle size={18} />
              WhatsApp Button
            </a>
          </div>
        </div>

        <div className="glass overflow-hidden rounded-3xl p-3">
          <div className="mb-3 flex items-center gap-2 px-2 text-sm font-semibold text-white/70">
            <MapPin className="text-saffron" size={18} />
            {restaurantInfo.shortAddress}
          </div>
          <iframe
            title="Vindu Restaurant location in Bhongir"
            src="https://www.google.com/maps?q=GV8P%2BVX6%2C%20Medikuntapally%2C%20Bhuvanagiri%2C%20Telangana%20508116&output=embed"
            className="h-[520px] w-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
