import React from "react";
import PlusIcon from "./plus-icon";
import { Divider } from "@chakra-ui/react";

const SectionDivider =({classStyle})=>{
    return(
        <div className={`relative ${classStyle}`}>
            <PlusIcon yPosition={`top-[50%]`} xPosition={'-left-6px'} addClass={'translate-y-[-50%]'} />
            <PlusIcon yPosition={`top-[50%]`} xPosition={'-right-6px'} addClass={'translate-y-[-50%]'} />
            <Divider borderColor={'rgb(255 255 255 / 0.1)'} className="border-white/10" />
        </div>
    )
}
export default SectionDivider;