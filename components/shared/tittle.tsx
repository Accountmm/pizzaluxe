import clsx from 'clsx';
import React from 'react';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface TitleProps {
  size?: TitleSize;
  className?: string;
  text: string;
  reactRef?: React.LegacyRef<HTMLHeadingElement> | undefined;
}

export const Title: React.FC<TitleProps> = ({
  text,
  size = 'sm',
  className,
  reactRef
}) => {
  const sizes = {
    xs: { tag: 'h5', style: 'text-base' }, // Tailwind's `text-base` is 16px
    sm: { tag: 'h4', style: 'text-lg' }, // 18px
    md: { tag: 'h3', style: 'text-xl' }, // 20px
    lg: { tag: 'h2', style: 'text-2xl' }, // 24px
    xl: { tag: 'h1', style: 'text-3xl' }, // 30px
    '2xl': { tag: 'h1', style: 'text-4xl' }, // 36px
  } as const;

  const { tag: Tag, style } = sizes[size];

  return (
    <Tag
      className={clsx(style, className)}
      ref={reactRef}
    >
      {text}
    </Tag>
  );
};
