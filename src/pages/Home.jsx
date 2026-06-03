import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BadgeIndianRupee, ChefHat, Clock3, Leaf, MessageCircle, Truck } from 'lucide-react';
import Hero from '../components/Hero';
import QRCodeGenerator from '../components/QRCodeGenerator';
import { restaurantInfo } from '../data/menuData';

const features = [
  { title: 'Fresh Ingredients', icon: Leaf },
  { title: 'Authentic Taste', icon: ChefHat },
  { title: 'Fast Delivery', icon: Truck },
  { title: 'Affordable Prices', icon: BadgeIndianRupee },
];

export default function Home() {
  document.title = 'Vindu Restaurant | Authentic Biryani, Mandi & Chinese Delights';

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-saffron">Why Vindu</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Built for cravings, cooked with care</h2>
          </div>
          <Link to="/menu" className="text-sm font-bold text-saffron">
            Browse full menu
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="glass rounded-2xl p-5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 text-saffron">
                <Icon size={25} />
              </div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/62">
                Premium restaurant flavor with quick service and simple phone ordering.
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="glass grid gap-5 rounded-3xl p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-2 text-xs font-bold text-saffron">
              <Clock3 size={15} />
              Delivery available {restaurantInfo.deliveryHours}
            </div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Order biryani, mandi and starters by phone</h2>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Delivery is available within {restaurantInfo.deliveryRadius}. Call or WhatsApp to place an order.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-4 text-sm font-black text-white shadow-glow"
            >
              Call {restaurantInfo.phone}
            </a>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent('Hello Vindu Restaurant, I want to place an order.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-white shadow-glow"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <QRCodeGenerator />
    </>
  );
}
