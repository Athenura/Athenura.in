import { useEffect, useState } from 'react';

const LeaveForm = () => {
  const [iframeHeight, setIframeHeight] = useState('900px'); // Desktop height

  useEffect(() => {
    const updateHeight = () => {
      // Check if it's mobile (typically width < 768px)
      if (window.innerWidth < 768) {
        setIframeHeight('1100px'); // Mobile height
      } else {
        setIframeHeight('1250px'); // Desktop height
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
        src="https://athenura-internship.vercel.app/leave/intern"
        className="w-full border-0"
        style={{ 
          height: iframeHeight,
          width: '100%'
        }}
        title="Athenura Leave Application"
        scrolling="no"
      />
    </div>
  );
};

export default LeaveForm;