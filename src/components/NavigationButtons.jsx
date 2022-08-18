import { useLocation } from "wouter";

export const NavigationButtons = ({ page, setPage }) => {
  const [location, setLocation] = useLocation();
  const nextPage = () => {
    setPage(page + 1);
    setLocation(page + 1);
  };

  const backPage = () => {
    setPage(page - 1);
    setLocation(page - 1);
  };

  return (
    <div className="flex items-center justify-center m-5">
      {page !== 1 && (
        <button
          onClick={backPage}
          className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-slate-400 bg-slate-900 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="mr-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Previous
        </button>
      )}

      <button
        onClick={nextPage}
        className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-slate-400 bg-slate-900 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white"
      >
        Next
        <svg
          aria-hidden="true"
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};
