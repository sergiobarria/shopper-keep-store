import { Outlet } from '@tanstack/react-location';

import { AppLayout } from '@src/shared/components/layout';
import { AppProvider } from '@src/providers';

export default function App() {
  return (
    <AppProvider>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </AppProvider>
  );
}
