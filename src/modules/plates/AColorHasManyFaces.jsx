import React, { Component } from 'react';

import './a_color_has_many_faces.scss';

export default class AColorHasManyFaces extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { color1, color2, color3 } = this.props;
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
    color1: '#b4d455',
    color2: 'aliceblue',
    color3: 'brown'
};