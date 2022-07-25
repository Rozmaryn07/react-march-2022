
import {Navigate, Route, Routes} from "react-router-dom";
// import CarForm from "./components/CarForm/CarForm";
// import Cars from "./components/Cars/Cars";

import MainLayout from "./Layout/MainLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CarsPage from "./pages/CarsPage";

const App = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'login'}/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>

            </Route>
        </Routes>

        // <div>
        //     <CarForm/>
        //     <hr/>
        //     <Cars/>
        // </div>
    );
};

export  {App};