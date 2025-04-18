import { allprojects } from "@/data/index";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "./button";

const Allproject = () => {
  return (
    <div className="">
        <div className="flex flex-col justify-center items-center text-center">
        <span className="text-center font-bold text-xl lg:text-4xl">Explore a snapshot of the <br /><span className="text-indigo-700"> stunning websites </span> we've crafted.</span>
      <span className="text-center text-xl mt-2 mb-4">We're proud to create custom solutions that bring founder's dreams to life!</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 md:py-10 md:px-40 lg:py-10 lg:px-40 gap-10 place-items-center h-full ">
  {allprojects.map((item) => (
    
    <div
      className="lg:min-h-[32.5rem] hover:border border-neutral-700 h-[25rem] p-4 flex flex-col items-center rounded-[10px] justify-center sm:w-96 lg:w-[100%]"
      key={item.id}>
        
        <div className="relative flex items-start h-[70%] justify-center sm:w-96 lg:w-[100%] overflow-hidden mb-6">
            
          <div
            className="relative w-full shadow-[0px_48px_100px_0px_rgba(17,12,46,0.15)]  h-full overflow-hidden rounded-[10px] p-[2px] lg:rounded-[10px]"
            
          >
            <img src={item.img} alt="" className="h-full w-full object-cover rounded-[10px]" />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
        <div className="">
           <a href={item.link}> <Button className="px-4 py-2 bg-gradient-to-r from-[#3793FF] to-[#0017E4] text-white font-extrabold rounded-[10px]">{item.button}</Button></a> 
            <span
          className="lg:text-xl lg:font-normal font-light pt-2 text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {item.des}
        </span>
          </div>
          
    </div>
    
  ))}
  
</div>
    </div>
  )
}

export default Allproject