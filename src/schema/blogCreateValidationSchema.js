import { z } from "zod";

export const blogCreateValidationSchema = z.object({
  title: z.string({ required_error: "title field is required" }),
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
