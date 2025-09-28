import { summarizeInstituteInfo } from '@/ai/flows/summarize-institute-info';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Suspense } from 'react';

const instituteDetailsForAI = `Malik Institute is a premier computer training center dedicated to providing high-quality education in information technology. Our vision is to empower students with practical skills and knowledge to excel in the digital world. We offer a wide range of courses, from basic computer literacy to advanced programming and web development. Our mission is to bridge the gap between academic learning and industry requirements. What makes us unique is our hands-on approach, experienced faculty, and affordable fee structure. We are committed to student success and providing a supportive learning environment.`;

const whyChooseUsPoints = [
  'Experienced and Certified Trainers',
  'Practical, Hands-On Learning Approach',
  'Comprehensive and Up-to-Date Curriculum',
  'Flexible Class Timings',
  'Affordable Fee Structure',
  'Job Placement Assistance',
];

async function SummarySection() {
  const { summary } = await summarizeInstituteInfo({ instituteDetails: instituteDetailsForAI });
  return <p className="text-lg text-muted-foreground">{summary}</p>;
}

export const metadata = {
  title: 'About Us - Malik Institute',
  description: 'Learn about Malik Institute, our mission, vision, and why we are the best choice for your IT education.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          About Malik Institute
        </h1>
        <div className="mt-6 max-w-3xl mx-auto">
          <Suspense fallback={<p className="text-lg text-muted-foreground animate-pulse">Loading summary...</p>}>
            <SummarySection />
          </Suspense>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be a leading center of excellence in IT education, empowering individuals with the skills to thrive in the digital age and contribute meaningfully to the global technology landscape.
            </p>
          </CardContent>
        </Card>
        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide accessible, high-quality, and industry-relevant computer education through innovative teaching methods, practical training, and a supportive learning environment that fosters growth and success.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are committed to your success and provide an environment where you can excel.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
