'use client';

import MainLayout from '#shared/layouts/main';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <MainLayout headerOnDark>{children}</MainLayout>;
}
