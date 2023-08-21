import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppIcon = ({
    iconName,
    color = "white",
    bounce = false,
    style = "fa-2x",
}) => (
    <FontAwesomeIcon
        icon={iconName}
        color={color}
        className={style}
        bounce={bounce}
    />
);
export default AppIcon;
