import { Image } from "@chakra-ui/react";
import React from "react";

const PlusIcon =({yPosition,xPosition,addClass})=>{
    return(
        <span className={`absolute flex items-center justify-center ${yPosition} ${xPosition} transform ${addClass}`}>
            <Image className="w-3 h-3 object-contain" src='images/landing-page/star.svg' alt='star' />
        </span>
    )
}
export default PlusIcon;