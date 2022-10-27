import React from "react";

const MainComponent = () => {
  return (
    <div className="main-container">
      <div className="main-image">
        <picture>
          <source
            media="(max-width: 320px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/common/ts4-project-sunrise-xl.jpg.adapt.320w.jpg"
          />
          <source
            media="(max-width: 767px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/common/ts4-project-sunrise-xl.jpg.adapt.768w.jpg"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/common/ts4-project-sunrise-xl.jpg.adapt.1024w.jpg"
          />
          <source
            media="(max-width: 1455px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/common/ts4-project-sunrise-xl.jpg.adapt.1456w.jpg"
          />
          <source
            media="(min-width: 1456px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/common/ts4-project-sunrise-xl.jpg.adapt.1920w.jpg"
          />
          <img
            style={{ width: "100%" }}
            src="https://media.contentapi.ea.com/content/dam/eacom/common/ts4-project-sunrise-xl.jpg.adapt.320w.jpg"
          />
        </picture>
        {/* <img src="https://media.contentapi.ea.com/content/dam/eacom/common/ts4-project-sunrise-xl.jpg.adapt.1456w.jpg" /> */}
      </div>
      <div className="content-over-main-image">
        <img
          src="https://media.contentapi.ea.com/content/dam/eacom/SIMS/images/2021/05/ts4-adaptive-logo-center-aligned-ts4-light-xl-7x2-lg-5x2-md-2x1.png.adapt.crop5x2.1455w.png"
          alt="sims4 texgt"
        />
        <h1>Create a unique world of Sims that’s an expression of you.</h1>
        <a>Play For Free Now</a>
      </div>
    </div>
  );
};

export default MainComponent;
