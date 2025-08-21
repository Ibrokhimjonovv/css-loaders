import React, { useState } from "react";
import "./classic.scss";

const loaders = [
    {
        id: 1,
        css: `

    /* HTML: <div class="loader"></div> */
.loader {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  animation: l1 1s linear infinite alternate;
}
.loader:before {
  content:"Loading..."
}
@keyframes l1 {to{opacity: 0}}

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

const Classic = () => {
    const [copiedId, setCopiedId] = useState(null);
    document.title = "The Classic CSS Loaders Collection";

    const handleCopy = (css, id) => {
        navigator.clipboard.writeText(css).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000); // 2 soniyadan keyin yozuv yo‘qoladi
        });
    };

    return (
        <div id="classic">
            <div className="top-line">
                <div className="left-text">
                    <h2>The Classic CSS Loaders Collection</h2>
                    <p className="lets-text">Let's animate the "loading..." text!</p>
                    <p className="code">
                        <code>&lt;div class="loader"&gt;&lt;/div&gt;</code>
                    </p>
                    <p className="click-text">Click the loader to copy the CSS</p>
                </div>

                <div className="right-text"></div>
            </div>

            <div className="bottom-line">
                {loaders.map((loader) => (
                    <button key={loader.id} className="loader-btn">
                        <button
                            className="copy-btn"
                        >
                            {copiedId === loader.id ? "Copied!" : "Copy the CSS"}
                        </button>
                        <div className="key">
                            <i>#</i>
                            {loader.id}
                        </div>
                        <div className={`classic-loader classic-l${loader.id}`}></div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Classic;
