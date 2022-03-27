import {useEffect} from "react";

const useScrollToTop = () => {
    useEffect(() => {
        // let root = document.querySelector("#root");
        // (root as HTMLDivElement).scrollIntoView(true); 
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])
}

export default useScrollToTop