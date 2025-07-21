import { IoClose } from "react-icons/io5";
import CLOUD_CARD from "../assets/cloud-bg-card.png";
import { IoIosCloudOutline, IoIosPartlySunny } from "react-icons/io";
import { TbLocation } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { GoCloudOffline } from "react-icons/go";
import { BsCloudDrizzle, BsCloudFog } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

const Card = (props) => {
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
  } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${props.location}`, { state: props });
  };

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
        return <IoIosCloudOutline className="text-2xl" />;
      case "Broken Clouds":
        return <GoCloudOffline className="text-2xl" />;
      case "Clear Sky":
        return <MdOutlineWbSunny className="text-2xl" />;
      case "Light Ran":
        return <BsCloudDrizzle className="text-2xl" />;
      case "Mist":
        return <BsCloudFog className="text-2xl" />;
      default:
        return <IoIosPartlySunny className="text-2xl" />;
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative z-10 rounded-lg overflow-hidden cursor-pointer mx-4 md:mx-0"
    >
      <div
        className={`${getConditionColor(condition)} relative text-white py-10`}
      >
        <img
          src={CLOUD_CARD}
          alt="cloud background"
          className="absolute w-full bottom-0"
        />
        <IoClose className="absolute top-4 right-4 h-5 w-5 text-white" />
        <div className="flex justify-between items-start mb-4 px-16 pt-5">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold">{location}</h3>
            <p className="text-sm opacity-70 mt-1">{time}</p>
          </div>
          <div className="text-left">
            <div className="text-6xl font-medium">{temperature}°C</div>
            <div className="text-sm font-medium mt-3">
              <p>Temp Min: {temp_min}c</p>
              <p>Temp Min: {temp_max}c</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-16 -mt-10">
          {getConditionIcon(condition)}
          <h3 className="text-base font-medium">{condition}</h3>
        </div>
      </div>
      <div className="bg-[hsl(var(--slate-navy))] text-white px-7 py-9">
        <div className="grid md:grid-cols-3 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/20 gap-5">
          <div className="flex flex-col text-sm font-medium gap-1 py-2 md:py-0">
            <span>Pressure: {pressure}h</span>
            <span>Humidity: {humidity}%</span>
            <span>Visibility: {visibility}km</span>
          </div>
          <div className="flex flex-col justify-center gap-3 py-2 md:py-0">
            <TbLocation className="w-8 h-8 mx-auto" />
            <span className="text-xs">{wind} Degree</span>
          </div>
          <div className="flex flex-col justify-center text-sm font-semibold gap-1">
            <span>Sunrise: {sunrise}am</span>
            <span>Sunset: {sunset}am</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
