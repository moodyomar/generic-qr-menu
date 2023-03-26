import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import flagAR from '../../languages/flags/Ar.svg';
import flagHE from '../../languages//flags/He.svg';
import heContent from "../../languages/content-hr.json"
import arContent from "../../languages/content-ar.json"
import LanguageContext from '../../contexts/LanguageSwitcher'


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElLang, setAnchorElLang] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState("He");
  const { language, changeLang } = React.useContext(LanguageContext);
  const contentLng = language === 'Ar' ? arContent : heContent
  const languages = ['Ar', 'He'];

  const handleOpenLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
  };
  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };
  const handleLanguageChange = (lng) => {
    // Add code to change the language here
    setSelectedLanguage(lng);
    changeLang(lng)
    handleCloseLangMenu();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleScroll = (e) => {
    console.log(e);
  }

  React.useEffect(() => {



  }, [])


  return (
    <AppBar position="fixed" sx={{ bgcolor: "#1E1E1E" }}>
      <Container>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {contentLng.categories.map((cat) => (
              <Button
                key={cat.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {cat.name}
              </Button>
            ))}
          </Box>
          {/* Burger Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              onScroll={handleScroll}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {contentLng.categories.map((cat) => (
                <MenuItem key={cat.name} onClick={handleCloseNavMenu}>
                  <a href={`#${cat.name}`} style={{ textDecoration: "none", color: "#1E1E1E" }}><Typography textAlign="center">{cat.name}</Typography></a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img src="logo.png" alt="QB Media" width={30}/>
          </Box>
          {/* Language Switcher */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Select language">
              <IconButton onClick={handleOpenLangMenu} sx={{ p: 0 }}>
                <img className='lng-symbol' src={selectedLanguage === 'He' ? flagHE : flagAR} alt={selectedLanguage} sx={{ height: '15px', marginRight: '10px' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
            >
              {languages.map((language) => (
                <MenuItem key={language} onClick={() => handleLanguageChange(language)}>
                  <img src={language === 'He' ? flagHE : flagAR} alt={selectedLanguage} style={{ filter: 'invert(1)'}} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;