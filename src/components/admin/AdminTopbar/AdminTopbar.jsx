import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../../user/header/DarkModeToggle";

export default function AdminTopbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-800 shadow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Admin Panel
      </h2>

      <div className="flex items-center space-x-4">
        <button
          onClick={goHome}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Home
        </button>

        <DarkModeToggle />

        <button
          onClick={handleLogout}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
