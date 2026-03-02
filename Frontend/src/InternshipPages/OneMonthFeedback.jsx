const OneMonthFeedback = () => {
  return (
    <div className="w-full min-h-screen overflow-auto">
      <iframe
        src="https://athenura-feedback-form.vercel.app/feedback"
        className="w-full border-0 responsive-feedback-iframe"
        style={{ 
          width: '100%'
        }}
        title="Athenura Feedback Form"
        scrolling="no"
      />
      
      <style>{`
        .responsive-feedback-iframe {
          height: 1500px; /* Desktop default - adjust as needed */
        }
        
        @media (max-width: 767px) {
          .responsive-feedback-iframe {
            height: 1225px; /* Mobile - adjust as needed */
          }
        }
      `}</style>
    </div>
  );
};

export default OneMonthFeedback;