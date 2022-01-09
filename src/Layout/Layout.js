import { Grid } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({children}) => {
    return (
        <Grid container>
            <Grid item md="3">
                <Navbar />
            </Grid>
            <Grid item md="9">
                
            </Grid>
        </Grid>
    );
}
 
export default Layout;