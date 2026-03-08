const OneMonthFeedback = () => {
  return (
    <div className="w-full min-h-screen">
      <iframe
        src="https://athenura-feedback-form.vercel.app/feedback"
        className="w-full border-0 responsive-feedback-iframe"
        title="Athenura Feedback Form"
      />

      <style>{`
        .responsive-feedback-iframe {
          width: 100%;
          height: 800px; /* Desktop */
          overflow-y: auto;
        }

        @media (max-width: 767px) {
          .responsive-feedback-iframe {
            height: 600px; /* Mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default OneMonthFeedback;