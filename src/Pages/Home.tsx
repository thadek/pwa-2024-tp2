import App from "../App";
import { useTitle } from "../Hooks/useTitle";

export default function Home() {

  useTitle("Home");

  return (
    <App/>
  );
}
