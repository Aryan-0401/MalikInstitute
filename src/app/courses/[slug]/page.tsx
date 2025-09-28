import { courses } from '@/lib/courses';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock, BookOpen } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const course = courses.find((course) => course.slug === params.slug);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.title} - Malik Institute`,
    description: course.description,
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((course) => course.slug === params.slug);

  if (!course) {
    notFound();
  }

  const Icon = course.icon;

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-primary mb-4">
                <Icon className="h-12 w-12" />
            </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {course.description}
          </p>
        </div>

        <Card className="mt-12">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <CardTitle className="font-headline text-2xl">Course Duration</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-lg font-medium text-muted-foreground">{course.duration}</p>
            </CardContent>
        </Card>

        <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-3xl font-bold">Syllabus</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {course.syllabus.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                            {item.topic}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base pl-2">
                           {item.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
