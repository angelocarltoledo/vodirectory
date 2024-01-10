import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "VODirectory",
  description: "All you need as a VO, right here.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-slate-500 p-5">
        <main className={raleway.className}>
          <Nav />
          <section className="w-full flex flex-col items-center gap-5">
            {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
