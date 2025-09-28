import React, { useState, useEffect } from 'react';
import "./home.scss";
import PageLoader from '../../components/loaders/loaders';

const API_BASE = "https://impulsee.pythonanywhere.com/api"; // Django API manzilingiz

const Home = () => {
    const [copyText, setCopyText] = useState(false);
    const [randomLoader, setRandomLoader] = useState(null);
    const [loaders, setLoaders] = useState([]);
    const [loading, setLoading] = useState(true); // loading state

    // API'dan loaderlarni olish
    useEffect(() => {
        const fetchLoaders = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${API_BASE}/loaders/`);
                if (!res.ok) throw new Error("Failed to fetch loaders");
                const data = await res.json();
                setLoaders(data);

                // Random loader tanlash
                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    setRandomLoader(data[randomIndex]);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchLoaders();
    }, []);

    const handleCopy = () => {
        if (!randomLoader) return;
        navigator.clipboard.writeText(randomLoader.css).then(() => {
            setCopyText(true);
            setTimeout(() => setCopyText(false), 1500);
        });
    };

    if (loading) {
        return (
            <div id="home">
                <PageLoader />
            </div>
        );
    }

    return (
        <div id='home'>
            <h2>The Biggest Collection of Loading Animations</h2>
            <p>Over {loaders.length}+ CSS-only loaders made using a single element</p>

            <p>
                <code>&lt;div class="loader"&gt;&lt;/div&gt;</code>
            </p>

            <div className="random-css-loader">
                <p id='sss'>Don't know which loader to use? Here is one for you 👇</p>

                <div className={`random-loader-case ${randomLoader?.is_light ? "bg-3d" : ""}`}>
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
            </div>
        </div>
    )
};

export default Home;
