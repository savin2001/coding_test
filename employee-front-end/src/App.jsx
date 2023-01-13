import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import BasicForm from "./pages/BasicForm";
import DynamicForm from "./pages/DynamicForm";
import Table from "./pages/Table";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router >
      <Navbar />
      <div className="drawer drawer-mobile w-screen body-font font-poppins">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start w-full">
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee-registration" element={<BasicForm />} />
            <Route path="/work-experience" element={<DynamicForm />} />
            <Route path="/employee-list" element={<Table />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Sidebar />
      </div>
      <Footer/>
    </Router>
  );
}
export default App;
