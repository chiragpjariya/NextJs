"use client"
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function Provider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default Provider;
