import logo from "./logo.svg";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
function App() {
  return (
    <div>
      
      
     <div className="ml-2 flex">
     <Sidebar />
     <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     </div>
    </div>
  );
}

export default App;
