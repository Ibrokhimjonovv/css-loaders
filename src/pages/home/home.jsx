import React, { useState, useEffect } from 'react';
import "./home.scss";
import YandexAd from '../../components/yandexAd/ad';
import loaders from "../../assets/loaders.json";

const Home = () => {
    const [copyText, setCopyText] = useState(false);
    const [randomLoader, setRandomLoader] = useState(null);

    // Sahifa ochilganda random loader tanlanadi
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * loaders.length);
        setRandomLoader(loaders[randomIndex]);
    }, []);

    const handleCopy = () => {
        if (!randomLoader) return;
        navigator.clipboard.writeText(randomLoader.css).then(() => {
            setCopyText(true);
            setTimeout(() => setCopyText(false), 1500);
        });
    };

    return (
        <div id='home'>
            <h2>The Biggest Collection of Loading Animations</h2>
            <p>Over {loaders.length}+ CSS-only loaders made using a single element</p>

            <p>
                <code>&lt;div class="loader"&gt;&lt;/div&gt;</code>
            </p>

            <div className="random-css-loader">
                <p id='sss'>Don't know which loader to use? Here is one for you 👇</p>

                <div className="random-loader-case">
                    <button className="random-copy-btn" onClick={handleCopy}>
                        {copyText ? "Copied!" : "Copy the CSS"}
                    </button>

                    {/* Loader preview */}
                    {randomLoader && (
                        <>
                            <style>{randomLoader.css}</style>
                            <div className={` ${randomLoader.css.match(/\.([a-zA-Z0-9-_]+)/)[1]}`}></div>
                        </>
                    )}
                </div>
            </div>

            <div className="ad1-block">
                <YandexAd blockId="R-A-17245616-2" renderTo="yandex_rtb_R-A-17245616-2"/>
            </div>
        </div>
    )
};

export default Home;
