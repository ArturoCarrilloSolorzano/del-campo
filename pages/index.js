import Hero from "../components/main_page/hero";
import MainLayout from "../components/layouts/main";
export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
