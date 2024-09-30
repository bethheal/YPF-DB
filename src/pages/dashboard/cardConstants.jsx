import { HelpOutlineRounded, PersonAddAlt1, PersonOutlineRounded, SettingsSuggestRounded } from "@mui/icons-material";
import { dormantMemeberIcon, viewMemberIcon } from "../../assets";
import { LogOut } from "lucide-react";

export const c = {
    CARDS : [
        {
            cardIcon : <PersonAddAlt1/>,
            name : "ADD MEMEBER ",
            pathLink:"/dashboard/add-member"
        },
        {
            cardIcon: <img src={viewMemberIcon} alt="view memebr icon"  style={{ width: '24px', height: '24px' }} />,
            name : "VIEW MEMEBERS ",
            pathLink:"/dashboard/members"
        },
        {
            cardIcon: <img src={dormantMemeberIcon} alt="view memebr icon"  style={{ width: '24px', height: '24px' }} />,
            name : "DORMANT MEMEBERS ",
            pathLink:"/dashboard/dormant-members"
        },
        {
            cardIcon: <img src={dormantMemeberIcon} alt="view memebr icon"  style={{ width: '24px', height: '24px' }} />,
            name : "ATTENDANCE ",
            pathLink:"/dashboard/attendance"
        },
        {
            cardIcon : <PersonOutlineRounded/>,
            name : "PROFILE  ",
            pathLink:"/dashboard/profile"
        },
        {
            cardIcon : <SettingsSuggestRounded/>,
            name : "SETTINGS ",
            pathLink:"/dashboard/settings"
        },
        {
            cardIcon:<HelpOutlineRounded/>,
            name:"Help",
            pathLink:"/dashboard/help"
        },
        {
            cardIcon : <LogOut/>,
            name : "LOG OUT  ",
            pathLink:"/login"
        },
       
    ]
}