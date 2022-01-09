import { List } from "@mui/material";
import { NavbarLinks } from "../../Data/NavbarLinks";
import NavbarItem from "./NavbarItem";
import NavbarItemDropdown from "./NavbarItemDropdown";

const NavbarList = () => {
    return (
        <>
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
        </>
    );
}
 
export default NavbarList;