import * as React from 'react';
import './BottomNavbar.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WhatsappContext from '../../contexts/WhatsappCart';
import LanguageContext from '../../contexts/LanguageSwitcher';
import arContent from '../../languages/arabic.json'
import heContent from '../../languages/hebrew.json'
import MiniCart from '../MiniCart/MiniCart';


export default function SimpleBottomNavigation() {
  const { memoizedValue } = React.useContext(WhatsappContext)
  const { language } = React.useContext(LanguageContext)
  const contentLng = language === 'He' ? heContent : arContent
  const { ownerPhone, wspMsgStart } = contentLng.whatsappDetails
  
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [prodcutAdded, setProdcutAdded] = React.useState(false);

  React.useEffect(() => {

    setProdcutAdded(true)

  }, [memoizedValue.productsInWspCart, prodcutAdded])

  const handleClick = (index) => {
    setSelectedIndex(index);
    switch (index) {
      case 'ig':
        window.location.href = "http://instagram.com/sweets_safaa/"
        break;
      case 'scrollup':
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 'wspcart':
        window.location.href = `https://api.whatsapp.com/send?phone=${ownerPhone}&text=${wspMsgStart} ${memoizedValue.productsInWspCart.map(product => product.name)}`
        break;
      default:
        break;
    }
  };

  const hoverColor = '#FFFC00'

  return (
    <Box>
      <BottomNavigation style={styles.stickToBottom}
        sx={{ boxShadow: 3 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction icon={<InstagramIcon style={{ color: selectedIndex === 'ig' ? hoverColor : 'white' }} />}
          onClick={() => handleClick('ig')} />
        <BottomNavigationAction icon={<ArrowUpwardIcon style={{ color: selectedIndex === 'scrollup' ? hoverColor : 'white' }} />}
          onClick={() => handleClick('scrollup')} />
        <BottomNavigationAction icon={<WhatsAppIcon style={{ color: selectedIndex === 'wspcart' ? hoverColor : 'white' }} />}
          onClick={() => handleClick('wspcart')} />
        {memoizedValue.productsInWspCart.length > 0 && <MiniCart/> }
        {memoizedValue.productsInWspCart.length > 0 &&
          <div className={`cart-counter ${prodcutAdded ? 'product-been-added' : ''}`}>
            {memoizedValue.productsInWspCart.length}</div>
        }
      </BottomNavigation>
    </Box>
  );
}

const styles = {
  stickToBottom: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#1E1E1E",
  },
};
