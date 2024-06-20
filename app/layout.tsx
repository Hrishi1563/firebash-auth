"use clien";
import "./globals.css";
import Navbar from "./components/Navbar.js";
import { AuthContextProvider } from "./context/AuthContext.js";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
        </AuthContextProvider>
      </body>
    </html>
  );
}
