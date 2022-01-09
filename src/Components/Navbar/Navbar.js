import Box from "@mui/material/Box";
import NavbarList from "./NavbarList";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {

    const styles = {
        bgcolor: 'rgb(35, 48, 68)', 
        color: 'primary.contrastText',
        height: "100vh",
    }

    return (
        <Box 
            component="div"
            sx={styles}
        >
            <NavbarLogo />
            <NavbarList />
        </Box>
    );
}
 
export default Navbar;