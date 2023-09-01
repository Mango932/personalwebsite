import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import MainScreen from "./components/MainScreen";

function App() {
    return <MainScreen />;
}

export default App;
library.add(fab, fas, far);
