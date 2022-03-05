import React from "react";
import people2 from "../assets/people2.png"

export default function Hero2() {
    return (
        <>
            <div className="mainwrapper">
                <div>
                    <img src={people2} alt="people-illustration" />    
                </div>    
                <div>
                    <h2>second</h2>
                    <p>lorem lorem meow</p>
                </div>
            </div> 
        </>
    )
}