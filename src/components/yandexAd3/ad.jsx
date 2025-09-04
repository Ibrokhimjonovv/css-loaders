'use client';
import React, { useEffect } from 'react';

const YandexAd3 = ({ blockId, type, platform, renderTo }) => {
  useEffect(() => {
    if (window.yaContextCb) {
      window.yaContextCb.push(() => {
        const config = { blockId };

        if (type) config.type = type;
        if (platform) config.platform = platform;
        if (renderTo) {
          config.renderTo = renderTo;
        } else {
          config.renderTo = `yandex_rtb_${blockId}`;
        }

        window.Ya.Context.AdvManager.render(config);
      });
    }
  }, [blockId, type, platform, renderTo]);

  return <div id={renderTo || `yandex_rtb_${blockId}`} />;
};

export default YandexAd3;