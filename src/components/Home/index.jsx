import React from 'react';
import { connect } from 'react-redux';
import { pick, times } from 'lodash';
import HomeLink from '../HomeLink';
import Menu from '../Menu';

import './home.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let Home = ({ colors: { color0, color1, color2 } }) => {
    const gradientBars = times(5, (i) => {
        let style;
        if (i % 2 == 0) {
            style = { width: '20%', background: `linear-gradient(rgb(${color0.r}, ${color0.g}, ${color0.b}), rgb(${color1.r}, ${color1.g}, ${color1.b}))`};
        } else {
            style = { width: '20%', backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        }
        return (
            <div key={i} style={style} />
        );
    });

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
                        className="LighterAndOrDarker__leftBlock position-absolute LighterAndOrDarker__block--thumbnail"
                        style={{ backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` }}
                    />
                    <div
                        className="LighterAndOrDarker__rightBlock position-absolute LighterAndOrDarker__block--thumbnail"
                        style={{ backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` }}
                    />
                </div>
            </HomeLink>

            <HomeLink href="#gradient" title="gradient">
                <div className="homeLink__thumbnail display-flex">
                    {gradientBars}
                </div>
            </HomeLink>
        </div>
    );
};

Home = connect(mapStateToProps)(Home);

export default Home;