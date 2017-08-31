import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './a_color_has_many_faces.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class AColorHasManyFaces extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blocksTouching: false
        };

        this.toggleBlocksTouching = this.toggleBlocksTouching.bind(this);
        this.toggleInnerBlocksTouchingViaKeyboard = this.toggleInnerBlocksTouchingViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleInnerBlocksTouchingViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleInnerBlocksTouchingViaKeyboard);
    }

    toggleBlocksTouching() {
        this.setState({ blocksTouching: !this.state.blocksTouching });
    }

    /**
     * Toggles the state of whether the inner shapes are touching via keyboard.
     * @returns {void}
     */
    toggleInnerBlocksTouchingViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleBlocksTouching();
        }
    }

    render() {
        const { colors } = this.props;
        const { color0, color1, color2 } = colors;
        const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const innerPlateColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        const innerPlateClasses = classNames(
            'aColorHasManyFaces__innerBlock',
            'standard-transition',
            { 'aColorHasManyFaces__innerBlock--touching': this.state.blocksTouching }
        );

        return (
            <div className="full-screen display-flex overflow-hidden">
                <CornerMenu colorLabels={['left background color', 'right background color', 'inner color']}>
                    <button onClick={this.toggleBlocksTouching}>touch inner blocks (k)</button>
                    <br/>
                </CornerMenu>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={leftPlateColor}
                >
                    <div className={innerPlateClasses} style={innerPlateColor}></div>
                </div>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={rightPlateColor}
                >
                    <div className={innerPlateClasses} style={innerPlateColor}></div>
                </div>
            </div>
        );
    }
}

AColorHasManyFaces.propTypes = {
    colors: validatePropColors(3)
};

AColorHasManyFaces = connect(mapStateToProps)(AColorHasManyFaces);

export default AColorHasManyFaces;