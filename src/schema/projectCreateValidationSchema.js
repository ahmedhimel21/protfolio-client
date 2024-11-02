import { z } from "zod";

export const projectCreateValidationSchema = z.object({
  title: z.string({ required_error: "title field is required" }),
  description: z.string({ required_error: "description field is required" }),
  github: z.string({ required_error: "github link field is required" }),
  liveLink: z.string({ required_error: "live link field is required" }),
  category: z.string({ required_error: "category field is required" }),
  skills: z
    .array(z.string())
    .nonempty({ message: "At least one skill is required" }),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      // Max 5MB
      message: "File size must be less than 5MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(
          file.type
        ),
      {
        message: "Only JPEG, PNG, or GIF file types are allowed",
      }
    ),
});
