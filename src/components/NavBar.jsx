import { useLocation } from "wouter";

export const NavBar = () => {
  const [location, setLocation] = useLocation();
  const handleHome = () => {
    setLocation("/");
    window.location.reload(false);
  };

  return (
    <nav className="bg-slate-900  px-6 sm:px-4 py-4 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <button onClick={handleHome} className="flex items-center">
          <span className="self-center text-xl font-bold whitespace-nowrap text-slate-400 hover:text-white">
            Disney Characters
          </span>
        </button>

        <a
          href=""
          className="text-sm text-gray-300 font-semibold hover:underline"
        >
          API
        </a>
      </div>
    </nav>
  );
};
