import Avatar from "../../assets/images/my-avatar.png";
import authorData from "../../db/author.json";
import { HiBadgeCheck } from "react-icons/hi";

function Heading() {
  const { name, title } = authorData.author;
  return (
    <>
      <div className="text-center pt-16 lg:mb-10">
        <img
          src={Avatar}
          alt="Rajarshi Samaddar"
          className="rounded-full mx-auto w-32 ring-1 lg:ring-2 ring-slate-600 ring-opacity-50 shadow-lg lg:shadow-2xl shadow-slate-600"
        />
        <h1 className="text-3xl lg:text-6xl font-medium font-sans mt-4 text-gray-800 opacity-90">
          {name}
          <sup>
            <HiBadgeCheck className="inline text-blue-700 ml-1 text-xl lg:text-2xl opacity-100" />
          </sup>
        </h1>
        <p className="text-lg lg:text-xl mt-4 text-gray-800 font-mono opacity-90">
          {title}
        </p>
      </div>
    </>
  );
}

export default Heading;
