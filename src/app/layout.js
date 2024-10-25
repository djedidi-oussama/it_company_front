// src/app/layout.js (or RootLayout.js)
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-6xl mx-auto`}
      >
        {/* Wrap the entire application with ReduxProvider */}
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
      </body>
    </html>
  );
}
