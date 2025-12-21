'use client';

import { motion, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export type IMenu = {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: IMenu[];
};

type MenuProps = {
  list: IMenu[];
};

const Menu = ({ list }: MenuProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <MotionConfig transition={{ bounce: 0, type: 'tween' }}>
      <nav className={'relative'}>
        <ul className={'flex items-center'}>
          {list?.map((item) => {
            return (
              <li key={item.id} className={'relative'}>
                <Link
                  className={`
                    relative flex items-center justify-center rounded px-8 py-3 text-base font-semibold uppercase tracking-wide transition-all
                    text-neutral-200 hover:bg-white/10
                    ${hovered === item?.id ? 'bg-white/10' : ''}
                  `}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  href={item?.url}
                >
                  {item?.title}
                </Link>
                {hovered === item?.id && !item?.dropdown && (
                  <motion.div
                    layout
                    layoutId="cursor"
                    className="absolute h-0.5 w-full bg-brand"
                  />
                )}
                {item?.dropdown && hovered === item?.id && (
                  <div
                    className="absolute left-0 top-full"
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <motion.div
                      layout
                      transition={{ bounce: 0 }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      style={{
                        borderRadius: '8px',
                      }}
                      className="mt-4 flex w-64 flex-col overflow-hidden rounded-lg border border-white/10 bg-black/95 shadow-xl backdrop-blur-md"
                      layoutId="cursor"
                    >
                      {item?.items?.map((nav, index) => {
                        return (
                          <Link
                            key={`link-${nav?.id}`}
                            href={nav?.url}
                            className={`
                              w-full px-6 py-4 text-base font-medium uppercase tracking-wide text-neutral-200 transition-colors
                              hover:bg-white/10 hover:text-white
                              ${index !== 0 ? 'border-t border-white/5' : ''}
                            `}
                          >
                            {nav?.title}
                          </Link>
                        );
                      })}
                    </motion.div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </MotionConfig>
  );
};

export default Menu;
