import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProjectLists from "./Pages/ProjectLists/ProjectLists";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <ProjectLists />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
