import CLOUD_CARD from "../assets/cloud-bg-card.png";
import { IoIosCloudOutline, IoIosPartlySunny } from "react-icons/io";
import { TbLocation } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { GoCloudOffline } from "react-icons/go";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsCloudDrizzle, BsCloudFog } from "react-icons/bs";

const SingleCard = () => {
  const { state } = useLocation();
  const {
    location,
    time,
    temperature,
    condition,
    temp_min,
    temp_max,
    pressure,
    humidity,
    visibility,
    wind,
    sunrise,
    sunset,
  } = state;

  const getConditionColor = (condition) => {
    switch (condition) {
      case "Few Clouds":
        return "bg-[hsl(var(--sky-blue))]";
      case "Broken Clouds":
        return "bg-[hsl(var(--royal-purple))]";
      case "Clear Sky":
        return "bg-[hsl(var(--mint-green))]";
      case "Light Ran":
        return "bg-[hsl(var(--amber-orange))]";
      case "Mist":
        return "bg-[hsl(var(--brick-red))]";
      default:
        return "bg-red-400";
    }
  };

  const getConditionIcon = (condition) => {
    switch (condition) {
      case "Few Clouds":
        return <IoIosCloudOutline className="text-6xl" />;
      case "Broken Clouds":
        return <GoCloudOffline className="text-6xl" />;
      case "Clear Sky":
        return <MdOutlineWbSunny className="text-6xl" />;
      case "Light Ran":
        return <BsCloudDrizzle className="text-6xl" />;
      case "Mist":
        return <BsCloudFog className="text-6xl" />;
      default:
        return <IoIosPartlySunny className="text-6xl" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full mt-10 rounded-lg overflow-hidden mb-5">
      <div
        className={`${getConditionColor(condition)} relative text-white py-12`}
      >
        <img
          src={CLOUD_CARD}
          alt="cloud background"
          className="absolute w-full bottom-0 opacity-30"
        />
        <FaArrowLeft className="absolute top-5 left-5 h-4 w-4 text-white" />

        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold">{location}</h3>
          <p className="text-sm opacity-80 mt-3">{time}</p>
        </div>

        <div className="flex justify-center items-center divide-x-2 divide-white/20 text-white">
          <div className="flex flex-col items-center pr-15">
            {getConditionIcon(condition)}
            <span className="text-base font-medium mt-3">{condition}</span>
          </div>

          <div className="flex flex-col pl-15 items-start">
            <div className="text-6xl font-normal">{temperature}°C</div>
            <div className="text-sm mt-5">
              <p>Temp Min: {temp_min}°C</p>
              <p>Temp Max: {temp_max}°C</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(var(--slate-navy))] text-white px-8 py-12">
        <div className="grid grid-cols-3 divide-x divide-white/20 gap-4 text-sm max-w-3xl mx-auto text-center">
          <div className="space-y-1 font-medium text-left pl-12">
            <p>
              <span className="font-semibold">Pressure:</span> {pressure}hPa
            </p>
            <p>
              <span className="font-semibold">Humidity:</span> {humidity}%
            </p>
            <p>
              <span className="font-semibold">Visibility:</span> {visibility}km
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <TbLocation className="w-7 h-7" />
            <p>{wind} Degree</p>
          </div>

          <div className="space-y-1 font-medium pr-12">
            <p>
              <span className="font-semibold">Sunrise:</span> {sunrise}am
            </p>
            <p>
              <span className="font-semibold">Sunset:</span> {sunset}am
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
