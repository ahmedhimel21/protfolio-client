import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { FaHtml5 } from "react-icons/fa";

import { useState } from "react";
import { useGetSkillsQuery } from "../redux/features/skills/skillEndpoints";
import { icons } from "../constant/Icons";

export const Skills = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { data } = useGetSkillsQuery(undefined);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Following are some of the skills I have acquired after working
                for a long time.
              </p>
              {data?.data.length && (
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  {data?.data?.map((skill, index) => {
                    return (
                      <div className="item" key={index}>
                        {icons[skill.name] || <FaHtml5 className="w-25 h-25" />}
                        <h5>{skill?.title}</h5>
                      </div>
                    );
                  })}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
