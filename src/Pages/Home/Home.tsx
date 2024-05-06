import { useTitle } from "../../Hooks/useTitle";
import Layout from "../../Layout";
import Listcards from "../../components/Listcards/Listcards";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Home() {

  useTitle("Home");

  return (
    <Layout>
      <Navbar />
      <div className="flex flex-wrap gap-3 ">
        <Listcards/>
      </div>
      <Footer />
    </Layout>
  );
}
