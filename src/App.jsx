import "./App.css";
import EmployeePopup from "./components/employeepopup/EmployeePopup";
import DeletePopup from "./components/deletepopup/DeletePopup";
import Employees from "./components/employees/Employees";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <EmployeePopup />
      <DeletePopup />
      <Navbar />
      <div className="flex-1 py-10">
        <Employees />
      </div>
      <Footer />
    </div>
  );
}

export default App;
