import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import HomeLink from '../HomeLink';
import Menu from '../Menu';

import './home.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let Home = ({ colors: { color0, color1, color2 } }) => {
    return (
        <div className="full-screen position-relative display-flex home">
            <Menu>
                hay
            </Menu>

            <HomeLink href="#a-color-has-many-faces" title="a color has many faces">
                <div className="homeLink__thumbnail display-flex">
                    <div
                        className="aColorHasManyFaces__outerBlock display-flex half-width full-height"
                        style={{ backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` }}
                    >
                        <div
                            className="aColorHasManyFaces__innerBlock"
                            style={{ backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` }}
                        />
                    </div>
                    <div
                        className="aColorHasManyFaces__outerBlock display-flex half-width full-height"
                        style={{ backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` }}
                    >
                        <div
                            className="aColorHasManyFaces__innerBlock"
                            style={{ backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` }}
                        />
                    </div>
                </div>
            </HomeLink>

            <HomeLink href="#lighter-and-or-darker" title="lighter and/or darker">
                <div
                    className="homeLink__thumbnail position-relative"
                    style={{ backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` }}
                >
                    <div
                        className="LighterAndOrDarker__leftBlock position-absolute"
                        style={{ backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` }}
                    />
                    <div
                        className="LighterAndOrDarker__rightBlock position-absolute"
                        style={{ backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` }}
                    />
                </div>
            </HomeLink>
        </div>
    );
};

Home = connect(mapStateToProps)(Home);

export default Home;