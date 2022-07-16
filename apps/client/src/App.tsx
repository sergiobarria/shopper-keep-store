import { BrowserRouter } from 'react-router-dom';

import { AppLayout } from '@src/layout';
import { ThemeProvider } from '@src/providers';

import { AppRoutes } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
