import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
    switch (index) {
      case 0:
        window.location.href = "http://instagram.com/sweets_safaa/"
        break;
      case 1:
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 2:
        window.location.href = "https://wa.link/fmhf1i"
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
        <BottomNavigationAction icon={<InstagramIcon style={{ color: selectedIndex === 0 ? hoverColor : 'white' }} />} onClick={() => handleClick(0)} />
        <BottomNavigationAction icon={<ArrowUpwardIcon style={{ color: selectedIndex === 1 ? hoverColor : 'white' }} />} onClick={() => handleClick(1)} />
        <BottomNavigationAction icon={<WhatsAppIcon style={{ color: selectedIndex === 2 ? hoverColor : 'white' }} />} onClick={() => handleClick(2)} />
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
