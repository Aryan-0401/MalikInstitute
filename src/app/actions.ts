'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(data: { name: string; email: string; message: string }) {
  try {
    contactFormSchema.parse(data);
    
    console.log('New contact form submission:', data);
    
    // In a real application, you would integrate with an email service
    // or save the data to a database here.
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };

  } catch (error) {
    console.error('Contact form submission error:', error);
    return { success: false, message: 'There was an error submitting your message. Please try again.' };
  }
}
