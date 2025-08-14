"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const generateNumber = (a = 1000, b = 2000) => {
  const result = Math.floor(Math.random() * (b - a) + a);
  return result;
};

function CustomerPage() {
  const router = useRouter();
  const navigateToLeads = () => {
    router.push(`/dashboard/my-work/leads/${generateNumber()}`);
  };
  return (
    <div className="mt-10">
      <div className="flex relative">
        <div className="flex items-center">
          <Image
            width={20}
            height={20}
            className="absolute left-2  cursor-pointer"
            src={"/assets/search-icon.png"}
            alt="icon"
          />
        </div>
        <input className="pl-10 pr-4 py-2 border-1 rounded-l-lg" type="text" />
        <button
          onClick={navigateToLeads}
          className="bg-primary text-white px-4 py-2 font-semibold rounded-r-lg hover:bg-primary-dark transition-all duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default CustomerPage;
