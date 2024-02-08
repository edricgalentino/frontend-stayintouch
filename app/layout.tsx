import { fontQuicksand } from "@/lib/core/font";
import "./globals.css";
import { Metadata } from "next";
import Snackbar from "@/components/Common/Snackbar/Snackbar";

export const metadata: Metadata = {
  title: {
    template: "%s - Stay In Touch",
    default: "Stay In Touch",
  },
  description: "Feeling Shared, Connection Stay.",
  icons: "/static/logo/Stay In Touch Logo Icon Rounded.png",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth transition-all duration-500">
      <body className={`${fontQuicksand.className} font-normal bg-base-primary`}>
        <Snackbar />
        {children}
      </body>
    </html>
  );
}
