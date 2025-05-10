'use client';

import ClientCalculator from './components/ClientCalculator';

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ClientCalculator />
    </>
  );
} 