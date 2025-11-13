import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melic Music Discovery App | Arun T Scaria",
  description: "Music discovery platform design with focus on personalized recommendations and seamless playlist management.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎵</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
