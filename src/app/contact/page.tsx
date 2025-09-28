import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

// Custom WhatsApp Icon SVG
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

export const metadata = {
  title: 'Contact Us - Malik Institute',
  description: 'Get in touch with Malik Institute for admissions, queries, or any other information.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We're here to help. Reach out to us with any questions you may have.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
            <h2 className="font-headline text-2xl font-bold">Get in Touch Directly</h2>
            <div className="space-y-4">
                <Link href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground group-hover:text-primary">{CONTACT_PHONE}</p>
                    </div>
                </Link>

                <Link href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground group-hover:text-primary">{CONTACT_EMAIL}</p>
                    </div>
                </Link>

                <Link href={`https://wa.me/${CONTACT_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                       <WhatsAppIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-muted-foreground group-hover:text-primary">Chat with us</p>
                    </div>
                </Link>
            </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
