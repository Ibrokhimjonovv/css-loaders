import React, { useState, useEffect } from "react";
import "./loaders.scss";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/not-found";
import PageLoader from "../../components/loaders/loaders";

const API_BASE = "https://impulsee.pythonanywhere.com/api"; // Django API manzilingiz

const Loaders = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [loaders, setLoaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { type } = useParams();

  useEffect(() => {
    const fetchLoaders = async () => {
      try {
        const res = await fetch(`${API_BASE}/loaders/?search=${type}`);
        if (!res.ok) throw new Error("Failed to fetch loaders");

        const data = await res.json();
        const filtered = data.filter((l) => l.id === type);
        setLoaders(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLoaders();
  }, [type]);

  // SEO + meta teglar
  useEffect(() => {
    if (!loaders.length) return;

    const title = `The ${type.charAt(0).toUpperCase() + type.slice(1)} CSS Loaders Collection`;
    const description = `Discover the best ${type} CSS loaders collection for web projects. Copy CSS and animate your loading text.`;
    document.title = title;

    const setMetaTag = (selector, attr, value) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (attr === 'name') tag.setAttribute('name', value.name);
        if (attr === 'property') tag.setAttribute('property', value.name);
        document.head.appendChild(tag);
      }
      tag.content = value.content;
    };

    // description
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content = description;

    // OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = window.location.href;

    // Twitter card
    let twCard = document.querySelector('meta[name="twitter:card"]');
    if (!twCard) {
      twCard = document.createElement('meta');
      twCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twCard);
    }
    twCard.content = "summary_large_image";

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

  }, [loaders, type]);

  if (loading) return <PageLoader />;
  if (error) return <p>Error: {error}</p>;
  if (loaders.length === 0) return <NotFound />;

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
          <p className="lets-text">Let's animate the {type.charAt(0).toUpperCase() + type.slice(1)} Loaders </p>
          <p className="code">
            <code>&lt;div class="loader"&gt;&lt;/div&gt;</code>
          </p>
          <p className="click-text">Click the loader to copy the CSS</p>
        </div>
      </div>

      <div className="bottom-line">
        {loaders.map((loader, index) => {
          const uniqueClass = `loader-${type}-${loader.pk}`;
          return (
            <div key={index} className={`loader-btn ${loader.is_light ? "bg-3d" : ""}`}>
              <style>{loader.css}</style>
              <button className="copy-btn" onClick={() => handleCopy(loader.css, uniqueClass)}>
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
      </div>
    </div>
  );
};

export default Loaders;
