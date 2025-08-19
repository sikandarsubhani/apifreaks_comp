import Link from 'next/link';
import { ReactNode } from 'react';

type NoPrefetchLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

function NoPrefetchLink({
  href,
  children,
  className,
  ...props
}: NoPrefetchLinkProps) {
  return (
    <Link href={href} prefetch={false} className={className} {...props}>
      {children}
    </Link>
  );
}

export default NoPrefetchLink;
