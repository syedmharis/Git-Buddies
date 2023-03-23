import styles from "../styles";
import { discount, Octodex} from "../assets";
import GetStarted from "./GetStarted";
import DarkGlobe from "../components/DarkGlobe"

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[70px]">
            Get Free <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Github</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Followers & Stars
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Don't settle for mediocre GitHub stats - join the ranks of top developers and start boosting your Followers & Stars today!
        </p>
      </div>

      <div
        className={`flex-3 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <DarkGlobe/>


      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
