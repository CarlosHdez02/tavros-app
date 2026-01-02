import z from "zod";
export enum AppEnv {
  Development = "development",
  Staging = "staging",
  Production = "production",
}

export const envSchema = z.object({
  NEXT_PUBLIC_URL: z.string(),
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
});

export const env = envSchema.parse(process.env);
