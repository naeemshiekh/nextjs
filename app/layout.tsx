import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
        <h1 className={`${inter.className} antialiased`}>hello</h1>
      </body>
    </html>
  );
}
