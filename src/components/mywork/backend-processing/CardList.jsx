import Button from "@/components/Button";

export default function CardList({ cards }) {
  return (
    <div className="flex gap-4 w-max">
      {cards.map((item, idx) => (
        <div
          key={idx}
          className="min-w-[250px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border-2 border-gray-400"
        >
          <div className="flex justify-center items-center mb-2 border-b-2 border-gray-400 px-4 py-2 text-center">
            <h3 className="font-bold text-sm">{item.bankName}</h3>
          </div>
          <div className="p-5">
            <div className="text-sm font-semibold border-b border-gray-500 text-center mb-2 ">
              {item.name}
            </div>
            <div className="text-gray-800 font-bold text-lg text-center border-b mb-2 border-gray-500 ">
              {item.amount}
            </div>
            <div className="text-xs text-gray-800 text-center border-b border-gray-500  mb-2">
              {item.min}
            </div>
            <div className="font-semibold text-sm mt-2 text-center border-b border-gray-500">
              {item.location}
            </div>
            <Button className="mt-3 w-full py-1 text-sm" label={"Accept"} />
          </div>
        </div>
      ))}
    </div>
  );
}
