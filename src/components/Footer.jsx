export const Footer = () => {
  return (
    <footer className=" bg-slate-900 rounded-lg shadow flex items-center justify-between p-6 ">
      <span className="text-lg font-bold text-slate-400 text-center ">
        JhonDev
      </span>
      <ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mt-0">
        <li>
          <a
            target="_blank"
            href="https://jhonpitmac.vercel.app/"
            className="mr-4 hover:underline font-semibold"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCJSIzpSUsxZYyJoHxYk_hLA"
            target="_blank"
            className="mr-4 hover:underline font-semibold"
          >
            Youtube
          </a>
        </li>
      </ul>
    </footer>
  );
};
