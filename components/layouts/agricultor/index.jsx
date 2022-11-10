import Navbar from "../../navbar";
import Footer from "../../footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
