'use client';

import I18nProvider from '@/providers/I18nProvider';
import { ReactNode } from 'react';


export default function ClientLayout({ children }: { children: ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>;
}