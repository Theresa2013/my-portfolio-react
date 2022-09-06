import React from "react";

function Navigation(props) {

    const {
        setContactSelected,
        setProjectSelected,
        setAboutSelected,
    } = props;

    return (
        <header>

            <nav>
                <h2>
                    <a data-testid='link' href="/my-portfolio-react">Theresa Butterfield</a>
                </h2>

                <ul className="flex-row">
                    <li>
                        <span onClick={() => { setAboutSelected(true); setContactSelected(false); setProjectSelected(false) }}>
                            About Me!
                        </span>
                    </li>
                    <li>
                        <span onClick={() => { setProjectSelected(true); setAboutSelected(false); setContactSelected(false) }}>
                            My Projects
                        </span>
                    </li>
                    <li>
                        <span onClick={() => { setContactSelected(true); setAboutSelected(false); setProjectSelected(false) }}>
                            Contact
                        </span>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Navigation;