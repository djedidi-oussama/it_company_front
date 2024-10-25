// src/app/layout.js (or RootLayout.js)
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";

// Define local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IT Company by Meriem",
  description: "IT Company by Meriem",
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The root layout of the entire application. This component wraps the entire
 * application with ReduxProvider and adds a ToastContainer to display toasts.
 * The RootLayout component is rendered on every page and is responsible for
 * setting up the basic structure of the page.
 */
/******  5670b577-afef-4924-85bb-d5d4298b787b  *******/export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the main content with a max width container */}
        <div className="max-w-6xl mx-auto">
          <ReduxProvider>
            {children}
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </ReduxProvider>
        </div>
        {/* Footer section with full width */}
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
