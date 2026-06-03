import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Phone, Sparkles } from 'lucide-react';
import { popularDishes, restaurantInfo } from '../data/menuData';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-food bg-cover bg-center px-4 pb-16 pt-28 sm:px-6">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-saffron">
            <Sparkles size={15} />
            Delivery {restaurantInfo.deliveryHours}
          </div>
          <h1 className="font-display text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Vindu <span className="gold-text">Restaurant</span>
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-white/86 sm:text-2xl">
            {restaurantInfo.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-4 text-sm font-black text-charcoal shadow-glow transition hover:scale-[1.02]"
            >
              View Menu
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
          <div className="mt-4 text-sm text-white/72">
            Email: <a href="mailto:vindurestaurant4@gmail.com" className="text-saffron hover:underline">vindurestaurant4@gmail.com</a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-white/72 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <MapPin className="text-saffron" size={18} />
              {restaurantInfo.shortAddress}
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-saffron" size={18} />
              Delivery radius {restaurantInfo.deliveryRadius}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-3xl p-4 sm:p-5"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=1200&q=80"
              alt="Premium biryani served hot"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-saffron">Popular dishes</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {popularDishes.map((dish) => (
                <Link
                  key={dish}
                  to={`/menu?search=${encodeURIComponent(dish)}`}
                  className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-sm font-bold text-white transition hover:border-saffron/50 hover:bg-saffron/10"
                >
                  {dish}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
