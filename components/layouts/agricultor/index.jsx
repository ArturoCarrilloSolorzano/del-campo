import Navbar from "../../navbar/agricultor";
import Footer from "../../footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between bg-white">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
