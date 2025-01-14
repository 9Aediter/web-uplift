import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="mb-5.5 inline-block">
      <Image
        className="hidden dark:block"
        src="/images/logo/logo.svg"
        alt="Logo"
        width={176}
        height={32}
      />
      <Image
        className="dark:hidden"
        src="/images/logo/logo-dark.svg"
        alt="Logo"
        width={176}
        height={32}
      />
    </Link>
  );
};

export default Logo;
