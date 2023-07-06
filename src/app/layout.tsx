import localFont from "next/font/local";

import "./globals.scss";

const nanami = localFont({
  src: [
    {
      path: "fonts/Nanami/Nanami-ExtraLight.otf",
      weight: "200",
    },
    {
      path: "fonts/Nanami/Nanami-Light.otf",
      weight: "300",
    },
    {
      path: "fonts/Nanami/Nanami-Regular.otf",
      weight: "400",
    },
    {
      path: "fonts/Nanami/Nanami-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-nanami",
});

export const metadata = {
  title: "Eighty Store",
  description: "Sé tú mismo a través de Eighty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nanami.variable} font-sans`}>
      <body>
        {children}
        <footer>
          <p>© 2023 Eighty. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
