import "./globals.css";
import { Dock } from "@/components/Dock";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "XAB | Design & Legacy",
  description: "Portfolio of a UI Designer & Gamer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}