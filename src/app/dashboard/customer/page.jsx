import Image from "next/image";

function CustomerPage() {
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
        <button className="bg-primary text-white px-4 py-2 font-semibold rounded-r-lg hover:bg-primary-dark transition-all duration-200">
          Search
        </button>
      </div>
    </div>
  );
}

export default CustomerPage;
