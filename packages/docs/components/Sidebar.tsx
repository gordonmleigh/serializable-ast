import { fetchAllContent } from '@/util/content.js';
import { fetchDeclarationGroups } from '@/util/declarations.js';
import { styled } from '@/util/styled.js';
import { SymbolIcon } from '@gordonmleigh/superdocs/components/SymbolIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { Logo } from './Logo';
import { SectionNavigation } from './SectionNavigation';
import { SidebarPanel } from './SidebarPanel';

const NavigationSection = styled(
  'div',
  'text-xs semibold mt-8 dark:text-white',
);

export async function Sidebar(): Promise<JSX.Element> {
  const pages = await fetchAllContent();
  const groups = fetchDeclarationGroups();

  return (
    <SidebarPanel>
      <div className="flex w-full flex-col">
        <div className="hidden h-14 content-center px-6 py-4 lg:flex bg-inherit">
          <Link href="/" aria-label="Home">
            <Logo className="h-6" />
          </Link>
        </div>
        <div className="overflow-y-auto px-6">
          <nav className="mt-5 md:hidden">
            <SectionNavigation
              className={clsx(
                'flex flex-col',
                'nav-link:block nav-link:py-1 nav-link:text-sm nav-link:text-zinc-600',
                'nav-link:transition nav-link:hover:text-zinc-900',
                'dark:nav-link:text-zinc-400 dark:nav-link:hover:text-white',
              )}
            />
          </nav>

          <NavigationSection>Getting Started</NavigationSection>
          <ul
            className={clsx(
              'nav-link:block nav-link:py-1 nav-link:text-sm nav-link:text-zinc-600',
              'nav-link:transition nav-link:hover:text-zinc-900',
              'dark:nav-link:text-zinc-400 dark:nav-link:hover:text-white',
            )}
          >
            {pages.map((page) => (
              <li key={page.meta.slug}>
                <Link href={'/docs' + page.meta.slug}>{page.meta.title}</Link>
              </li>
            ))}
          </ul>

          <NavigationSection>API</NavigationSection>
          <ul
            className={clsx(
              'nav-link:flex nav-link:items-center',
              'nav-link:py-1 nav-link:text-sm nav-link:text-zinc-600',
              'nav-link:transition nav-link:hover:text-zinc-900',
              'dark:nav-link:text-zinc-400 dark:nav-link:hover:text-white',
              'nav-submenu:ml-4',
            )}
          >
            {groups.map((group) => (
              <li key={group.slug}>
                <Link href={`/code/groups/${group.slug}`}>{group.name}</Link>
                <ul>
                  {group.declarations.map((def) => (
                    <li key={def.slug}>
                      <Link href={`/code/groups/${group.slug}#${def.slug}`}>
                        <>
                          <SymbolIcon node={def.node} />
                          &nbsp;{def.name}
                        </>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SidebarPanel>
  );
}
