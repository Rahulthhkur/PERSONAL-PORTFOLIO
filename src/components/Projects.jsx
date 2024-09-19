import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
          <div>
            <h2 className="title text-3xl md:text-5xl" data-aos="fade-down">
              {Projects.title}
            </h2>
            <h4 className="subtitle text-xl md:text-3xl mt-4" data-aos="fade-down">
              {Projects.subtitle}
            </h4>
            <br />
          </div>
          <div className="flex items-center lg:flex-row flex-col-reverse gap-5 lg:gap-10">
            <img
              src={Projects.image}
              alt="..."
              data-aos="fade-right"
              className="lg:max-w-[45vw] w-full max-w-xs h-auto"
            />
            <Swiper
              pagination={{
                clickable: true,
              }}
              data-aos="fade-left"
              spaceBetween={20}
              modules={[Pagination]}
              className="rounded-3xl pb-10 lg:max-w-md w-full max-w-sm drop-shadow-primary self-start"
            >
              {Projects.project_content.map((content, i) => (
                // Make each project window clickable
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                >
                  <a
                    href={content.link} // The project link from your data
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // For security reasons
                    className="no-underline"
                  >
                    <img src={content.image} alt="..." className="rounded-2xl" />
                    <div className="flex flex-col gap-1 mt-2">
                      <h5 className="font-bold font-Poppins">{content.title}</h5>
                      <button className="font-bold text-gray self-end">
                        Check it Now
                      </button>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
