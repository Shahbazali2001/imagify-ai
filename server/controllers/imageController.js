import axios from "axios";
import "dotenv/config";
import FormData from "form-data";
import userModel from "../models/userModel.js";

export const generateImage = async (req, res) => {
  try {
    const {  prompt } = req.body;
    const userId = req.userId;
    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.status(400).json({
        success: false,
        message: "Missing details",
      });
    }

    if (user.creditBalance === 0 || user.creditBalance < 0) {
      return res.status(400).json({
        success: false,
        message: "Not enough credits",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

  const {data} = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
      headers: {
        "x-api-key": process.env.CLIPDROP_API,
      },
      responseType : "arraybuffer"
    });


    const base64Image = Buffer.from(data, "binary").toString("base64");

    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(userId, { creditBalance: user.creditBalance - 1 });

    res.status(200).json({
      success: true,
      message: "Image generated successfully",
      creditBalance: user.creditBalance,
      image: resultImage,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
