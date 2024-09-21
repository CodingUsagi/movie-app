export function TrendingToggle({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) {
  const toggleClass = "transform translate-x-16 w-28 md:translate-x-20 xl:w-32";

  return (
    <div
      className="relative text-sm md:text-base xl:text-lg w-44 md:w-48 xl:w-52 h-8 md:h-10 flex items-center bg-white border border-black rounded-full p-1 cursor-pointer"
      onClick={() => setToggle(!toggle)}
    >
      <div
        className={`
            left-0 absolute bg-black h-8 md:h-10 rounded-full shadow-md transform duration-300 ease-in-out ${
              toggle ? "w-16 md:w-20" : toggleClass
            }`}
      ></div>
      <div className="flex justify-between items-center px-2 md:px-3 space-x-4 md:space-x-6 z-50">
        <span
          className={`${
            toggle
              ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-slate-300"
              : "text-black"
          }`}
        >
          Today
        </span>

        <span
          className={`${
            toggle
              ? "text-black"
              : "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-slate-300"
          } pl-2`}
        >
          This week
        </span>
      </div>
    </div>
  );
}
