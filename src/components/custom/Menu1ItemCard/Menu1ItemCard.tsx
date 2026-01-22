import Image from 'next/image';

import { cn } from '@/lib/utils';

export type Menu1ItemCardProps = {
  id?: string;
  name: string;
  description: string;
  price: number | string;
  image?: string;
  className?: string;
};

export const Menu1ItemCard = ({
  id,
  name,
  description,
  price,
  image,
  className,
}: Menu1ItemCardProps) => {
  const componentName = 'Menu1ItemCard';

  // Format price - handle both number and string
  const formattedPrice =
    typeof price === 'number' ? `$${price.toFixed(0)}` : price;

  return (
    // border border-border/50
    <article
      id={id}
      data-component={componentName}
      className={cn(
        'flex w-full flex-row items-center gap-8 rounded-xl bg-zinc-900 py-2 pl-2 pr-8',
        className
      )}
    >
      {/* Image (only if provided) */}
      {image && (
        <div className="relative aspect-4/3 w-40 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>
      )}

      {/* Content - text + price */}
      <div className="flex min-w-0 flex-1 flex-row items-center gap-12">
        {/* Text */}
        <div className="flex min-w-0 flex-1 flex-col">
          <h4 className="font-heading text-base italic text-white md:text-lg">
            {name}
          </h4>
          <p className="mt-1 line-clamp-2 text-sm text-white/70">
            {description}
          </p>
        </div>

        {/* Price */}
        <span className="shrink-0 font-heading text-base italic text-white md:text-lg">
          {formattedPrice}
        </span>
      </div>
    </article>
  );
};
