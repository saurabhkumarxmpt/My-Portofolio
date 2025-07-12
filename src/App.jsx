import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";

const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/resume" element={<ResumePage/>} />
    </Routes>
    </>
  )
}

export default App;