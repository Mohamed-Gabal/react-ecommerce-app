import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      {/* Import Title Component */}
      <div className="text-2xl text-center pt-8 border-t uppercase">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="aboutImage" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w2/4 text-gray-600">
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began a simple idea: to provide where customers can easily discover, explore, and purchase</p>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began a simple idea: to provide where customers can easily discover, explore, and purchase</p>
          <b className="text-gray-800">Our mission</b>
          <p>Our mission a Forever is to empower customers with choice, convenience, and confidence. we,re dedicated to providing a seamless shopping experience that exceeds expectations, form browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className="text-xl py-4 uppercase">
        {/* Import Title Component */}
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <p>Quality Assurance:</p>
          <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <p>Convenience:</p>
          <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <p>Exceptional Customer Service:</p>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      {/* Import NewsLetterBox Component */}
      <NewsLetterBox />
    </div>
  );
};
export default About;
