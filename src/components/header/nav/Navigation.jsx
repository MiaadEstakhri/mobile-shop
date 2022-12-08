import Logo from "../../../assets/images/logo/Logo (1).png";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="max-md:hidden md:flex items-center justify-center px-5 lg:px-11 pt-10 pb-7 w-full bg-gray-50">
      <div className="md:w-2/3 lg:w-1/2">
        <ul className="flex justify-evenly w-full ">
          <li className="">
            <img src={Logo} alt="Logo" />
          </li>
          <li className="font-bold text-slate-800 ">
            <Link to="/">خانه</Link>
          </li>
          <li className="text-slate-800 ">تلفن همراه</li>
          <li className="text-slate-800 ">لپتاپ</li>
          <li className="text-slate-800 ">ساعت هوشمند</li>
        </ul>
      </div>
      <div className="md:w-2/5 lg:flex-1">
        <form className="flex justify-center items-center bg-gray-100 rounded-lg ">
          <span className="py-1 pl-7 pr-2">
            <TfiSearch className="w-7 h-7 stroke-slate-800" />
          </span>
          <input
            type="text"
            className="w-full bg-gray-100 text-slate-800 stroke-none outline-none placeholder:text-gray-300"
            placeholder="جستجوی نام محصول،نام برند،نام مدل و..."
          />
        </form>
      </div>
    </section>
  );
};

export default Navigation;
