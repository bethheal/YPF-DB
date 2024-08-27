import { DashboardCustomizeRounded } from "@mui/icons-material";
import { HomeIcon } from "lucide-react";

export const k ={
    NAVLINKS : [
        {
            icon:<DashboardCustomizeRounded/>,
            text:"home",
            pathLink:"/dashboard"
        },
        {
            icon:<HomeIcon/>,
            text:"addMember",
            pathLink:"dashboard/add-member"
        },
        {
            icon:<HomeIcon/>,
            text:"ViewMemeber",
            pathLink:"dashboard/members"
        },
        {
            icon:<HomeIcon/>,
            text:"dormant-members",
            pathLink:"/dashboard/dormant-members"
        },
        {
            icon:<HomeIcon/>,
            text:"profile",
            pathLink:"/dashboard/profile"
        },
        {
            icon:<HomeIcon/>,
            text:"settings",
            pathLink:"/dashboard/settings"
        },
       
        {
            icon:<HomeIcon/>,
            text:"Help",
            pathLink:"/dashboard/help"
        },
        
    ]
}