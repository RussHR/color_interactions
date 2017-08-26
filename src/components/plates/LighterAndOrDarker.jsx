import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './lighter_and_or_darker.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class LighterAndOrDarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squaresApart: false
        };

        this.toggleTouchingSquares = this.toggleTouchingSquares.bind(this);
        this.toggleTouchingSquaresViaKeyboard = this.toggleTouchingSquaresViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleTouchingSquaresViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleTouchingSquaresViaKeyboard);
    }

    /**
     * Toggles the state of whether the squares are touching.
     * @returns {void}
     */
    toggleTouchingSquares() {
        this.setState({ squaresApart: !this.state.squaresApart });
    }

    /**
     * Toggles the state of whether the squares are touching via keyboard.
     * @returns {void}
     */
    toggleTouchingSquaresViaKeyboard({ keyCode }) {
        // if key is 's'
        if (keyCode === 83) {
            this.setState({ squaresApart: !this.state.squaresApart });
        }
    }

    render() {
        const { color0, color1, color2 } = this.props.colors;
        const { squaresApart } = this.state;
        const leftBlockColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightBlockColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const rightBlockClasses = classNames(
            'LighterAndOrDarker__rightBlock',
            'position-absolute',
            { 'LighterAndOrDarker__rightBlock--apart': squaresApart }
        );
        const bgColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };

        return (
            <div className="full-screen position-relative" style={bgColor}>
                <CornerMenu colorLabels={['left block color', 'right block color', 'background color']}>
                    <button onClick={this.toggleTouchingSquares}>separate squares (S)</button>
                    <br/>
                </CornerMenu>
                <div className="LighterAndOrDarker__leftBlock position-absolute" style={leftBlockColor} />
                <div className={rightBlockClasses} style={rightBlockColor} />
            </div>
        );
    }
}

LighterAndOrDarker.propTypes = {
    colors: validatePropColors(3)
};

LighterAndOrDarker = connect(mapStateToProps)(LighterAndOrDarker);

export default LighterAndOrDarker;