import React from 'react';
import NavBar from "./navBar";
import LatestNews from "./lastestNews";

function Layout({children}) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
}

export default Layout;