import Logo from "../../../assets/images/logo/Logo.png";
import { TfiSearch } from "react-icons/tfi";

const AppBar = () => {
  return (
    <section className="flex items-center justify-between px-4 pt-11 pb-6 md:hidden">
      <div className="">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="text-lg font-bold text-slate-800">ساعت هوشمند</div>
      <div className="w-8 h-8 bg-stone-50 flex items-center justify-center rounded shadow-lg">
        <TfiSearch className="w-6 h-6 stroke-slate-800" />
      </div>
    </section>
  );
};

export default AppBar;
