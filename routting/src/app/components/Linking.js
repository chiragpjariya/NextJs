import React from 'react';
import Link from 'next/link';

function Linking({ linking, linkText }) {
  return (
    <div>
      <Link href={linking} className="text-blue-500">
        {linkText}
      </Link>
    </div>
  );
}

export default Linking;
