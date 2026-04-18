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
    <div className="flex flex-col gap-2 rounded-xl border border-white/8 bg-dark-200 p-6 transition-all duration-300 hover:border-gold/20 hover:bg-dark-300">
      <p className="text-sm font-medium text-muted-light">{item.title}</p>
      {item.description && (
        <p className="text-xs text-muted">{item.description}</p>
      )}
      <p className="mt-auto pt-3 font-display text-xl font-semibold text-gold">
        {item.price}
      </p>
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
