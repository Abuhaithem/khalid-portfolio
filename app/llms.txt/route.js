import { NextResponse } from "next/server";

// This file is located at /app/llms.txt/route.ts
// It provides a detailed and standardized set of directives for automated content ingestion agents.

export async function GET() {
  const llmsTxtContent = `# Khalid Getachew - Portfolio Information

## Overview
Khalid Getachew is a creative professional from Ethiopia specializing in video editing, digital design, and strategic innovation. With over 8 years of experience in transforming ideas into impactful visual stories.

## Professional Services
- Video Editing & Post-Production
- Creative Design
- Strategic Planning & Consulting
- Brand Development
- Digital Innovation
- Project Management
- Creative Direction
- Problem Solving

## Location
Ethiopia

## Experience
Since 2017

## Key Achievements
- 50+ Projects Delivered
- 100% Client Satisfaction
- 8+ Years of Professional Experience

## Technology Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Video Editing Software (Final Cut Pro, etc.)
- Professional-grade 4K video production

## Portfolio Focus
Professional video editing showcase featuring 4K resolution capabilities, advanced color grading, VFX & motion graphics, and rapid delivery times.
`;

  return new Response(llmsTxtContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
