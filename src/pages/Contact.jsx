import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";



const Contact = () => {
  return (
    <div>
      {/* Import Title Component */}
      <div className="text-center text-2xl pt-10 border-t uppercase">
        <Title text1={'Contact'} text2={'Us'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 justify-center mb-20">
        <img src={assets.contact_img} alt="contactImage" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">54709 Willms Station <br /> Suite 350,Washington,UAS</p>
          <p className="text-gray-500">Tel: (415) 555-0123 <br /> Email: admin@forever.com</p>
          <p className="text-xl font-semibold text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">Explore Jobs</button>
        </div>
      </div>

      {/* Import NewsLetterBox Component */}
      <NewsLetterBox />
    </div>
  )
}
export default Contact;
