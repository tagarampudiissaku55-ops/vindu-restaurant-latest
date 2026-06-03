import { motion } from 'framer-motion';

const fallbackImage = 'https://images.unsplash.com/photo-1604908177522-44faad03b07a?auto=format&fit=crop&w=800&q=80';

export default function MenuCard({ item, index, whatsapp }) {
  const imageUrl = item.image || fallbackImage;
  const orderMessage = encodeURIComponent(`Hello Vindu Restaurant, I want to order ${item.name}. Please help me place my order.`);
  const orderUrl = `https://wa.me/${whatsapp}?text=${orderMessage}`;

  return (
    <a
      href={orderUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Order ${item.name} on WhatsApp`}
      className="group block cursor-pointer"
    >
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.2) }}
        className="glass overflow-hidden rounded-3xl shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="h-44 overflow-hidden bg-black/5">
          <img
            src={imageUrl}
            alt={item.name}
            className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
          />
        </div>
        <div className="flex min-h-[120px] flex-col justify-between p-4">
          <div>
            <h3 className="font-display text-base font-bold text-white">{item.name}</h3>
          </div>
          <div>
            <p className="mt-3 text-sm font-bold leading-6 text-saffron">{item.price}</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-white/50">Tap to order on WhatsApp</p>
          </div>
        </div>
      </motion.article>
    </a>
  );
}
