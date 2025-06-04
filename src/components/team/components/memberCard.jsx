
const ProfileCard = ({ imageUrl, name, title, linkedinUrl, emailUrl }) => {
  return (
    <div className="relative flex flex-col items-center pt-20 pb-8 px-6 mt-16 mb-8 rounded-xl bg-gradient-to-b from-[rgba(20,18,52,1)] to-[rgba(20,18,52,0.4)] text-white shadow-md border-[1px] border-[rgba(39,128,186,1)]">
      {/* Hexagonal Image - positioned to overflow top */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <img 
          src={imageUrl || "https://via.placeholder.com/160x160"} 
          alt={name} 
          className="w-32 h-32 object-cover"
          style={{
            clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="text-center mt-4 mb-8">
        <p className="text-yellow-400 text-xl font-bold mb-1">{name || "Dr. Akshay Dvivedi"}</p>
        <p className="text-red-500 text-sm">{title || "Faculty Advisor"}</p>
      </div>
      
      {/* Icons - positioned to overflow bottom */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {(linkedinUrl !== false) && (
          <a 
            href={linkedinUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <div className="w-16 h-16 transition-colors duration-200 flex items-center justify-center relative">
              <div className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon 
                    points="50,5 85,25 85,75 50,95 15,75 15,25" 
                    fill="rgba(39, 128, 186, 1)"
                  />
                </svg>
              </div>
              <span className="relative z-10 text-white font-bold text-xl">in</span>
            </div>
          </a>
        )}
        {emailUrl && (
    <a 
      href={emailUrl??"Null"} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group"
    >
      <div className="w-16 h-16  transition-colors duration-200 flex items-center justify-center relative">
        <div className="absolute inset-0 transform rotate-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon 
              points="50,5 85,25 85,75 50,95 15,75 15,25" 
              fill="rgba(39, 128, 186, 1)"
            />
          </svg>
        </div>
        <svg 
          className="relative z-10 w-8 h-8 " 
          fill="none" 
          stroke="white"
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
      </div>
    </a>
  )}
      </div>
    </div>
  );
};

export default ProfileCard; 