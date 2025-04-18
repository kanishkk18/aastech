
import  AnimatedTooltip  from "@/components/ui/animatedToolip";
import {people} from "@/data/index";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./button";

const WebsitePromoCard = () => {
    useEffect(()=>{
        (async function () {
          const cal = await getCalApi({"namespace":"30min"});
          cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])

  return (
    <div className="bg-[#141414f0] h-[65vh] rounded-[20px] mt-10 mx-10 shadow-lg hidden md:flex lg:flex items-center justify-between">
      {/* Left section with text */}
      <div className="w-1/2 flex flex-col p-10">
        <span className="text-white text-4xl font-bold mb-4">
          Get Started In Minutes!
        </span>
        <span className="text-gray-300 text-lg mb-6">
         Are you ready to scale the unscalable? Talk with <br /> us to get a tailored approach to your business! <span className="text-yellow-400">✨</span>
        </span>
        <Button  data-cal-namespace="30min"
	  data-cal-link="sumit-aas-frrsr8/30min"
    
	  data-cal-config='{"layout":"month_view","theme":"dark"}' className="text-md text-white font-medium relative w-[30%] bg-black  dark:text-white px-4 py-2 rounded-full">
          Schedule a Call
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </Button>
        <div className="flex flex-row items-center mt-10 justify-start w-full">
      <AnimatedTooltip items={people} />
    </div>
      </div>

      {/* Right section with images */}
      <div className="w-1/2 relative max-h-full overflow-hidden">
  <div className="grid grid-cols-3 gap-4">

   
    <div className="h-full w-full">

    <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725953716/c4bvwai6l5rrbkoorobk.jpg" alt=""
     className=" h-[20vh] w-full mb-3 rounded-b-[6px] hover:pb-5" />

     <img
      src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703732/bmkpmqe00rqqzuqzt8a3.png"
      alt="Website Sample 1"
      className="rounded-t-[6px] h-[70%] w-full object-cover hover:pt-5"
    /> 
    
    </div>

   <div className=" h-full w-full">
   <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703730/objwetuxsnzpsxgan7y8.jpg" alt=""
   className="h-[30vh] w-full mb-3 rounded-b-[6px] hover:pb-5" />
     <img
      src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703732/wwkzqnshyonmn8g3rfpx.jpg"
      alt="Website Sample 2"
      className="rounded-t-[6px] h-[60%] w-full object-cover hover:pt-5 "
    />
    </div>
   <div className="w-full h-full">
    <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703772/lgeahwoalsdlwkfxh3gu.jpg" alt=""
    className="rounded-bl-[6px] w-full mb-3 rounded-tr-[20px] object-cover h-[40vh] hover:pb-5" />
    <img
      src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725954131/godmsoqjzfvbscpiqohz.png"
      alt="Website Sample 3"
      className="rounded-tl-[6px] rounded-br-[20px] h-[23.2vh] w-full object-cover hover:pt-5"
    />
    </div> 
  </div>
</div>

    </div>
  );
};

export default WebsitePromoCard;