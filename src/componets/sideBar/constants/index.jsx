import { DashboardCustomizeRounded, HelpOutlineRounded, PersonAddAlt1, PersonOutlineRounded, SettingsSuggestRounded } from "@mui/icons-material";
import { HomeIcon, LogOut, View } from "lucide-react";
import { dormantMemeberIcon, viewMemberIcon } from "../../../assets";

export const k ={
    NAVLINKS : [
        {
            icon:<DashboardCustomizeRounded/>,
            text:"home",
            pathLink:"/dashboard"
        },
        {
            icon:<PersonAddAlt1/>,
            text:"addMember",
            pathLink:"/dashboard/add-member"
        },
        {
            icon: <img src={viewMemberIcon} alt="view memebr icon"  style={{ width: '24px', height: '24px' }} />,
            text:"View Memeber",
            pathLink:"/dashboard/members"
        },
        {
            icon: <img src={dormantMemeberIcon} alt="view memebr icon"  style={{ width: '24px', height: '24px' }} />,
            text:"dormant-members",
            pathLink:"/dashboard/dormant-members"
        },
        {
            icon:<PersonOutlineRounded/>,
            text:"profile",
            pathLink:"/dashboard/profile"
        },
        {
            icon:<SettingsSuggestRounded/>,
            text:"settings",
            pathLink:"/dashboard/settings"
        },
       
        {
            icon:<HelpOutlineRounded/>,
            text:"Help",
            pathLink:"/dashboard/help"
        },
        {
            icon:<LogOut/>,
            text:"Log Out",
            pathLink:"/login"
        },
        
    ]
}