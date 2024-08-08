import React from "react";

function Header() {
    const greeting = () => {
        const time = new Date().getHours();
        if (time < 12) {
            return "Morning";
        } else if (time < 18) {
            return "Afternoon";
        } else {
            return "Evening";
        }
    }

    return (
        <header className="head--main flex p-5 items-center justify-between shadow-xl rounded-none border-gray-600 mb-4 pl-4 pr-4">
            <h1 className="colo text-white text-center text-7xl font-semibold">Memed</h1>
            <h3 className="greeting text-white text-2xl">Good {greeting && greeting()}</h3>
        </header>
    )
}

export default Header;