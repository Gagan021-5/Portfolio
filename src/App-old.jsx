import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import BackgroundCanvas from "./components/BackgroundCanvas";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <BackgroundCanvas />
      <CustomCursor />
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <SmoothScroll>
        <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <Navbar />
          <section id="home" className="min-h-screen flex items-center justify-center">
            <Home />
          </section>
        </div>

        <section id="about" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
          <Skill />
        </section>
        
        <section id="project" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 py-24">
          <Project />
        </section>
        
        <section id="contact" className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-24">
          <Contact />
        </section>
      </SmoothScroll>
    </>
  );
}

export default App;
