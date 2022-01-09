import { Box, List } from "@mui/material";
import { NavbarLinks } from "../../Data/NavbarLinks";
import NavbarItem from "./NavbarItem";
import NavbarItemDropdown from "./NavbarItemDropdown";

const NavbarList = () => {

    const styles = {
        py: 2,
        px: 3,
    }

    return (
        <Box
            component="div"
            sx={styles}
        >
            {
                NavbarLinks.map(list =>(
                    <List subheader={list.title}>
                        {
                            list.pages.map(page=>{
                                return page.dropdown? 
                                    <NavbarItemDropdown item={page} /> 
                                        : 
                                    <NavbarItem item={page} />
                            })
                        }
                    </List>
                ))
            }
        </Box>
    );
}
 
export default NavbarList;