import { ArrowRightIcon } from '@components/icons';
import classnames from 'classnames';
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.css';

interface FeatureProps extends ComponentProps<typeof motion.div> {
  large?: boolean;
  centered?: boolean;
  children: ReactNode;
  lightOnly?: boolean;
  href?: string;
  index: number;
}

export function Feature({
  large,
  centered,
  children,
  lightOnly,
  className,
  href,
  index,
  ...props
}: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: Math.min(0.25 + index * 0.2, 0.8) }}
      className={classnames(
        styles.feature,
        large && styles.large,
        centered && styles.centered,
        lightOnly && styles['light-only'],
        className,
      )}
      {...props}
    >
      {children}
      {href && (
        <Link
          className={classnames('x:focus-visible:nextra-focus', styles.link)}
          href={href}
          rel="noreferrer"
        >
          <ArrowRightIcon height="24" />
        </Link>
      )}
    </motion.div>
  );
}

export function Features({ children }: { children: ReactNode }) {
  return <div className={styles.features}>{children}</div>;
}
