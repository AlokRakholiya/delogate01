import React from "react";
import Herobanner from "./herobanner";
import Trusted from "./trusted";
import Hire from "./hire";
import Expertise from "./expertise";
import Cover from "./cover";
import Process from "./process";
export default function Home() {
    return (
        <div className="home">
            <Herobanner/>
            <Trusted/>
            <Hire/>
            <Expertise/>
            <Cover/>
            <Process/>
        </div>
    )
}