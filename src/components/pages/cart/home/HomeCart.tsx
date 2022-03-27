import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import {Outlet} from "react-router-dom";
import StepperHeader from "../StepperHeader";
import {useLocation, useNavigate} from "react-router-dom";

function HomeCart() {    
    let {pathname} = useLocation();
    let navigate = useNavigate();
    let [numberStep, setNumberStep] = useState<number>(1);

    console.log("Ejecutando Outlet del cart");
    let component = pathname !== "/cart" ? <StepperHeader numberStep={numberStep - 1}/> : "";

    useEffect(() => {
        if(numberStep === 1 && pathname !== "/cart"){
            navigate("/cart");
        }
        //eslint-disable-next-line
    }, [numberStep, pathname])
	return (
		<Box>
            {/* ProgressBar */}
            {component}
			<Outlet context={{setNumberStep}}/>
		</Box>
	);
}

export default HomeCart