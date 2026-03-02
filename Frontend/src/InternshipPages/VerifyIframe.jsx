const VerifyForm = () => {
  return (
    <div className="w-full min-h-screen overflow-auto">
      <iframe
        src="https://athenura-internship.vercel.app/verify/intern"
        className="w-full border-0 responsive-verify-iframe"
        style={{ 
          width: '100%'
        }}
        title="Athenura Intern Verification"
        scrolling="no"
      />
      
      <style>{`
        .responsive-verify-iframe {
          height: 1800px; /* Desktop default */
        }
        
        @media (max-width: 767px) {
          .responsive-verify-iframe {
            height: 1100px; /* Mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default VerifyForm;