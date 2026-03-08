import React, { useEffect, useRef, useState } from "react";

const BlogAd = () => {
  const adRef = useRef(null);
  const [showAd, setShowAd] = useState(false);

  // wait for page content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showAd && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log(e);
      }
    }
  }, [showAd]);

  if (!showAd) return null;

  return (
    <div style={{ margin: "30px 0" }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9163867372951144"
        data-ad-slot="6460797951"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default BlogAd;