import React from 'react';

import { ThemeProvider } from './providers';

export default function App() {
  return (
    <ThemeProvider>
      <div>Hello World!</div>
    </ThemeProvider>
  );
}
