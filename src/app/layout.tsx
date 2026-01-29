import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Govardhan Sahani | Full Stack Developer Portfolio",
  description:
    "This is Govardhan Sahani’s personal portfolio website. I am a BSc IT graduate from KM Patel Senior College,affiliated with the University of Mumbai. I am a passionate Full ,Stack Developer specializing in building modern web applications using HTML, CSS,JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, and WebSockets. I have built projects such as a Real-Time Chat Application,  Personal Portfolio Website, Amazon Clone, Netflix Clone, leecode  Application fullstack. I enjoy turning ideas into scalable, real-world applications and continuously improving my skills. Always excited to collaborate,  learn, and build impactful products.",

  keywords: [
    "Govardhan Sahani",
    "Govardhan Sahani Portfolio",
    "Govardhan Sahani Full Stack Developer",
    "Govardhan Sahani Web Developer",
    "Govardhan Sahani GitHub",
    "BSc IT University of Mumbai",
    "KM Patel Senior College",
    "MERN Stack Developer",
    "Next.js Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
