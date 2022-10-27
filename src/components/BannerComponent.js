import React from "react";

const BannerComponent = () => {
  return (
    <>
      <div className="banner-container">
        {/* <img
          src="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop5x2.1455w.jpg"
          alt="Ad banner"
        /> */}
        <picture>
          <source
            media="(max-width: 320px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop3x5.320w.jpg"
          />
          <source
            media="(max-width: 767px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop3x5.767w.jpg"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop2x1.1023w.jpg"
          />
          <source
            media="(max-width: 1455px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop5x2.1455w.jpg"
          />
          <source
            media="(min-width: 1456px)"
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"
          />
          <img
            style={{ width: "100%" }}
            src="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop3x5.320w.jpg"
            alt="banner"
          />
        </picture>
        <div className="banner-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="101"
            viewBox="0 0 240 101"
          >
            <path
              fill="#FF4747"
              fillRule="evenodd"
              d="M94.84828,8.76968 L94.84828,61.49768 L105.24348,61.49768 L105.24348,42.28928 L118.04948,42.28928 C128.36828,42.28928 136.05148,35.13448 136.05148,25.41728 C136.05148,15.77488 128.66948,8.76968 118.42588,8.76968 L94.84828,8.76968 Z M117.29668,33.40208 L105.24348,33.40208 L105.24348,18.03528 L117.29668,18.03528 C122.26748,18.03528 125.73268,21.19888 125.73268,25.71888 C125.73268,30.23808 122.26748,33.40208 117.29668,33.40208 L117.29668,33.40208 Z M150.51348,5.75768 L140.94788,8.76968 L140.94788,61.49768 L150.51348,61.49768 L150.51348,5.75768 Z M173.78788,62.02568 C178.45908,62.02568 182.67748,60.29328 185.84108,57.35448 L185.84108,61.49768 L195.40668,61.49768 L195.40668,23.91128 L185.84108,23.91128 L185.84108,28.05288 C182.82748,25.04048 178.68388,23.30808 174.16588,23.30808 C164.37388,23.30808 155.48428,31.44288 155.48428,42.66608 C155.48428,53.88928 164.22228,62.02568 173.78788,62.02568 L173.78788,62.02568 Z M175.44588,53.43768 C169.64668,53.43768 164.97508,48.99328 164.97508,42.66608 C164.97508,36.33888 169.64668,31.89448 175.44588,31.89448 C181.32108,31.89448 185.91588,36.33888 185.91588,42.66608 C185.91588,48.99328 181.32108,53.43768 175.44588,53.43768 L175.44588,53.43768 Z M239.99988,23.91128 L229.98148,23.91128 L219.28428,46.05608 L208.36268,23.91128 L197.66708,23.91128 L213.78668,56.75168 L203.01508,78.14528 L213.41028,78.14528 L239.99988,23.91128 Z M54.90148,45.86888 L51.83028,40.96608 L42.86348,40.96608 L45.93948,36.05448 L48.77228,36.05448 L45.34828,30.58728 L35.79628,45.86888 L10.31268,45.86888 L16.44828,36.05448 L11.94308,36.05448 L15.00588,31.14328 L34.70428,31.14328 L31.63988,36.05448 L22.24468,36.05448 L19.17348,40.96608 L33.07148,40.96608 L45.34828,21.31808 L60.69108,45.86888 L54.90148,45.86888 Z M21.14388,21.31808 L41.34988,21.31808 L38.27868,26.23168 L18.07468,26.23168 L21.14388,21.31808 Z M35.14788,8e-05 C15.73708,8e-05 -0.00012,15.73808 -0.00012,35.15008 C-0.00012,54.56648 15.73708,70.29768 35.14788,70.29768 C54.55828,70.29768 70.29788,54.56648 70.29788,35.15008 C70.29788,15.73808 54.55828,8e-05 35.14788,8e-05 L35.14788,8e-05 Z"
            />
          </svg>
          <p>
            Don’t just get the game. Get more from your game. Unlock exclusive
            rewards, members-only content, and a library of top titles.
          </p>
          <div className="ea-btn-container">
            <a className="ea-btn">Join Now</a>
          </div>
        </div>
        <div className="content-below-banner">
          <img
            src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-section-bg-esrb-parents-blue-xl.jpg.adapt.1920w.jpg"
            alt="text-below banner"
          />
        </div>
        <div className="video-game-control">
          <h2>Parents: Video game control is in your hands.</h2>
          <a href="#" className="ea-btn">
            Learn More
          </a>
        </div>
      </div>
      {/* <div className="content-below-banner">
        <img
          src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-section-bg-esrb-parents-blue-xl.jpg.adapt.1920w.jpg"
          alt="text-below banner"
        />
      </div>
      <div className="video-game-control">
        <h2>Parents: Video game control is in your hands.</h2>
        <a className="ea-btn">Learn More</a>
      </div> */}
    </>
  );
};

export default BannerComponent;
