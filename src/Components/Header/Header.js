import { AppBar, Box, Toolbar } from "@mui/material";
import Humburger from "./Humburger";
import SearchForm from "./SearchForm";

const Header = () => {
    return (
        <Box component="div">
            <AppBar position="static">
                <Toolbar>
                    <Humburger />
                    <SearchForm />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
 
export default Header;