import picOne from "./assets/pic1.svg";
import picTwo from "./assets/pic2.svg";
import picThree from "./assets/pic3.svg";
import picFour from "./assets/pic4.svg";
import picFive from "./assets/pic5.svg";
import picSix from "./assets/pic6.svg";
import picSeven from "./assets/pic7.svg";
import picEight from "./assets/pic_8.svg";
import picNine from "./assets/lifework.svg";
import pic10 from "./assets/mycourse.svg";
import pic11 from "./assets/pic11.svg";
import pic12 from "./assets/pic12.svg";

const projects = [
  {
    picture: picOne,
    project: "E-commerce",
    year: "2024",
    type: "Group Project",
    link: "https://ecommerce-full-stack-jet.vercel.app/",
  },
  {
    picture: picTwo,
    project: "Alternative version of portfolio",
    year: "2024",
    type: "Individual Project",
    link: "https://portfolio-liart-iota.vercel.app/",
  },
  {
    picture: picThree,
    project: "Smoothie",
    year: "2024",
    type: "Individual Project",
    link: "https://drive.google.com/file/d/1cWkWqoGdjx9KAaDfFpsDi8fPuPrH4nfM/view?usp=sharing",
  },
  {
    picture: picFour,
    project: "Management Airport in Japan",
    year: "2024",
    type: "Individual Project",
    link: "https://drive.google.com/file/d/1Hf3EUTqEahvFOLFzVhnt_2y-9l2_JADr/view?usp=sharing",
  },
  {
    picture: picFive,
    project: "Eco-Luxury Hotel",
    year: "2024",
    type: "Individual Project",
    link: "https://drive.google.com/file/d/1YgZiQ1k-qQzPUv9X0MMKoFas6uqgVymk/view?usp=sharing",
  },
  {
    picture: picSix,
    project: "Design System Guide",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/design/ZkcODW9OMxXMzQBXmDFHwL/Design-System-Guide?node-id=0-1&t=CoMTm0isnt5PYVat-1",
  },
  {
    picture: picSeven,
    project: "Manga Landpage Design",
    year: "2024",
    type: "Individual Project",
    link: "https://drive.google.com/file/d/1Wn5rR9fMpPidnQ-3rSIUyBFnLOqVKRJ4/view?usp=sharing",
  },
  {
    picture: picEight,
    project: "FoodieOrder - Online Food Ordering",
    year: "2024",
    type: "Individual Project",
    link: "https://drive.google.com/file/d/164cRn_Se7QyLH6qqWt3YwG3NkNMU9G3x/view?usp=sharing",
  },
  {
    picture: picNine,
    project: "LifeWork - Job Agency",
    year: "2024",
    type: "Internship Individual Project",
    link: "https://www.figma.com/proto/12VF8vOuWxQJnH4ZyD99P9/internship-project---lifework?node-id=0-1963&t=kWvuOvgwwFAg0c43-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
 
  {
    picture: pic11,
    project: "Casino",
    year: "2024",
    type: "Individual Project",
    link: "https://drive.google.com/file/d/1LsGWy05w2MBwpY3-6tvGNP6vkepaJ8py/view?usp=sharing",
  },
  {
    picture: pic12,
    project: "Milestone Group Logistics",
    year: "2024",
    type: "Individual Project",
    link: "https://drive.google.com/file/d/1hgqzg6roSuj32NwwG_1SvBfKDFpzr2IB/view?usp=sharing",
  },
];

const Project = () => {
  return (
    <>
      <div id="project">
        <div className="md:mt-[130px] mt-[50px] xl:mt-[230px]">
          <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center">
            Projects
          </p>
          <div className="xl:mt-[100px] md:mt-[150px] mt-10 overflow-x-auto">
            <div className="mt-5 flex flex-row justify-center items-center">
              <div className="hidden md:flex flex-wrap justify-center items-center gap-[30px]">
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#060C26] border-[#485789] border flex flex-col justify-between text-left p-10 gap-[10px]"
                    style={{ width: "650px", height: "600px", margin: "15px" }}
                  >
                    <div>
                      <img
                        src={item.picture}
                        alt={item.project}
                        className="w-full h-auto"
                      />
                      <p className="text-white font-radley text-[20px]">
                        <span style={{ fontStyle: "italic" }}>Project: </span>
                        <span className="font-arial text-[20px]">
                          {item.project}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[20px]">
                        <span style={{ fontStyle: "italic" }}>Year: </span>
                        <span className="font-arial text-[20px]">
                          {item.year}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[20px]">
                        <span style={{ fontStyle: "italic" }}>Type: </span>
                        <span className="font-arial text-[20px]">
                          {item.type}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        className="border border-[#0F3E68] rounded-xl w-[236px] h-[50px] text-white text-[20px] font-raleway font-bold tracking-[4px] flex items-center justify-center mt-5 hover:bg-[#061726] hover:border-[#99CEFD]"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden overflow-y-auto h-[550px] mt-10">
              <div className="flex flex-col items-center gap-10 px-6 w-full">
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#060C26] border-[#485789] border flex flex-col justify-center gap-10 text-left px-[20px]"
                    style={{ width: "312px", height: "450px" }}
                  >
                    <div>
                      <img
                        src={item.picture}
                        alt={item.project}
                        className="w-full h-auto mb-5"
                      />
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Project: </span>
                        <span className="font-arial text-[16px]">
                          {item.project}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Year: </span>
                        <span className="font-arial text-[16px]">
                          {item.year}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Type: </span>
                        <span className="font-arial text-[16px]">
                          {item.type}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        className="border border-[#0F3E68] rounded-xl w-[236px] h-[50px] text-white text-[16px] font-raleway font-bold tracking-[4px] flex items-center justify-center hover:bg-[#061726] hover:border-[#99CEFD]"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
