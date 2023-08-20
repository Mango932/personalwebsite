import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppIcon = ({ iconName, size = "fa-2x", color = "white" }) => (
    <FontAwesomeIcon icon={iconName} color={color} className={size} />
);
export default AppIcon;
