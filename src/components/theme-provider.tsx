"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// We use 'React.ComponentProps' instead of importing specific types
// This prevents the "Cannot find module" error on Vercel
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}