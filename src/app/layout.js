import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProviderPage from "@/components/Provider";
import NavbarPage from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IdeaVault",
  description: "A platform to share and discover startup ideas.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ProviderPage>
          <NavbarPage />
          <main>
          {children}
          </main>
          <Footer/>
        </ProviderPage>
        <ToastContainer />
      </body>
    </html>
  );
}
