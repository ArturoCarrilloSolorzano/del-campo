import Hero from "../components/main_page/hero";
import MainLayout from "../components/layouts/main";
import Main from "../components/main_page/main";
import Subscription from "../components/main_page/subscription";

export default function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <Subscription />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
