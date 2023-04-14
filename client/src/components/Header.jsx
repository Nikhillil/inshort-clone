import { Box, AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
  background: #fff;
  height: 70px;
  position: relative;
`;

const MenuIcon = styled(Menu)`
color : #000;
`

const Image = styled('img')({
    height: 60,
    margin: "auto",
    paddingRight: 70,
})

const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

  return (
    <Box>
      <StyledHeader>
        <Toolbar>
            <MenuIcon/>
            <Image src={url} alt="logo" />
        </Toolbar>
      </StyledHeader>
    </Box>
  );
};

export default Header;
