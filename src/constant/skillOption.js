const skillType = [
  "html",
  "css",
  "tailwind",
  "js",
  "react",
  "node",
  "mongodb",
  "firebase",
  "express",
  "mongoose",
  "typeScript",
  "redux",
  "nextjs",
  "docker",
  "graphql",
  "aws",
];

export const skillTypeOptions = skillType.map((item) => {
  return {
    value: item,
    label: item,
  };
});
