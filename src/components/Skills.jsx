import colorSharp from "../assets/img/color-sharp.png";
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

import { useState } from "react";
import { useGetSkillsQuery } from "../redux/features/skills/skillEndpoints";
import { icons } from "../constant/Icons";
import "../styles/SkillSection.css";
import { SiMongodb, SiPostman, SiTypescript } from "react-icons/si";

export const Skills = () => {
  const { data } = useGetSkillsQuery(undefined);
  console.log(data);

  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2>Skills</h2>
              <p>
                Following are some of the skills I have acquired after working
                for a long time.
              </p>
            </div>

            <div className="container skill-section">
              {/* Frontend Development Section */}
              <div className="row">
                <h3 className="section-title">Frontend Development</h3>
                {data &&
                  data?.data
                    .filter((skill) => skill.category === "FRONTEND")
                    .map((skill) => (
                      <div className="col-md-3 col-6 mb-4" key={skill.id}>
                        <div className="skill-card frontend">
                          {icons[skill.name] || (
                            <FaHtml5 className="w-25 h-25" />
                          )}
                          <div className="skill-name">{skill.name}</div>
                        </div>
                      </div>
                    ))}
              </div>

              {/* Backend Development Section */}
              <div className="row">
                <h3 className="section-title">Backend Development</h3>
                {data &&
                  data?.data
                    .filter((skill) => skill.category === "BACKEND")
                    .map((skill) => (
                      <div className="col-md-3 col-6 mb-4" key={skill.id}>
                        <div className="skill-card backend">
                          {icons[skill.name] || (
                            <FaNodeJs className="w-25 h-25" />
                          )}
                          <div className="skill-name">{skill.name}</div>
                        </div>
                      </div>
                    ))}
              </div>

              {/* Others Section */}
              <div className="row">
                <h3 className="section-title">Others</h3>
                {data &&
                  data?.data
                    .filter((skill) => skill.category === "OTHERS")
                    .map((skill) => (
                      <div className="col-md-3 col-6 mb-4" key={skill._id}>
                        <div className="skill-card others">
                          {icons[skill.name] || (
                            <FaHtml5 className="skill-icon" />
                          )}
                          <div className="skill-name">{skill.name}</div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Decorative Background"
      />
    </section>
  );
};
