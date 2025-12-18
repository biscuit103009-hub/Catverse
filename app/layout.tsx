import "./globals.css";

export const metadata = {
  title: "CatVerse",
    description: "All the best cat videos in one place",
    };

    export default function RootLayout({
      children,
      }: {
        children: React.ReactNode;
        }) {
          return (
              <html lang="en">
                    <body>{children}</body>
                        </html>
                          );
                          }