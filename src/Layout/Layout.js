import { Box } from "@mui/material";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({children}) => {

    const style = {
        display: "flex",
    }

    const styles = {
        bgcolor: 'rgb(35, 48, 68)', 
        color: 'primary.contrastText',
        height: "100vh",
        display: {
            xs: "none",
            md: "block"
        },
        minWidth: "260px"
    }

    return (
        <Box 
            component="div"
            sx={style}    
        >
            <Box sx={styles}>
                <Navbar />
            </Box>
            <Box sx={{flexGrow: 1}} >
                <Header />
            </Box>
        </Box>
    );
}
 
export default Layout;