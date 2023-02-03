import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="bg-zinc-800">
<NavBar/>
<Home></Home>
<About />
<Technologies />
<Projects />
<Contact />

    </div>
  );
}

export default App;
