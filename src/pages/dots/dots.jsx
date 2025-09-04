import React, { useState } from "react";
import "./dots.scss";
import YandexAd from "../../components/yandexAd/ad";

const loaders = [
    {
        id: 1,
        css: `

    /* HTML: <div class="loader"></div> */
.loader {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;
}
@keyframes l1 {to{clip-path: inset(0 -34% 0 0)}}

    `,
    },
    {
        id: 2,
        css: `
    
        
    
        /* HTML: <div class="loader"></div> */
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
  animation: l2 2s linear infinite;
}
.loader:before {
  content:"Loading..."
}
@keyframes l2 {to{background-size: 100% 3px}}
    
    `,
    },
];

const Dots = () => {
    const [copiedId, setCopiedId] = useState(null);
    document.title = "The Dots CSS Loaders Collection";

    const handleCopy = (css, id) => {
        navigator.clipboard.writeText(css).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };

    return (
        <div id="dots">
            <div className="top-line">
                <div className="left-text">
                    <h2>The Dots CSS Loaders Collection</h2>
                    <p className="lets-text">A lot of dots moving around!</p>
                    <p className="code">
                        <code>&lt;div class="loader"&gt;&lt;/div&gt;</code>
                    </p>
                    <p className="click-text">Click the loader to copy the CSS</p>
                </div>

                <div className="right-text"></div>
            </div>

            <div className="bottom-line">
                {loaders.map((loader) => (
                    <button key={loader.id} className="loader-btn" onClick={() => handleCopy(loader.css, loader.id)}>
                        <button
                            className="copy-btn"
                        >
                            {copiedId === loader.id ? "Copied!" : "Copy the CSS"}
                        </button>
                        <div className="key">
                            <i>#</i>
                            {loader.id}
                        </div>
                        <div className={`dots-loader dots-l${loader.id}`}></div>
                    </button>
                ))}
            </div>

            <div className="ad1-block">
                <YandexAd blockId="R-A-17095066-4" 
  renderTo="yandex_rtb_R-A-17095066-4" />
            </div>
        </div>
    );
};

export default Dots;
