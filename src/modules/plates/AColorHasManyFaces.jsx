import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './a_color_has_many_faces.scss';

export default class AColorHasManyFaces extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const [ color1, color2, color3 ] = this.props.colors;
        const leftPlateColor = { backgroundColor: color1 };
        const rightPlateColor = { backgroundColor: color2 };
        const innerPlateColor = { backgroundColor: color3 };

        return (
            <div className="plate display-flex">
                <div className="aColorHasManyFaces__outerBlock display-flex" style={leftPlateColor}>
                    <div className="aColorHasManyFaces__innerBlock" style={innerPlateColor}></div>
                </div>
                <div className="aColorHasManyFaces__outerBlock display-flex" style={rightPlateColor}>
                    <div className="aColorHasManyFaces__innerBlock" style={innerPlateColor}></div>
                </div>
            </div>
        );
    }
}

AColorHasManyFaces.defaultProps = {
    colors: ['#b4d455', 'aliceblue', 'brown']
};
AColorHasManyFaces.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string)
};