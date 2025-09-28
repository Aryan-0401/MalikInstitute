'use server';

import { z } from 'zod';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '@/lib/firebase';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(data: { name: string; email: string; phone?:string, message: string }) {
  try {
    const validatedData = contactFormSchema.parse(data);
    
    // Get Firestore instance
    const db = getFirestore(app);
    
    // Add a new document with a generated ID to the "contact-submissions" collection
    await addDoc(collection(db, 'contact-submissions'), {
      ...validatedData,
      submittedAt: serverTimestamp(),
    });
    
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };

  } catch (error) {
    console.error('Contact form submission error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data. Please check your entries.' };
    }
    return { success: false, message: 'There was an error submitting your message. Please try again.' };
  }
}
