import "./globals.css";

import NextAuthSessionProvider from "./providers/sessionProvider"
import ThemeSwitcher from "./theme/ThemeSwitcher"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          {/* <ThemeSwitcher /> */}
            {children}
        </NextAuthSessionProvider>

      </body>
    </html>
  );
}
