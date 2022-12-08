import Logo from "../../../assets/images/logo/Logo.png";
import { TfiSearch } from "react-icons/tfi";
import { useState } from "react";

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickShowHandler = (e) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };
  return (
    <section className="flex items-center justify-between px-4 pt-11 pb-6 relative  md:hidden ">
      <div className="">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="text-lg font-bold text-slate-800">ساعت هوشمند</div>
      <div
        onClick={clickShowHandler}
        className="w-7 h-7 bg-stone-50 flex items-center justify-center rounded shadow-lg mx-1 relative z-10"
      >
        <TfiSearch className="w-5 h-5 stroke-slate-800" />
      </div>
      <div className={`w-full z-10 ${isOpen ? "" : "hidden"}`}>
        <form className="w-full bg-gray-100 rounded-lg ">
          <input
            type="text"
            className="w-full bg-gray-100 text-slate-800 stroke-none outline-none placeholder:text-gray-300 px-2"
            placeholder="جستجوی نام محصول و..."
          />
        </form>
      </div>
      <div className="fixed inset-0" onClick={() => setIsOpen(false)}></div>
    </section>
  );
};

export default AppBar;
