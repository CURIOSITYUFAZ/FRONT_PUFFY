import React from "react";
import illustration1 from '../assets/people.png';

export default function Hero() {
    return (
        <div className="mainwrapper">
            <div>
                <h2>Fsirt</h2>
                <p>lorem lorem lrem lorem lorem </p>
            </div>
            <div><img src={illustration1} alt="illustration" /></div>
        </div>
    )
}