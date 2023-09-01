import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppIcon = ({
    iconName,
    color = "white",
    bounce = false,
    styles = "fa-2x",
}) => (
    <FontAwesomeIcon
        icon={iconName}
        color={color}
        className={styles}
        bounce={bounce}
    />
);
export default AppIcon;
