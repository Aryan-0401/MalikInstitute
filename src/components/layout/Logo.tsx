import { INSTITUTE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <GraduationCap className="h-7 w-7 text-primary" />
      <span className="font-headline text-xl font-bold">{INSTITUTE_NAME}</span>
    </Link>
  );
}
