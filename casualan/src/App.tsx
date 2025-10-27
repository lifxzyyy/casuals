import Navbar from "./navbar";
import Hero from "./hero";
import Login from "./login";
import "./index.css"

export default function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Login />
    </main>
  );
  
}