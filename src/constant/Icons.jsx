import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaAmazonPay,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiMongoose,
  SiTypescript,
  SiReduxsaga,
  SiNextdotjs,
  SiGraphql,
  SiPostman,
  SiPostgresql,
  SiPrisma,
  SiVuedotjs,
  SiVisualstudiocode,
  SiFigma,
  SiAngular,
  SiAntdesign,
  SiDaisyui,
  SiMui,
  SiReactrouter,
  SiNextui,
  SiReacthookform,
  SiJsonwebtokens,
  SiAxios,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";

export const icons = {
  // Frontend Skills
  html: <FaHtml5 className="w-25 h-25" />,
  css: <FaCss3Alt className="w-25 h-25" />,
  tailwind: <SiTailwindcss className="w-25 h-25" />,
  js: <FaJsSquare className="w-25 h-25" />,
  react: <FaReact className="w-25 h-25" />,
  vue: <SiVuedotjs className="w-25 h-25" />, // Vue.js
  angular: <SiAngular className="w-25 h-25" />, // Angular
  typeScript: <SiTypescript className="w-25 h-25" />,
  redux: <SiReduxsaga className="w-25 h-25" />,
  nextjs: <SiNextdotjs className="w-25 h-25" />,
  antd: <SiAntdesign className="w-25 h-25" />,
  daisyUI: <SiDaisyui className="w-25 h-25" />,
  MUI: <SiMui className="w-25 h-25" />,
  ReactRouter: <SiReactrouter className="w-25 h-25" />,
  aamarpay: <FaAmazonPay className="w-25 h-25" />,
  nextUI: <SiNextui className="w-25 h-25" />,
  framerMotion: <TbBrandFramerMotion className="w-25 h-25" />,
  reactHookForm: <SiReacthookform className="w-25 h-25" />,
  jwt: <SiJsonwebtokens className="w-25 h-25" />,

  // Backend Skills
  node: <FaNodeJs className="w-25 h-25" />,
  mongodb: <SiMongodb className="w-25 h-25" />,
  firebase: <SiFirebase className="w-25 h-25" />,
  express: <SiExpress className="w-25 h-25" />,
  mongoose: <SiMongoose className="w-25 h-25" />,
  graphql: <SiGraphql className="w-25 h-25" />,
  sql: <DiMysql className="w-25 h-25" />, // SQL (MySQL)
  postgresql: <SiPostgresql className="w-25 h-25" />, // PostgreSQL
  prisma: <SiPrisma className="w-25 h-25" />, // Prisma
  axios: <SiAxios className="w-25 h-25" />, // Prisma

  // Others (Tools)
  docker: <FaDocker className="w-25 h-25" />,
  aws: <FaAws className="w-25 h-25" />,
  github: <FaGithub className="w-25 h-25" />, // GitHub
  postman: <SiPostman className="w-25 h-25" />, // Postman
  mongodbCompass: <SiMongodb className="w-25 h-25" />, // MongoDB Compass (reusing MongoDB icon)
  vscode: <SiVisualstudiocode className="w-25 h-25" />, // VS Code
  figma: <SiFigma className="w-25 h-25" />, // Figma
};
