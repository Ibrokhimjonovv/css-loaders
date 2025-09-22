import React, { useState } from "react";
import "./loaders.scss";
import YandexAd from "../../components/yandexAd/ad";
import { useParams } from "react-router-dom";
import loaders from "../../assets/loaders.json"


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
                        <div key={index} className={`loader-btn ${type === '3-D' ? "bg-3d" : ""}`}>
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
                    blockId="R-A-17245616-1"
                    renderTo="yandex_rtb_R-A-17245616-1"
                />
            </div>
        </div>
    );
};

export default Loaders;
