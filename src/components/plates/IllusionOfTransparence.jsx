import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './illusion_of_transparence.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class IllusionOfTransparence extends Component {
    render() {
        const { color0, color1 } = this.props.colors;
        const leftBlockStyle = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightBlockStyle = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const overlappingPartColor = {
            r: Math.round((color0.r * 0.5) + color1.r * 0.5),
            g: Math.round((color0.g * 0.5) + color1.g * 0.5),
            b: Math.round((color0.b * 0.5) + color1.b * 0.5)
        };
        const overlappingPartStyle = {
            backgroundColor: `rgb(${overlappingPartColor.r}, ${overlappingPartColor.g}, ${overlappingPartColor.b})`
        };

        return (
            <div className="full-screen">
                <CornerMenu colorLabels={['left color', 'right color', 'overlapping color']} />
                <div className="half-width full-height display-inline-block position-relative">
                    <div className="position-absolute IllusionOfTransparence__leftBlock" style={leftBlockStyle}>
                        <div
                            className="position-absolute IllusionOfTransparence__leftInnerBlock"
                            style={overlappingPartStyle}
                        />
                    </div>
                </div>
                <div className="half-width full-height display-inline-block position-relative">
                    <div className="position-absolute IllusionOfTransparence__rightBlock" style={rightBlockStyle} />
                </div>
            </div>
        );
    }
}

IllusionOfTransparence.propTypes = {
    colors: validatePropColors(3)
};

IllusionOfTransparence = connect(mapStateToProps)(IllusionOfTransparence);

export default IllusionOfTransparence;