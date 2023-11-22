import { Outlet } from "react-router-dom";
import NavBarCrolls from "../frontOutLayers/NavBarMain";
import store from "../Redux/store";
import { Provider } from "react-redux";

const RootMainLayer = () => {
    return (
        <div>
            <Provider store={store}>
                <NavBarCrolls />
                <main><Outlet /></main>
            </Provider>
        </div>
    );
}

export default RootMainLayer;