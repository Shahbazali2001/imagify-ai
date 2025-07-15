import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion as Motion } from "motion/react";
import AppContext from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingText(true);

    if (input) {
      const generatedImage = await generateImage(input);
      if (generatedImage) {
        setImage(generatedImage);
        setLoading(true);
        setLoadingText(false);
      } else {
        setLoading(false);
        setLoadingText(false);
      }
    }
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <Motion.div
        className="flex flex-col items-center mt-5"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <img src={image} className="max-w-sm rounded" alt="" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "transition-all w-full duration-[10s]" : "w-0"
            } `}
          ></span>
        </div>

        {loadingText && <p className="text-gray-600 mt-2">Loading...</p>}

        {!loading && (
          <div className="flex w-full max-w-xl bg-neutral-300 text-white rounded-full mt-10">
            <input
              type="text"
              placeholder="Enter your prompt"
              className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 text-gray-900"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-zinc-900 w-auto text-white px-10 py-3 sm:px-16 rounded-full"
            >
              Generate Image
            </button>
          </div>
        )}

        {loading && (
          <div className="flex gap-2 flex-wrap justify-center text-gray-600 text-sm p-0.5 mt-10 rounded-full">
            <p
              className="border border-gray-300 bg-zinc-900 text-white px-8 py-2 rounded-full cursor-pointer drop-shadow"
              onClick={() => setLoading(false)}
            >
              Generate Another
            </p>
            <a
              className="border border-gray-400 text-black px-8 py-2 rounded-full cursor-pointer drop-shadow"
              href={image}
              download="generated-image.jpg"
            >
              Download
            </a>
          </div>
        )}
      </Motion.div>
    </form>
  );
};

export default Result;
