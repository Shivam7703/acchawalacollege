import { FaRegCheckCircle, FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import {  MdOutlineChat, MdOutlinePendingActions } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const dashboard = {
  tabs: [
    {
      id: "1",
      label: "Your Profile",
      icon: <FaRegUserCircle />
      ,
    },
    {
      id: "2",
      label: "Applied Colleges",
      icon: <PiStudentBold />,
    },
    {
      id: "3",
      label: "Your Reviews",
      icon: <MdOutlineChat />
      ,
    },
    {
      id: "4",
      label: "Applied CAF",
      icon: <FaRegCheckCircle />
      ,
    },
    {
      id: "5",
      label: "Pending Applications",
      icon: <MdOutlinePendingActions />
      ,
    },
    {
      id: "6",
      label: "Account Settings",
      icon: <IoSettingsOutline />
      ,
    },
  ],
};
