import { courses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';

export const metadata = {
  title: 'Our Courses - Malik Institute',
  description: 'Explore the wide range of computer courses offered at Malik Institute.',
};

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Our Courses
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find the perfect course to kickstart or advance your career in technology.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
}
