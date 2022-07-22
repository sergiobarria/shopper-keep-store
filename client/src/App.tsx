import { AppLayout } from '@src/layout';
import { AppProvider } from '@src/providers';

import { AppRoutes } from './routes';

export default function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </AppProvider>
  );
}
