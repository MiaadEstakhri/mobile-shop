import { HiSortDescending } from "react-icons/hi";
import { HiOutlineFilter } from "react-icons/hi";

const SortMobile = () => {
  return (
    <section className="flex justify-between items-center px-4 gap-x-4 md:hidden">
      <div className="flex items-center justify-start rounded bg-white py-2 pr-4 w-1/2">
        <div className="">
          <HiSortDescending className="w-6 h-6 text-orange-600" />
        </div>
        <span className="text-sm font-medium text-slate-800 mr-3">
          محبوب ترین
        </span>
      </div>
      <div className="flex items-center justify-start rounded bg-white py-2 pr-4 w-1/2">
        <div className="">
          <HiOutlineFilter className="w-6 h-6 text-gray-300" />
        </div>
        <span className="text-sm font-medium text-slate-800 mr-3">
          برند : اپل{" "}
        </span>
      </div>
    </section>
  );
};

export default SortMobile;
