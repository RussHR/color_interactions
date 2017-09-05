import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './after_image.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class AfterImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            circleFilled: false
        };

        this.toggleCircleFilled = this.toggleCircleFilled.bind(this);
        this.toggleCircleFilledViaKeyboard = this.toggleCircleFilledViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleCircleFilledViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleCircleFilledViaKeyboard);
    }

    /**
     * Toggles the state of whether the inner shapes are touching.
     * @returns {void}
     */
    toggleCircleFilled() {
        this.setState({ circleFilled: !this.state.circleFilled });
    }

    /**
     * Toggles the state of whether the inner shapes are touching via keyboard.
     * @returns {void}
     */
    toggleCircleFilledViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleCircleFilled();
        }
    }

    render() {
        const { colors } = this.props;
        const { color0 } = colors;
        const circleColor = {};
        if (this.state.circleFilled) {
            circleColor.backgroundColor = `rgb(${color0.r}, ${color0.g}, ${color0.b})`;
        }

        return (
            <div className="full-screen display-flex justify-content-center align-items-center AfterImage">
                <CornerMenu colorLabels={['left background color', 'right background color']}>
                    <button onClick={this.toggleCircleFilled}>toggle circle fill (k)</button>
                    <br/>
                </CornerMenu>
                <div
                    className="AfterImage__circle display-flex justify-content-center align-items-center"
                    style={circleColor}
                >
                    <div className="AfterImage__centerDot" />
                </div>
            </div>
        );
    }
}

AfterImage.propTypes = {
    colors: validatePropColors(1)
};

AfterImage = connect(mapStateToProps)(AfterImage);

export default AfterImage;