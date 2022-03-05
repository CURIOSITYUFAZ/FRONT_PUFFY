import React from "react";

export default function Header() {
    return (
        <div>
            <div>logo</div>
            <input type="button" onClick="parent.location={App.js}" id="btn1" value="btn1">

            </input>
            <input type="button" onClick="parent.location={App.js}" id="btn2" value="btn2">

            </input>
            <input type="button" onClick="parent.location={App.js}" id="signup" value="Sign Up">

            </input>
            <input type="button" onClick="parent.location={App.js}" id="login" value="Log In">

            </input>
        </div>
        )
}