import leafWelcome from "../assets/leaf_welcome.png";
import q1 from "../assets/quang/IMG_6021.jpg";
import q3 from "../assets/quang/IMG_6023.jpg";
import q4 from "../assets/quang/IMG_6024.jpg";
import q7 from "../assets/quang/IMG_7552.jpg";
import q8 from "../assets/quang/IMG_7553.jpg";
import q9 from "../assets/quang/IMG_7675.jpg";
import q10 from "../assets/quang/IMG_0489.jpg";
import q11 from "../assets/quang/IMG_0283.jpg";
import q12 from "../assets/quang/IMG_0282.jpg";
import ImageCarousel from "./ImageCarousel";

const projects = [q1, q3, q4, q7, q8, q9, q10, q11, q12];

const WelcomeSection = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center text-center space-y-12">
        {/* Main Heading */}
        <h1 className="max-w-4xl text-4xl sm:text-6xl font-black text-[#1d4f79] leading-[1.1] tracking-tight">
          Hoang's Landscape & Maintenance: Local Landscaping and Sod Experts in Littleton
        </h1>

        {/* Description & Locations */}
        <p className="max-w-5xl text-xl sm:text-3xl font-bold text-[#1d4f79] leading-snug tracking-wide">
          Professional Lawn Care, Sod & Landscape Design Services in Littleton, Lakewood, Wheat Ridge, Denver, Englewood, Highlands Ranch, Castle Rock
        </p>

        {/* Image Slider "Xong rồi tới hình ảnh vài tấm slide" */}
        <div className="w-full pt-10">
          <ImageCarousel images={projects} />
        </div>
      </section>
    </div>
  );
};



export default WelcomeSection;
