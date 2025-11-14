import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import { AOSInit } from '../components/AOS'; 

export const metadata = {
  title: "Silver Entity Engineering Solutions | Home",
  description: "Professional Next.js website",
  
  // ✨ FAVICON ADDITION: Define the icon here
  icons: {
    icon: '/logo.svg', // Change the path and filename if different
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      {/* NOTE: Remember to add top padding (pt-XX) to the <main> element
        to compensate for the fixed/sticky Navbar height.
      */}
      <body className="bg-white text-gray-900">
        
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        
      </body>
    </html>
  );
}