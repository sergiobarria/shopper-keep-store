import { QueryClientProvider } from 'react-query';

import { queryClient } from './client';

export const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
