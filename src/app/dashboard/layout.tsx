import React from 'react';
import RootLayout from '../layout';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Additional layout specific to certain pages or sections */}
      <div className="additional-layout">{children}</div>
    </div>
  );
};
