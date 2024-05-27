const Banner = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage:
          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A0AE3FFD4A2C9699105C3884BBC5FA9BECD7C8BCDE6B23013800896FF2966405/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
