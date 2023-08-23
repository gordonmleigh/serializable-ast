import { ReactNode } from 'react';
import { MenuStateContextProvider } from './MenuStateContext.js';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

export interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="lg:ml-72 xl:ml-80">
      <MenuStateContextProvider>
        <TopNav />
        <Sidebar />
      </MenuStateContextProvider>

      <div className="relative">
        <main className="min-h-[100vh] px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
