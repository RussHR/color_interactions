import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './vibrating_boundaries.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

const modalContents = (
    <p>
        something
    </p>
);

let VibratingBoundaries = ({ colors: { color0, color1 } }) => {
    const colorLabels = ['background color', 'circle color'];

    const bgColorStyle = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };

    const borderStyle = { border: `7px solid rgb(${color1.r}, ${color1.g}, ${color1.b})` };

    return (
        <div className="full-screen position-relative" style={bgColorStyle}>
            <CornerMenu colorLabels={colorLabels} modalContents={modalContents} />

            <div className="VibratingBoundaries__circle00 circle position-absolute" style={borderStyle}>
                <div className="VibratingBoundaries__circle01 circle position-absolute" style={borderStyle}>
                    <div className="VibratingBoundaries__circle01 circle position-absolute" style={borderStyle} />
                </div>
            </div>

            <div className="VibratingBoundaries__circle10 circle position-absolute" style={borderStyle}>
                <div className="VibratingBoundaries__circle11 circle position-absolute" style={borderStyle}>
                    <div className="VibratingBoundaries__circle12 circle position-absolute" style={borderStyle}>
                        <div className="VibratingBoundaries__circle13 circle position-absolute" style={borderStyle}>
                            <div className="VibratingBoundaries__circle14 circle position-absolute" style={borderStyle}>
                                <div
                                    className="VibratingBoundaries__circle14 circle position-absolute"
                                    style={borderStyle}
                                >
                                    <div
                                        className="VibratingBoundaries__circle14 circle position-absolute"
                                        style={borderStyle}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="VibratingBoundaries__circle20 circle position-absolute" style={borderStyle}>
                <div className="VibratingBoundaries__circle21 circle position-absolute" style={borderStyle}>
                    <div className="VibratingBoundaries__circle22 circle position-absolute" style={borderStyle}>
                        <div className="VibratingBoundaries__circle22 circle position-absolute" style={borderStyle}>
                            <div
                                className="VibratingBoundaries__circle23 circle position-absolute"
                                style={borderStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

VibratingBoundaries.propTypes = {
    colors: validatePropColors(1)
};

VibratingBoundaries = connect(mapStateToProps)(VibratingBoundaries);

export default VibratingBoundaries;