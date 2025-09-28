import type { LucideIcon } from 'lucide-react';
import { Computer, Sheet, Laptop, Laptop2, Code, FileCode2 } from 'lucide-react';

export interface Course {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const courses: Course[] = [
  {
    title: 'Basic Computer',
    description: 'Master the fundamentals of computer operations, file management, and internet usage. Perfect for beginners.',
    icon: Computer,
  },
  {
    title: 'Advance Excel',
    description: 'Unlock the full potential of Excel with advanced formulas, pivot tables, macros, and data visualization techniques.',
    icon: Sheet,
  },
  {
    title: 'DCA (Diploma in Computer Applications)',
    description: 'A comprehensive diploma covering office automation, basic programming, and database concepts for a strong IT foundation.',
    icon: Laptop,
  },
  {
    title: 'ADCA (Advance Diploma in Computer Applications)',
    description: 'An advanced diploma that builds on DCA with in-depth knowledge of programming, web design, and accounting software.',
    icon: Laptop2,
  },
  {
    title: 'Web Development',
    description: 'Learn to build modern, responsive websites and web applications using HTML, CSS, JavaScript, and popular frameworks.',
    icon: Code,
  },
  {
    title: 'C & C++',
    description: 'Dive into the world of programming with C and C++, mastering concepts like data structures, algorithms, and object-oriented programming.',
    icon: FileCode2,
  },
];
