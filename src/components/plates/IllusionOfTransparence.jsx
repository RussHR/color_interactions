import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './illusion_of_transparence.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let TwoDifferentColorsLookAlike = ({ colors }) => {
    const { color0, color1, color2 } = colors;
    const leftBlockColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const rightBlockColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const innerBlockColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };

    return (
        <div className="full-screen">
            <CornerMenu
                colorLabels={['left color', 'right color', 'overlapping color']}
                enableColor2AsAverage={true}
            />
            <div className="half-width full-height display-inline-block position-relative">
                <div className="position-absolute IllusionOfTransparence__leftBlock" style={leftBlockColor}>
                    <div
                        className="position-absolute IllusionOfTransparence__leftInnerBlock"
                        style={innerBlockColor}
                    />
                </div>
            </div>
            <div className="half-width full-height display-inline-block position-relative">
                <div className="position-absolute IllusionOfTransparence__rightBlock" style={rightBlockColor} />
            </div>
        </div>
    );
};

TwoDifferentColorsLookAlike.propTypes = {
    colors: validatePropColors(3)
};

TwoDifferentColorsLookAlike = connect(mapStateToProps)(TwoDifferentColorsLookAlike);

export default TwoDifferentColorsLookAlike;