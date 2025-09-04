import React, { useState } from 'react';
import "./home.scss";
import YandexAd1 from '../../components/yandexAd/ad';

const Home = () => {
    const [copyText, setCopyText] = useState(false);
    const handleCopy = () => {
        const cssCode = `
/* HTML: <div class="loader"></div> */
.loader,
.loader:before,
.loader:after{
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  position: relative;
  animation: l6 1.5s infinite 0.5s;
}
.loader:before,
.loader:after{
  content: "";
  position: absolute;
  left: calc(100% + 5px);
  animation-delay: 1s;
}
.loader:after{
  left: -40px;
  animation-delay: 0s;
}
@keyframes l6 {
  0%,55%,100%  {border-radius:0  }
  20%,30%      {border-radius:50%}
}`;

        navigator.clipboard.writeText(cssCode).then(() => {
            setCopyText(true);
            setTimeout(() => {
                setCopyText(false);
            }, 1500);
        })
    };

    return (
        <div id='home'>
            <h2>The Biggest Collection of Loading Animations</h2>
            <p>
                Over 600+ CSS-only loaders made using a single element
            </p>

            <p>
                <code>
                    &lt;div class="loader"&gt;&lt;/div&gt;
                </code>
            </p>

            <div className="random-css-loader">
                Don't know which loader to use?
                Here is one for you 👇

                <div className="random-loader-case">
                    <button className="random-copy-btn" onClick={handleCopy}>
                        {
                            copyText ? "Copied!" : 'Copy the CSS'
                        }
                    </button>
                    <div className="random-loader-home loader"></div>
                </div>
            </div>
            <div className="ad1-block">
                <YandexAd1 />
            </div>
        </div>
    )
}

export default Home;
