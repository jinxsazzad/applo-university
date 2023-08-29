import { FaUser } from "react-icons/fa6";
import CountUp from "react-countup";

const PromotionOne = () => {
  return (
    <>
      <div
        className="relative py-8 md:h-[30vh] flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('	https://daffodilvarsity.edu.bd/template/images/bg_3.webp')",
        }}
      >
        {/* Overlay with gradient color */}
        <div className="absolute inset-0 bg-slate-900 bg-opacity-75"></div>
        <div className="relative max-container">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-white">
            <div className="flex flex-col justify-center items-center gap-1">
              <FaUser className="text-2xl font-semibold" />
              <h1 className="text-3xl font-semibold">
              <CountUp end={100} />
              </h1>
              <p className="text-lg">FOREIGN FOLLOWERS</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <FaUser className="text-2xl font-semibold" />
              <h1 className="text-3xl font-semibold">
              <CountUp end={100}  />
              </h1>
              <p className="text-lg">FOREIGN FOLLOWERS</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <FaUser className="text-2xl font-semibold" />
              <h1 className="text-3xl font-semibold">
              <CountUp end={100} />
              </h1>
              <p className="text-lg">FOREIGN FOLLOWERS</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <FaUser className="text-2xl font-semibold" />
              <h1 className="text-3xl font-semibold">
                <CountUp end={100} />
              </h1>
              <p className="text-lg">FOREIGN FOLLOWERS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionOne;
