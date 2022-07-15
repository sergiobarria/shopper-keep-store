import React from 'react';

import { AppLayout } from '@src/layout';
import { ThemeProvider } from '@src/providers';

export default function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <div>Hello World! From Shopper Keep</div>
      </AppLayout>
    </ThemeProvider>
  );
}
