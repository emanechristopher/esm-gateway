import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  title: "Éclat Solutions Médical — Assistance médicale internationale",
  description:
    "ESM accompagne les patients africains vers les meilleurs hôpitaux internationaux. Suivi médical de haute définition, sans stress.",
  authors: [{ name: "Éclat Solutions Médical" }],
  openGraph: {
    title: "Éclat Solutions Médical — Assistance médicale internationale",
    description:
      "ESM accompagne les patients africains vers les meilleurs hôpitaux internationaux. Suivi médical de haute définition, sans stress.",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/gpt-engineer-file-uploads/kszVfAQz3IT5gOSSoJeaOfGUux53/social-images/social-1780312965851-logo.webp",
      },
    ],
  },
  twitter: {
    card: "summary",
    creator: "@Lovable",
    title: "Éclat Solutions Médical — Assistance médicale internationale",
    description:
      "ESM accompagne les patients africains vers les meilleurs hôpitaux internationaux. Suivi médical de haute définition, sans stress.",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/kszVfAQz3IT5gOSSoJeaOfGUux53/social-images/social-1780312965851-logo.webp",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
