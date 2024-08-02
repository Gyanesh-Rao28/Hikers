import Link from "next/link";

import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="/" prefetch={false}>
              About Us
            </Link>
            <Link href="/" prefetch={false}>
              Our Team
            </Link>
            <Link href="/" prefetch={false}>
              Careers
            </Link>
            <Link href="/" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Trips</h3>
            <Link href="/" prefetch={false}>
              Vacation Packages
            </Link>
            <Link href="/" prefetch={false}>
              College Trips
            </Link>
            <Link href="/" prefetch={false}>
              Group Travel
            </Link>
            <Link href="/" prefetch={false}>
              Customized Itineraries
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="/" prefetch={false}>
              Blog
            </Link>
            <Link href="/" prefetch={false}>
              FAQs
            </Link>
            <Link href="/" prefetch={false}>
              Travel Tips
            </Link>
            <Link href="/" prefetch={false}>
              Destination Guides
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="/" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="/" prefetch={false}>
              Support
            </Link>
            <Link href="/" prefetch={false}>
              Sales
            </Link>
            <Link href="/" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}

export default Footer