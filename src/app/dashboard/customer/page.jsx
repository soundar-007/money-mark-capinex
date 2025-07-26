import InputFloating from "@/components/InputFloating"
import { Button } from "primereact/button"

function CustomerPage() {
  return (
    <div className="mt-10">
      <div className="flex">
        <input className="px-4 py-2 w-full sm:w-1/4 border-1 outline-none transition-all duration-300 focus:border-blue-400" style={{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} type="text" />
      <button className="bg-primary text-white px-4 py-2 font-semibold" style={{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>
        Search
        </button>
      </div>
    </div>    
  )
}

export default CustomerPage