// Summarize institute info flow
'use server';
/**
 * @fileOverview Summarizes general details about Malik Institute for the 'About Us' section.
 *
 * - summarizeInstituteInfo - A function that generates a concise summary of the institute's information.
 * - SummarizeInstituteInfoInput - The input type for the summarizeInstituteInfo function.
 * - SummarizeInstituteInfoOutput - The return type for the summarizeInstituteInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeInstituteInfoInputSchema = z.object({
  instituteDetails: z
    .string()
    .describe('General details about Malik Institute, including its vision, mission, and unique selling points.'),
});
export type SummarizeInstituteInfoInput = z.infer<typeof SummarizeInstituteInfoInputSchema>;

const SummarizeInstituteInfoOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise and engaging summary of Malik Institute for the About Us section.'),
});
export type SummarizeInstituteInfoOutput = z.infer<typeof SummarizeInstituteInfoOutputSchema>;

export async function summarizeInstituteInfo(
  input: SummarizeInstituteInfoInput
): Promise<SummarizeInstituteInfoOutput> {
  return summarizeInstituteInfoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeInstituteInfoPrompt',
  input: {schema: SummarizeInstituteInfoInputSchema},
  output: {schema: SummarizeInstituteInfoOutputSchema},
  prompt: `You are an expert content writer specializing in creating engaging summaries for educational institutions.

You will use the following information about Malik Institute to create a concise and appealing summary for the 'About Us' section of their website.

Institute Details: {{{instituteDetails}}}

Write a summary that is approximately 100-150 words long. Focus on the institute's vision, mission, and unique selling points, and make it appealing to potential students.`,
});

const summarizeInstituteInfoFlow = ai.defineFlow(
  {
    name: 'summarizeInstituteInfoFlow',
    inputSchema: SummarizeInstituteInfoInputSchema,
    outputSchema: SummarizeInstituteInfoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
