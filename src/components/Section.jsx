import React from "react";

function Section() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "/image.png",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="main--app flex flex-col pl-7 pr-7 mt-4">
      <form className="grid grid-rows-2 grid-cols-2 gap-4 mt-8">
        <div className="grid">
          <label className="text-2xl">
            Top Text
            <input
              name="topText"
              value={meme.topText}
              onChange={handleChange}
              type="text"
              placeholder="Shut up"
              className="tex-inde border border-gray-300 p-2 rounded-lg w-full text-4xl "
            />
          </label>
        </div>
        <div>
          <label className="text-2xl">
            Bottom Text
            <input
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
              type="text"
              placeholder="And take my money"
              className="border border-gray-300 p-2 rounded-lg w-full text-4xl "
            />
          </label>
        </div>
        <button
         className="col-span-full font-sans rounded-lg bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white border-none cursor-pointer text-2xl"
         onClick={getMemeImage}
         >
          Get a new meme image 🖼
        </button>
      </form>

      <div className="meme">
      <img src={meme.randomImage} className="meme--image mt-8 w-full rounded-sm" />
                <h2 className="meme--text top mt-14 text-5xl">{meme.topText}</h2>
                <h2 className="meme--text bottom text-5xl">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Section;
