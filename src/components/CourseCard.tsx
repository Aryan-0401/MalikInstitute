import type { Course } from '@/lib/courses';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = course.icon;
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="flex-row items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
            <Icon className="h-8 w-8" />
        </div>
        <div>
          <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{course.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="#">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
