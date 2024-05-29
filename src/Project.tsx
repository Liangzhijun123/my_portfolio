import picOne from "./assets/pic1.svg";
import picTwo from "./assets/pic2.svg";
import picThree from "./assets/pic3.svg";
import picFour from "./assets/pic4.svg";
import picFive from "./assets/pic5.svg";

const projects = [
  {
    picture: picOne,
    project: 'E-commerce',
    year: '2024',
    type: 'Group Project',
    link: 'https://ecommerce-full-stack-jet.vercel.app/',
  },
  {
    picture: picTwo,
    project: 'Alternative version of portfolio',
    year: '2024',
    type: 'Individual Project',
    link: 'https://portfolio-liart-iota.vercel.app/',
  },
  {
    picture: picThree,
    project: 'Smoothie',
    year: '2024',
    type: 'Individual Project',
    link: 'https://www.figma.com/proto/dqXTuN0fxFodAwFQkaQQLZ/smoothies?node-id=107-697&starting-point-node-id=107%3A697&t=Ng6C5VgiM058y17u-1',
  },
  {
    picture: picFour,
    project: 'Management Airport in Japan',
    year: '2024',
    type: 'Individual Project',
    link: 'https://www.figma.com/proto/RtqZg8YmHdXJrNs6naLowW/management-app-for-airport-in-japan?node-id=2-2&t=wBeyt1JY8PNttAjp-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2',
  },
  {
    picture: picFive,
    project: 'Eco-Luxury Hotel',
    year: '2024',
    type: 'Individual Project',
    link: 'https://www.figma.com/proto/oRICFBb36yceOWdy5s49cB/Eco-Luxury-Hotel?node-id=0-3&t=CZIZUp0WgJwijrB3-1&scaling=min-zoom&page-id=0%3A1',
  }
]

const Project = () => {
  return (
    <>
      <div id="project">
        <div className="md:mt-[130px] mt-[100px] xl:mt-[130px]">
          <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center">
            Projects
          </p>
          <div className="xl:mt-[100px] md:mt-[150px] mt-10">
            <div className="hidden md:grid grid-cols-2 xl:gap-[171px] md:gap-[50px] justify-center xl:px-48 xl:min-w-[1900px] md:px-10 md:min-w-[1500px]">
              {projects.map((item, index) => (
                <div key={index} className="bg-[#060C26] border-[#485789] border w-[650px] h-[600px] flex flex-col justify-center text-left px-10 gap-[10px]">
                  <img src={item.picture} alt={item.project} />
                  <p className="text-white font-radley text-[20px]">
                    <span style={{ fontStyle: 'italic' }}>Project: </span>
                    <span className="font-arial text-[20px]">{item.project}</span>
                  </p>
                  <p className="text-white font-radley text-[20px]">
                    <span style={{ fontStyle: 'italic' }}>Year: </span>
                    <span className="font-arial text-[20px]">{item.year}</span>
                  </p>
                  <p className="text-white font-radley text-[20px]">
                    <span style={{ fontStyle: 'italic' }}>Type: </span>
                    <span className="font-arial text-[20px]">{item.type}</span>
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="border border-[#0F3E68] rounded-xl w-[236px] h-[35px] text-white text-[20px] font-raleway font-bold tracking-[4px] flex items-center justify-center ml-[170px] mt-5 hover:bg-[#061726] hover:border-[#99CEFD]"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
            <div className="md:hidden overflow-x-auto mt-10">
              <div className="grid grid-cols-2  justify-center gap-5 px-10 min-w-[800px] ">
                {projects.map((item, index) => (
                  <div key={index} className="bg-[#060C26] border-[#485789] border w-[312px] h-[396px] flex flex-col justify-center text-left px-5 gap-[6px] min-w-[312px]">
                    <img src={item.picture} alt={item.project} className="w-full h-auto" />
                    <p className="text-white font-radley text-[20px]">
                      <span style={{ fontStyle: 'italic' }}>Project: </span>
                      <span className="font-arial text-[20px]">{item.project}</span>
                    </p>
                    <p className="text-white font-radley text-[20px]">
                      <span style={{ fontStyle: 'italic' }}>Year: </span>
                      <span className="font-arial text-[20px]">{item.year}</span>
                    </p>
                    <p className="text-white font-radley text-[20px]">
                      <span style={{ fontStyle: 'italic' }}>Type: </span>
                      <span className="font-arial text-[20px]">{item.type}</span>
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="border border-[#0F3E68] rounded-xl w-[236px] h-[35px] text-white text-[20px] font-raleway font-bold tracking-[4px] flex items-center justify-center mt-5 hover:bg-[#061726] hover:border-[#99CEFD]"
                    >
                      View Project
                    </a>
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
