import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="w-9/12 flex flex-col text-center mt-20 m-auto">
      <p className="text-white font-bold text-4xl">Ooops!</p>
      <p className="text-white text-2xl">Please back to home!</p>
      <Link
        to="/"
        className="text-slate-400 text-3xl hover:text-slate-200 font-bold"
      >
        Back
      </Link>
    </div>
  );
}
