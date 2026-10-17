/**
 * Deployment environment. Vercel sets VERCEL_ENV to 'production' for the main
 * branch, and 'preview' for every other branch (e.g. dev.imadchikh.com).
 */
export const isProduction = process.env.VERCEL_ENV === 'production';
