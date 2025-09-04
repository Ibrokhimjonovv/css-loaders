'use client';
import React, { useEffect } from 'react';

const YandexAd1 = ({ blockId }) => {
  useEffect(() => {
    if (window.yaContextCb) {
      window.yaContextCb.push(() => {
        window.Ya.Context.AdvManager.render({
          blockId,
          renderTo: `yandex_rtb_${blockId}`,
        });
      });
    }
  }, [blockId]);

  return <div id={`yandex_rtb_${blockId}`} />;
};

export default YandexAd1;
