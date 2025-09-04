import React, { useState } from "react";
import "./loaders.scss";
import YandexAd from "../../components/yandexAd/ad";
import { useParams } from "react-router-dom";
import loaders from "../../assets/loaders.json"

// const loaders = [
//     {
//         id: "classic",
//         css: `
//     .loader-classic-0 {
//       font-weight: bold;
//       font-family: sans-serif;
//       font-size: 30px;
//       animation: l1 1s linear infinite alternate;
//     }
//     .loader-classic-0:before {
//       content:"Loading..."
//     }
//     @keyframes l1 {to{opacity: 0}}
//     `,
//     },
//     {
//         id: "classic",
//         css: `
//     .loader-classic-1 {
//       width: fit-content;
//       font-weight: bold;
//       font-family: sans-serif;
//       font-size: 30px;
//       padding-bottom: 8px;
//       background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
//       animation: l2 2s linear infinite;
//     }
//     .loader-classic-1:before {
//       content:"Loading..."
//     }
//     @keyframes l2 {to{background-size: 100% 3px}}
//     `,
//     },
//     {
//         id: "dots",
//         css: `
//     .loader-dots-0 {
//       width: 60px;
//       aspect-ratio: 4;
//       background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space;
//       clip-path: inset(0 100% 0 0);
//       animation: l3 1s steps(4) infinite;
//     }
//     @keyframes l3 {to{clip-path: inset(0 -34% 0 0)}}
//     `,
//     },
//     {
//         id: "dots",
//         css: `
//     .loader-dots-1 {
//         width: 60px;
//         aspect-ratio: 4;
//         background: radial-gradient(circle closest-side, #000 90%, #0000) 0 /
//           calc(100% / 3) 100% no-repeat;
//         animation: l2 1s steps(3) infinite;
//       }
//       @keyframes l2 {
//         to {
//           background-position: 150%;
//         }
//       }
//     `,
//     },
//     {
//         id: "bars",
//         css: `
// .loader-bars-0 {
//   width: 45px;
//   aspect-ratio: 1;
//   --c: no-repeat linear-gradient(#000 0 0);
//   background: 
//     var(--c) 0%   50%,
//     var(--c) 50%  50%,
//     var(--c) 100% 50%;
//   background-size: 20% 100%;
//   animation: l1 1s infinite linear;
// }
// @keyframes l1 {
//   0%  {background-size: 20% 100%,20% 100%,20% 100%}
//   33% {background-size: 20% 10% ,20% 100%,20% 100%}
//   50% {background-size: 20% 100%,20% 10% ,20% 100%}
//   66% {background-size: 20% 100%,20% 100%,20% 10% }
//   100%{background-size: 20% 100%,20% 100%,20% 100%}
// }
//         `
//     }
// ];

const Loaders = () => {
    const [copiedId, setCopiedId] = useState(null);
    const { type } = useParams();
    const filteredLoaders = loaders.filter((l) => l.id === type);

    document.title = `The ${type.charAt(0).toUpperCase() + type.slice(1)}
 CSS Loaders Collection`;

    const handleCopy = (css, id) => {
        navigator.clipboard.writeText(css).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };

    return (
        <div id="classic">
            <div className="top-line">
                <div className="left-text">
                    <h2>The {type.charAt(0).toUpperCase() + type.slice(1)} CSS Loaders Collection</h2>
                    <p className="lets-text">Let's animate the "loading..." text!</p>
                    <p className="code">
                        <code>&lt;div class="loader"&gt;&lt;/div&gt;</code>
                    </p>
                    <p className="click-text">Click the loader to copy the CSS</p>
                </div>
                <div className="right-text"></div>
            </div>

            <div className="bottom-line">
                {filteredLoaders.map((loader, index) => {
                    const uniqueClass = `loader-${type}-${index}`;
                    return (
                        <div key={index} className="loader-btn">
                            <style>{loader.css}</style>

                            <button
                                className="copy-btn"
                                onClick={() => handleCopy(loader.css, uniqueClass)}
                            >
                                {copiedId === uniqueClass ? "Copied!" : "Copy the CSS"}
                            </button>

                            <div className="key">
                                <i>#</i>
                                {index + 1}
                            </div>

                            <div className={uniqueClass}></div>
                        </div>
                    );
                })}
            </div>

            <div className="ad1-block">
                <YandexAd
                    blockId="R-A-17095066-3"
                    renderTo="yandex_rtb_R-A-17095066-3"
                />
            </div>
        </div>
    );
};

export default Loaders;
