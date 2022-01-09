import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';

export const NavbarLinks = [
    {
        title: "Pages",
        pages: [
            {
                icon: <DashboardIcon />,
                text: "Dashboard",
                path: "/dashboard",
            },
            {
                icon: <LayersIcon />,
                text: "Pages",
                dropdown:[
                    {
                        text: "Profile",
                        path: "/profile",
                    }, 
                    {
                        text: "Settings",
                        path: "/settings",
                    }, 
                ]
            },
        ]
    },
    {
        title: "Elements",
        pages: [
            {
                icon: <DashboardIcon />,
                text: "Charts",
                path: "/charts",
            },
            {
                icon: <LayersIcon />,
                text: "Components",
                dropdown:[
                    {
                        text: "Buttons",
                        path: "/buttons",
                    }, 
                    {
                        text: "Alert",
                        path: "/alert",
                    }, 
                ]
            },
        ]
    },
]