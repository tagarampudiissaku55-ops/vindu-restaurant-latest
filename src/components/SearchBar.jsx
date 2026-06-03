import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <label className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
      <Search className="text-saffron" size={20} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search biryani, mandi, chicken, paneer..."
        className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/42"
        type="search"
      />
    </label>
  );
}
