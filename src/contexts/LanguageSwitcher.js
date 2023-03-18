import {createContext,useState} from 'react';

const LanguageContext = createContext();
export const LanguageProvider = ({children}) => {
  const [language,setLanguage] = useState('He');


  // change language
  const changeLang = (lang) => {
    setLanguage(lang)
  }
  

  return <LanguageContext.Provider value={{
    language,
    changeLang,

    }}>
{children}
    </LanguageContext.Provider>
}

export default LanguageContext