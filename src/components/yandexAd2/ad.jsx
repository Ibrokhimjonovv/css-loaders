'use client';
import React, { useEffect } from 'react';

const YandexFullscreenAd1 = ({ blockId, platform = "desktop" }) => {
  useEffect(() => {
    if (window.yaContextCb) {
      window.yaContextCb.push(() => {
        window.Ya.Context.AdvManager.render({
          blockId,
          type: "fullscreen",
          platform,
        });
      });
    }
  }, [blockId, platform]);

  return <div id={`yandex_rtb_${blockId}`} />;
};

export default YandexFullscreenAd1;
