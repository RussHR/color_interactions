import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './a_color_has_many_faces.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let AColorHasManyFaces = ({ colors }) => {
    const { color0, color1, color2 } = colors;
    const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const innerPlateColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };

    return (
        <div className="full-screen display-flex">
            <CornerMenu colorLabels={['left background color', 'right background color', 'inner color']} />
            <div
                className="justify-content-center align-items-center display-flex half-width full-height"
                style={leftPlateColor}
            >
                <div className="aColorHasManyFaces__innerBlock" style={innerPlateColor}></div>
            </div>
            <div
                className="justify-content-center align-items-center display-flex half-width full-height"
                style={rightPlateColor}
            >
                <div className="aColorHasManyFaces__innerBlock" style={innerPlateColor}></div>
            </div>
        </div>
    );
};

AColorHasManyFaces.propTypes = {
    colors: validatePropColors(3)
};

AColorHasManyFaces = connect(mapStateToProps)(AColorHasManyFaces);

export default AColorHasManyFaces;