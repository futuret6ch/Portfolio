import type { Metadata, Viewport } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gorli Janardhan Naidu | AI Solutions Architect & Healthcare AI Engineer",
  description: "Specializing in Artificial Intelligence, Healthcare Technology, Intelligent Automation, AI Agents, SaaS Products, and Scalable Software Solutions. Partnering with healthcare startups and innovation-driven enterprises.",
  keywords: [
    "Gorli Janardhan Naidu",
    "AI Solutions Architect",
    "Healthcare AI Engineer",
    "Full-Stack Developer",
    "Medical AI Assistant",
    "Clinical Document Processing",
    "Intelligent Workflows",
    "SaaS Products",
    "Next.js Portfolio",
    "React Engineer",
    "Three.js Portfolio",
  ],
  authors: [{ name: "Gorli Janardhan Naidu" }],
  creator: "Gorli Janardhan Naidu",
  publisher: "Gorli Janardhan Naidu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gjnaidu.ai",
    title: "Gorli Janardhan Naidu | AI Solutions Architect & Healthcare AI Engineer",
    description: "Enterprise-grade AI Solutions, Intelligent Automation, and Healthcare Technology systems custom built for businesses.",
    siteName: "Naidu AI Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gorli Janardhan Naidu - AI Solutions Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorli Janardhan Naidu | AI Solutions Architect",
    description: "Building scalable AI-powered platforms and automation systems for healthtech & modern enterprises.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#040409",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <body className="bg-bg-base text-white antialiased min-h-screen selection:bg-glow-purple/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
