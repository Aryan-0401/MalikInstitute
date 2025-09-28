import type { LucideIcon } from 'lucide-react';
import { Computer, Sheet, Laptop, Laptop2, Code, FileCode2 } from 'lucide-react';

export interface SyllabusTopic {
  topic: string;
  description: string;
}

export interface Course {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  syllabus: SyllabusTopic[];
}

export const courses: Course[] = [
  {
    title: 'Basic Computer',
    slug: 'basic-computer',
    description: 'Master the fundamentals of computer operations, file management, and internet usage. Perfect for beginners.',
    icon: Computer,
    duration: '2 Months',
    syllabus: [
      { topic: 'Computer Fundamentals', description: 'History, Generations, Types of Computers.' },
      { topic: 'Operating System', description: 'Windows, File & Folder Management.' },
      { topic: 'MS Office', description: 'MS Word, MS Excel, MS PowerPoint.' },
      { topic: 'Internet & Email', description: 'Browsing, Searching, Email communication.' },
    ],
  },
  {
    title: 'Advance Excel',
    slug: 'advance-excel',
    description: 'Unlock the full potential of Excel with advanced formulas, pivot tables, macros, and data visualization techniques.',
    icon: Sheet,
    duration: '2 Months',
    syllabus: [
      { topic: 'Advanced Formulas', description: 'VLOOKUP, HLOOKUP, INDEX, MATCH, etc.' },
      { topic: 'Data Tools', description: 'Sorting, Filtering, Data Validation, What-if Analysis.' },
      { topic: 'PivotTables & PivotCharts', description: 'Creating and managing PivotTables and charts.' },
      { topic: 'Macros', description: 'Recording and running basic macros to automate tasks.' },
    ],
  },
  {
    title: 'DCA (Diploma in Computer Applications)',
    slug: 'dca',
    description: 'A comprehensive diploma covering office automation, basic programming, and database concepts for a strong IT foundation.',
    icon: Laptop,
    duration: '6 Months',
    syllabus: [
      { topic: 'Semester 1', description: 'Computer Fundamentals, OS, MS Office, Internet.' },
      { topic: 'Semester 2', description: 'Database Systems (MS Access), Basic HTML, C Programming concepts.' },
      { topic: 'Project Work', description: 'A small project to apply the learned skills.' },
    ],
  },
  {
    title: 'ADCA (Advance Diploma in Computer Applications)',
    slug: 'adca',
    description: 'An advanced diploma that builds on DCA with in-depth knowledge of programming, web design, and accounting software.',
    icon: Laptop2,
    duration: '12 Months',
    syllabus: [
      { topic: 'Semester 1', description: 'DCA Syllabus (Fundamentals, Office, C).' },
      { topic: 'Semester 2', description: 'C++, Data Structures, Web Designing (HTML, CSS, JS), Tally/Accounting Software.' },
      { topic: 'Project Work', description: 'A comprehensive project covering multiple technologies.' },
    ],
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    description: 'Learn to build modern, responsive websites and web applications using HTML, CSS, JavaScript, and popular frameworks.',
    icon: Code,
    duration: '6 Months',
    syllabus: [
      { topic: 'Frontend Basics', description: 'HTML5, CSS3, Flexbox, Grid, Responsive Design.' },
      { topic: 'JavaScript', description: 'ES6+, DOM Manipulation, Asynchronous JS.' },
      { topic: 'Frontend Frameworks', description: 'React.js or a similar modern framework.' },
      { topic: 'Backend Basics', description: 'Node.js, Express, Basic APIs.' },
    ],
  },
  {
    title: 'C & C++',
    slug: 'c-and-c-plus-plus',
    description: 'Dive into the world of programming with C and C++, mastering concepts like data structures, algorithms, and object-oriented programming.',
    icon: FileCode2,
    duration: '4 Months',
    syllabus: [
      { topic: 'C Programming', description: 'Variables, Data Types, Control Structures, Functions, Pointers.' },
      { topic: 'C++ Basics', description: 'Classes, Objects, Inheritance, Polymorphism.' },
      { topic: 'Data Structures', description: 'Arrays, Stacks, Queues, Linked Lists.' },
      { topic: 'Algorithms', description: 'Basic sorting and searching algorithms.' },
    ],
  },
];
