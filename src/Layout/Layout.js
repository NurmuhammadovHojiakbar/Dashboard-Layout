import { Grid } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({children}) => {
    return (
        <Grid container>
            <Grid item md="4">
                <Navbar />
            </Grid>
            <Grid item md="8">
                
            </Grid>
        </Grid>
    );
}
 
export default Layout;