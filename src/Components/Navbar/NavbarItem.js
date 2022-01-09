import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavbarItem = ({item}) => {

    const navigate = useNavigate()

    return (
        <ListItemButton onClick={()=>navigate(item.path)}>
            <ListItemIcon sx={{color:"rgb(238, 238, 238)"}}>
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
        </ListItemButton>
    );
}
 
export default NavbarItem;