import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-38 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/nlsukhde/ai-summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="mas-md:hidden" />
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with this GPT-4 powered AI Summarizer. Paste any
        link from the web including the http tag, and get an easy readable
        summary. Works with articles or any website you want information on!
      </h2>
    </header>
  );
};

export default Hero;
