import Link from 'next/link';

export interface SectionNavigationProps {
  className?: string;
}

export function SectionNavigation({ className }: SectionNavigationProps) {
  return (
    <ul className={className}>
      <li>
        <Link href="/docs/introduction">Documentation</Link>
      </li>
      <li>
        <Link href="/code">API</Link>
      </li>
    </ul>
  );
}
