import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppLayout } from '@src/layout';
import { ThemeProvider } from '@src/providers';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout>
          <div>Hello World! From Shopper Keep</div>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
