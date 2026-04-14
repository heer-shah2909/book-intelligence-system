import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Book Intelligence Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <Sidebar />
          <main className="main-content">
            <div className="content-wrapper">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}