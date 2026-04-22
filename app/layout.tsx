import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* ✅ Global Navbar */}
        <Navbar />

        {/* ✅ Page Content */}
        <main>{children}</main>

        {/* ✅ Global Footer */}
        <Footer />

      </body>
    </html>
  );
}