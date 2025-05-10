import { useState } from 'react';

const brFlag = '/images/brazil-flag-icon.svg';
const usFlag = '/images/united-states-flag-icon.svg';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className='flex items-center'>
      <button
        onClick={toggleLanguage}
        className='relative flex items-center gap-2 p-2 rounded-full cursor-pointer transition-all duration-300 w-28'
      >
        <div className='relative w-full h-8 bg-gray-600 rounded-full'>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-white backdrop-blur-lg transition-all duration-300 ${
              language === 'pt' ? 'left-0' : 'left-1/2'
            }`}
          />
        </div>
        <img
          src={language === 'pt' ? brFlag : usFlag}
          alt={language === 'pt' ? 'Português' : 'English'}
          className='w-8 h-8'
        />
      </button>
    </div>
  );
};

export default LanguageToggle;