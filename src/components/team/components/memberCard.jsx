const ProfileCard = ({ imageUrl, name, title, linkedinUrl, emailUrl }) => {
  const HexagonIcon = ({ children, href }) => (
    <a href={href || "#"} target="_blank" rel="noopener noreferrer" className="group">
      <div className="w-20 h-20 flex items-center justify-center relative">
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            {/* Mathematically regular hexagon points */}
            <polygon 
              points="50 3, 93.3 28, 93.3 72, 50 97, 6.7 72, 6.7 28" 
              fill="rgba(39, 128, 186, 1)" 
            />
          </svg>
        </div>
        {children}
      </div>
    </a>
  );

  return (
    <div className="relative flex flex-col items-center pt-[10rem] pb-10 px-6 mt-48 mb-8 rounded-xl bg-gradient-to-b from-[rgba(20,18,52,1)] to-[rgba(20,18,52,0.4)] text-white shadow-md border-[1px] border-[rgba(39,128,186,1)] w-full max-w-xs mx-auto">
      
      {/* Main Image Hexagon */}
      <div className="absolute -top-[9rem] left-1/2 transform -translate-x-1/2 w-[90%] aspect-square">
        <img 
          src={imageUrl || "https://via.placeholder.com/600x600"} 
          alt={name} 
          className="w-full h-full object-top"
          style={{
            clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
          }}
        />
      </div>
      
      <div className="text-center mt-10 mb-4">
        <p className="text-yellow-400 text-2xl font-bold mb-1">{name || "Dr. Akshay Dvivedi"}</p>
        <p className="text-red-500 text-lg">{title || "Faculty Advisor"}</p>
      </div>
      
      {/* Social Icons */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-10">
        {linkedinUrl !== false && (
          <HexagonIcon href={linkedinUrl}>
            <span className="relative z-10 text-white font-bold text-2xl">in</span>
          </HexagonIcon>
        )}
        {emailUrl !== false && (
          <HexagonIcon href={emailUrl}>
            <svg className="relative z-10 w-10 h-10 " fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </HexagonIcon>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;