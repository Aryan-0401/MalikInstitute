import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Laptop, Users, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { courses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';

const heroImage = PlaceHolderImages.find(image => image.id === 'hero-image');

const highlights = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of hands-on experience in technology and teaching.',
  },
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Practical Training',
    description: 'Our curriculum is focused on practical, real-world skills that you can apply directly in your career.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Career Support',
    description: 'We provide job placement assistance and career guidance to help you land your dream job.',
  },
];

export default function Home() {
  const popularCourses = courses.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Unlock Your Future in Tech
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Join Malik Institute to gain the skills and knowledge needed to succeed in the fast-paced world of technology.
          </p>
          <Button asChild size="lg" className="mt-8 transition-transform hover:scale-105">
            <Link href="/courses">
              Join Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Why Malik Institute?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are dedicated to providing the best learning experience for our students.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="text-center transition-shadow hover:shadow-lg">
                <CardHeader className="items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    {highlight.icon}
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6">
                  {highlight.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Popular Courses
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore our most sought-after courses designed for career success.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
