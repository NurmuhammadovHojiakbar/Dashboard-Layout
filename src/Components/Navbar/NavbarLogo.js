import { Box, Typography } from "@mui/material";

const NavbarLogo = () => {

    const styles ={
        py: 2,
        px: 3,
    }

    return (
        <Box
            component="div"
            sx={styles}
        >
            <Typography variant="h4">
                Site Logo
            </Typography>
        </Box>
    );
}
 
export default NavbarLogo;