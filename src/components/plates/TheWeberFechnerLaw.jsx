import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './the_weber_fechner_law.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

const amountOfBlackAdded = 20;

const modalContents = (
    <p>
        This is an attempt to portray Josef Albers’s interpretation of the <a
        target="_blank" href="https://en.wikipedia.org/wiki/Weber%E2%80%93Fechner_law">
        Weber-Fechner Law</a>. In the left scale, black is being added to the top color
        in equal steps, i.e. the red, green, and blue values are each being decreased
        by {amountOfBlackAdded} for each step. In the right scale, this addition of black
        is happening exponentially; the first change has the RGB values decreased by 20,
        then 40, 80, and finally 160. The implication is that to produce a psychological
        effect of even progression in mixture, the physical progression must be
        exponential.
    </p>
);

let TheWeberFechnerLaw = ({ colors: { color0 } }) => {
    const colorLabels = ['base color'];

    const baseColorStyle = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };

    const blackAddedX1Style = {
        backgroundColor: `rgb(${Math.max(color0.r - amountOfBlackAdded, 0)},
            ${Math.max(color0.g - amountOfBlackAdded, 0)},
            ${Math.max(color0.b - amountOfBlackAdded, 0)})`
    };
    const blackAddedX2Style = {
        backgroundColor: `rgb(${Math.max(color0.r - amountOfBlackAdded * 2, 0)},
            ${Math.max(color0.g - amountOfBlackAdded * 2, 0)},
            ${Math.max(color0.b - amountOfBlackAdded * 2, 0)})`
    };
    const blackAddedX3Style = {
        backgroundColor: `rgb(${Math.max(color0.r - amountOfBlackAdded * 3, 0)},
            ${Math.max(color0.g - amountOfBlackAdded * 3, 0)},
            ${Math.max(color0.b - amountOfBlackAdded * 3, 0)})`
    };
    const blackAddedX4Style = {
        backgroundColor: `rgb(${Math.max(color0.r - amountOfBlackAdded * 4, 0)},
            ${Math.max(color0.g - amountOfBlackAdded * 4, 0)},
            ${Math.max(color0.b - amountOfBlackAdded * 4, 0)})`
    };
    const blackAddedX8Style = {
        backgroundColor: `rgb(${Math.max(color0.r - amountOfBlackAdded * 8, 0)},
            ${Math.max(color0.g - amountOfBlackAdded * 8, 0)},
            ${Math.max(color0.b - amountOfBlackAdded * 8, 0)})`
    };

    // left bar color styles; adds black multiplicatively
    // right bar color styles; adds black exponentially
    return (
        <div className="full-screen display-flex justify-content-space-evenly align-items-center">
            <CornerMenu colorLabels={colorLabels} modalContents={modalContents} />

            <div className="TheWeberFechnerLaw__bars">
                <div style={baseColorStyle} className="TheWeberFechnerLaw__bar" />
                <div style={blackAddedX1Style} className="TheWeberFechnerLaw__bar" />
                <div style={blackAddedX2Style} className="TheWeberFechnerLaw__bar" />
                <div style={blackAddedX3Style} className="TheWeberFechnerLaw__bar" />
                <div style={blackAddedX4Style} className="TheWeberFechnerLaw__bar" />
            </div>

            <div className="TheWeberFechnerLaw__bars">
                <div style={baseColorStyle} className="TheWeberFechnerLaw__bar" />
                <div style={blackAddedX1Style} className="TheWeberFechnerLaw__bar" />
                <div style={blackAddedX2Style} className="TheWeberFechnerLaw__bar" />
                <div style={blackAddedX4Style} className="TheWeberFechnerLaw__bar" />
                <div style={blackAddedX8Style} className="TheWeberFechnerLaw__bar" />
            </div>
        </div>
    );
};

TheWeberFechnerLaw.propTypes = {
    colors: validatePropColors(1)
};

TheWeberFechnerLaw = connect(mapStateToProps)(TheWeberFechnerLaw);

export default TheWeberFechnerLaw;