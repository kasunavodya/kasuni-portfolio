import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kasuni Makalanda | Software Engineer & M.Sc. Student",
  description:
    "Portfolio of Kasuni Navodya Hegoda Makalanda — Software Engineer & M.Sc. in Software Engineering and Management student at University of Gothenburg, Sweden. Specializing in Next.js, React, TypeScript, AI tooling, and full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth dark">
      <body className="min-h-full bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
