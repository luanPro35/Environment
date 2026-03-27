import leafWelcome from "../assets/leaf_welcome.png";
import q1 from "../assets/quang/IMG_0129.jpg";
import q2 from "../assets/quang/IMG_0130.jpg";
import q3 from "../assets/quang/IMG_0131.jpg";
import q4 from "../assets/quang/IMG_0132.jpg";
import q5 from "../assets/quang/IMG_0133.jpg";
import q6 from "../assets/quang/IMG_0134.jpg";
import q7 from "../assets/quang/IMG_0194.jpg";
import q8 from "../assets/quang/IMG_0195.jpg";
import q9 from "../assets/quang/IMG_0196.jpg";
import ImageCarousel from "./ImageCarousel";

const projects = [q1, q2, q3, q4, q5, q6, q7, q8, q9];

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
