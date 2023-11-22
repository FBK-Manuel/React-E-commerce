import { Outlet } from "react-router-dom";
import NavBar from "../navBar";
import { Provider } from "react-redux";
import store from "../Redux/store";
import RootMainLayer from "./RootMainLayer";



const RootLayOut = () => {
    return (
        <div>

            <Provider store={store}>
                <NavBar />
                <RootMainLayer />
                {/* the Outlet will help you display your component staticly with the help of RouterProvider */}
                <main><Outlet /></main>
            </Provider>
        </div>
    );
}

export default RootLayOut;