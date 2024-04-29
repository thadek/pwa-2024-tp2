import App from "../App";
import Card from "../Components/Card/Card";
import { useTitle } from "../Hooks/useTitle";

export default function Home() {

  useTitle("Home");


  return (
    <App/>
  );
}
