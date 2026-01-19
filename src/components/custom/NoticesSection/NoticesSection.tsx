'use client';

import { motion, useReducedMotion } from 'framer-motion';

import type { Notice } from '@/data/notices';
import { cn } from '@/lib/utils';

export type NoticesSectionProps = {
  id?: string;
  className?: string;
  notices: Notice[];
};

export const NoticesSection = ({
  id,
  className,
  notices,
}: NoticesSectionProps) => {
  const reduce = useReducedMotion();
  const componentName = 'NoticesSection';
  const rootId = id ?? componentName;

  return (
    <motion.section
      id={rootId}
      data-component={componentName}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn('p-0', className)}
    >
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={cn(
                'flex items-center justify-center bg-muted/30 p-4 text-center',
                'min-h-[100px] md:min-h-[120px]'
              )}
            >
              <p className="text-[10px] font-medium uppercase leading-relaxed tracking-wide text-foreground">
                {notice.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
