import { IoClose } from "react-icons/io5";
import CLOUD_CARD from '../assets/cloud-bg-card.png';
import { IoIosPartlySunny } from "react-icons/io";
import { TbLocation } from "react-icons/tb";

const Card = () => {
  return (
    <div className='relative z-10 rounded-lg overflow-hidden'>
        <div className="bg-[hsl(var(--sky-blue))] relative text-white py-10">
            <img src={CLOUD_CARD} alt="cloud background" className="absolute w-full bottom-0"/>
            <IoClose className="absolute top-4 right-4 h-5 w-5 text-white"/>
            <div className="flex justify-between items-start mb-4 px-16 pt-5">
                <div className="text-center">
                    <h3 className="text-2xl font-semibold">Colombo, LK</h3>
                    <p className="text-sm opacity-70 mt-1">9.19am Feb 8</p>
                </div>
                <div className="text-left">
                    <div className="text-6xl font-medium">27°C</div>
                    <div className="text-sm font-medium mt-3">
                        <p>Temp Min: 25c</p>
                        <p>Temp Min: 25c</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 px-16 -mt-10">
                <IoIosPartlySunny className="text-2xl"/>
                <h3 className="text-base font-medium">Few Clouds</h3>
            </div>
        </div>
        <div className="bg-[hsl(var(--slate-navy))] text-white px-7 py-9">
            <div className="grid grid-cols-3 divide-x divide-white/20 gap-5">
                <div className="flex flex-col text-sm font-medium gap-1">
                    <span>Pressure: 1018h</span>
                    <span>Humidity: 78%</span>
                    <span>Visibility: 8.0km</span>
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <TbLocation className="w-8 h-8 mx-auto"/>
                    <span className="text-xs">4.0m/s 120 Degree</span>
                </div>
                <div className="flex flex-col justify-center text-sm font-semibold gap-1">
                    <span>Sunrise: 6.05am</span>
                    <span>Sunset: 6.05am</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;