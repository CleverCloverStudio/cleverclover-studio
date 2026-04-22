interface PricingItem {
  title: string;
  price: string;
  description?: string;
}

interface PricingCardProps {
  item: PricingItem;
}

export function PricingCard({ item }: PricingCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-white/8 bg-dark-200 p-6 transition-all duration-300 hover:border-gold/20 hover:bg-dark-300">
      <p className="text-sm font-semibold text-cream">{item.title}</p>
      {item.description && (
        <p className="text-xs leading-relaxed text-muted">{item.description}</p>
      )}
      <div className="mt-auto pt-3">
        <span className="block text-[10px] font-semibold uppercase tracking-widest text-gold/60">
          starting at
        </span>
        <span className="font-display text-xl font-medium text-gold">{item.price}</span>
      </div>
    </div>
  );
}

interface PricingGridProps {
  items: PricingItem[];
  footerNote?: string;
}

export function PricingGrid({ items, footerNote }: PricingGridProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <PricingCard key={item.title} item={item} />
        ))}
      </div>
      {footerNote && (
        <p className="text-sm italic text-muted">{footerNote}</p>
      )}
    </div>
  );
}
