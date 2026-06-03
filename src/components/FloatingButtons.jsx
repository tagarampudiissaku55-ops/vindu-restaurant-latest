import { MessageCircle, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

const whatsappMessage = encodeURIComponent('Hello Vindu Restaurant, I want to place an order.');

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`https://wa.me/${restaurantInfo.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
      <a
        href={`tel:${restaurantInfo.phone}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-ember text-white shadow-glow transition hover:scale-105"
        aria-label={`Call ${restaurantInfo.phone}`}
      >
        <Phone size={25} />
      </a>
    </div>
  );
}
