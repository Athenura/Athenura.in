import React, { useEffect, useRef, useState } from "react";

const BlogAd = () => {
  const adRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setLoaded(true);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div style={{ display: loaded ? "block" : "none", margin: "30px 0" }}>
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