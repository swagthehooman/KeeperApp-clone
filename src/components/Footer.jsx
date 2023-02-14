import React from "react";

function Footer() {
    const currDate = new Date().getFullYear();
    return <footer>
        <p>Copyright © {currDate}</p>
    </footer>
}

export default Footer;