'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import React from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm">
              Empowering the next generation of tech professionals.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <address className="mt-4 space-y-2 text-sm not-italic">
              <p>{CONTACT_ADDRESS}</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors">{CONTACT_EMAIL}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{CONTACT_PHONE}</a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} {new URL(SOCIAL_LINKS.linkedin).hostname}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
