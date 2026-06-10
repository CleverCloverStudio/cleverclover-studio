import { blogProductMap } from "@/lib/data";

interface ProductCTAProps {
  productKey?: string;
}

export default function ProductCTA({ productKey }: ProductCTAProps) {
  const product =
    blogProductMap[productKey ?? "god-mode-guide"] ??
    blogProductMap["god-mode-guide"];

  return (
    <div className="my-10 rounded-xl border border-gold/20 bg-dark-200 p-6 shadow-xl">
      <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
        Go Deeper
      </div>
      <h3 className="font-display text-xl font-semibold text-cream">
        {product.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-light">
        {product.pitch}
      </p>
      <div className="mt-5 flex items-center gap-4">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-gold-light"
          style={{ color: "#0A0A0A", textDecoration: "none" }}
        >
          Get it on Gumroad — {product.price}
        </a>
      </div>
    </div>
  );
}
