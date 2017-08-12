import React from 'react';
import HomeLink from '../HomeLink';
import Menu from '../Menu';

import './home.scss';

export default function Home() {
    return (
        <div className="full-screen position-relative display-flex home">
            <Menu>
                hay
            </Menu>
            <HomeLink href="#a-color-has-many-faces" title="a color has many faces">
                <div className="homeLink__thumbnail">
                    <div className="half-width full-height display-inline-block">
                    </div>
                    <div className="half-width full-height display-inline-block">
                    </div>
                </div>
            </HomeLink>
            <HomeLink href="#lighter-and-or-darker" title="lighter and/or darker">
                <div className="homeLink__thumbnail">
                    <div className="half-width full-height display-inline-block">
                    </div>
                    <div className="half-width full-height display-inline-block">
                    </div>
                </div>
            </HomeLink>
        </div>
    );
}