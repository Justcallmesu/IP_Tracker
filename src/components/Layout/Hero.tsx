import {useMediaQuery} from "react-responsive"

// Resource
import DesktopPattern from "../../Assets/images/pattern-bg-desktop.png"
import MobilePattern from "../../Assets/images/pattern-bg-mobile.png"

export function Hero(){

    // Media Query
    const isDesktopOrLaptop = useMediaQuery({
        query:'(min-width:1224px)'
    })

    function GetImageResource(){
        if(isDesktopOrLaptop) return DesktopPattern
        else return MobilePattern
    }

    return(
        <>
            <img src={GetImageResource()} alt="Pattern" className="w-full lg:w-full absolute -z-10"/>
            <div className="w-full h-full max-h-64 overflow-hidden flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">IP Address Tracker</h1>
            </div>
        </>
    )
}