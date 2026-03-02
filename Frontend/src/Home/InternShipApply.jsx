import { useEffect, useState } from 'react';

const ApplyInternship = () => {
  const [iframeHeight, setIframeHeight] = useState('2500px');

  useEffect(() => {
    const updateHeight = () => {
      // Check if it's mobile (typically width < 768px)
      if (window.innerWidth < 768) {
        setIframeHeight('2800px'); // Mobile height
      } else {
        setIframeHeight('2300px'); // Desktop height
      }
    };

    // Set initial height
    updateHeight();

    // Update height on window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-auto">
      <iframe
        src="https://athenura-internship.vercel.app/apply"
        className="w-full border-0"
        style={{ 
          height: iframeHeight,
          width: '100%'
        }}
        title="Athenura Internship Form"
        scrolling="no"
      />
    </div>
  );
};

export default ApplyInternship;