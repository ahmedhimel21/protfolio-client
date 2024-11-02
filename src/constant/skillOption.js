const skillType = [
  "html",
  "css",
  "tailwind",
  "js",
  "react",
  "vue",
  "angular",
  "typeScript",
  "redux",
  "nextjs",
  "node",
  "mongodb",
  "firebase",
  "express",
  "mongoose",
  "graphql",
  "sql",
  "postgresql",
  "prisma",
  "docker",
  "aws",
  "github",
  "postman",
  "mongodbCompass",
  "vscode",
  "figma",
];

export const skillTypeOptions = skillType.map((item) => {
  return {
    value: item,
    label: item,
  };
});
