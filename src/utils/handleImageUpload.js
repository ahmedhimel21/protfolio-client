import { toast } from "sonner";

const handleImageUpload = async (file) => {
  const secretKey = import.meta.env.VITE_IMGBB_KEY;

  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=${secretKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data?.data;
  } catch (err) {
    toast.error("Failed to upload image");
  }
};
export default handleImageUpload;
