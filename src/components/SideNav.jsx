import { EditIcon, SettingsIcon } from "@chakra-ui/icons";
import { Divider, Icon, List, ListIcon, ListItem } from "@chakra-ui/react";
import { GoHome,  } from "react-icons/go";

import { NavLink } from "react-router-dom";



export default function SideNav() {
  return (
    <>
      <List>
        <ListItem mb={"12px"} p={"4px"} textColor={"gray.900"}>
          <NavLink to="/feed">
            <ListIcon as={GoHome} mr={"16px"} size={"md"} />
            Home
          </NavLink>
        </ListItem>
        <ListItem mb={"12px"} p={"4px"} textColor={"gray.900"}>
          <NavLink to="/create">
            <ListIcon as={EditIcon} mr={"16px"} size={"md"} />
            Create
          </NavLink>
        </ListItem>
        <ListItem mb={"12px"} p={"4px"} textColor={"gray.900"}>
          <NavLink to="/profile">
            <ListIcon as={SettingsIcon} mr={"16px"} size={"md"} />
            Profile
          </NavLink>
        </ListItem>
      </List>
    </>
  ); 
}
