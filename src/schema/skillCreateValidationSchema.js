import { z } from "zod";

export const skillCreateValidationSchema = z.object({
  name: z.string({ required_error: "name field is required" }),
  title: z.string({ required_error: "title field is required" }),
  category: z.string({ required_error: "category field is required" }),
});
