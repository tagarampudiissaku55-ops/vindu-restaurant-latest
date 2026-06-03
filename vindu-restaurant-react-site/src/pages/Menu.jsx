import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Phone } from 'lucide-react';
import MenuCard from '../components/MenuCard';
import SearchBar from '../components/SearchBar';
import { menuCategories, restaurantInfo } from '../data/menuData';

export default function Menu() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setQuery(searchParams.get('search') || '');
    setActiveCategory('all');
  }, [searchParams]);

  document.title = 'Menu | Vindu Restaurant';

  const visibleCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return menuCategories
      .filter((category) => activeCategory === 'all' || category.id === activeCategory)
      .map((category) => ({
        ...category,
        items: normalizedQuery
          ? category.items.filter(
              (item) =>
                item.name.toLowerCase().includes(normalizedQuery) ||
                item.price.toLowerCase().includes(normalizedQuery) ||
                category.title.toLowerCase().includes(normalizedQuery),
            )
          : category.items,
      }))
      .filter((category) => category.items.length > 0);
  }, [activeCategory, query]);

  const totalItems = visibleCategories.reduce((count, category) => count + category.items.length, 0);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6">
      <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-saffron">QR Menu</p>
        <h1 className="mt-2 font-display text-4xl font-black sm:text-5xl">Vindu Restaurant Menu</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">
          Browse categories, search dishes, view prices, and order instantly by phone or WhatsApp.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white/72">
            <Clock size={16} className="text-saffron" />
            Delivery {restaurantInfo.deliveryHours}
          </span>
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-ember px-4 py-2 font-bold text-white"
          >
            <Phone size={16} />
            {restaurantInfo.phone}
          </a>
        </div>
      </motion.section>

      <div className="sticky top-[73px] z-30 -mx-4 border-y border-white/10 bg-charcoal/92 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-4">
          <SearchBar value={query} onChange={setQuery} />
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                activeCategory === 'all' ? 'bg-saffron text-charcoal' : 'border border-white/10 bg-white/10 text-white/70'
              }`}
            >
              All
            </button>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                  activeCategory === category.id
                    ? 'bg-saffron text-charcoal'
                    : 'border border-white/10 bg-white/10 text-white/70'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-5 text-sm font-semibold text-white/56">{totalItems} items shown</p>
        {visibleCategories.length === 0 ? (
          <div className="glass rounded-3xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold">No matching dishes</h2>
            <p className="mt-2 text-sm text-white/62">Try searching for biryani, mandi, chicken, paneer or prawns.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {visibleCategories.map((category) => (
              <section key={category.id}>
                <h2 className="mb-4 font-display text-2xl font-bold text-white">{category.title}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <MenuCard key={`${category.id}-${item.name}`} item={item} index={index} whatsapp={restaurantInfo.whatsapp} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
