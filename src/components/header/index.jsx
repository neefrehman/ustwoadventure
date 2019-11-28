import React from "react";
import { styled } from "linaria/react";

import OrbitLogo from "./orbit-logo";
import Nav from "./nav";

const Header = () => {
    const StyledHeader = styled.header`
        margin: 0 0 170px 0;
        grid-column: 1 / -1;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `;

    return (
        <StyledHeader>
            <OrbitLogo />
            <Nav />
        </StyledHeader>
    );
};

export default Header;