import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/resume" element={<ResumePage/>} />
      <Route path="/projects" element={<ProjectPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
    </>
  )
}

export default App;