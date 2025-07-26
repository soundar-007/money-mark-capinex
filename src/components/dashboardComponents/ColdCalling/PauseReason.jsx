import { Dialog } from "primereact/dialog";
import Image from "next/image";
const PauseReason = ({ visible, onHide }) => {
  const imageCardArray=[
    {src:"/assets/lunch-time.png",alt:"lunch-time",title:"Lunch Break"},
    {src:"/assets/herbal-tea.png",alt:"herbal-tea",title:"Tea Break"},
    {src:"/assets/meeting.png",alt:"Hr-meeting",title:"HR Meeting"},
    {src:"/assets/wellness.png",alt:"bio-break",title:"Bio Break"},
    {src:"/assets/video-call.png",alt:"manual-call",title:"Manual Calling"},
    {src:"/assets/contract.png",alt:"Documentation",title:"Documentation"},
  ]


  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Select Reason for Pause"
      className="w-[350px] md:w-[400px]"
      closable
      draggable={false}
    >
     <div className="min-w-full flex flex-row grid grid-cols-3 gap-10 p-10 px-24">
       {imageCardArray.map((item,index)=>(
        <IconCard key={index} src={item.src} alt={item.alt} title={item.title} />
       ))}
     </div>

    </Dialog>
  );
};

export default PauseReason;
const IconCard = ({ src, alt, title, width = 80, height = 80 }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <Image src={src} alt={alt} width={width} height={height} />
      <h2 className="mt-2 text-black">{title}</h2>
    </div>
  );
};