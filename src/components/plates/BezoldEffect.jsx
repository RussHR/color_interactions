import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assign, pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';
import classNames from 'classnames';

import './bezold_effect.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class BezoldEffect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customMortarColors: false,
            blocksTouching: false
        };

        this.toggleCustomMortarColors = this.toggleCustomMortarColors.bind(this);
        this.toggleBlocksTouching = this.toggleBlocksTouching.bind(this);
        this.toggleBlocksTouchingViaKeyboard = this.toggleBlocksTouchingViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleBlocksTouchingViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleBlocksTouchingViaKeyboard);
    }

    /**
     * Toggles the state of whether mortar colors are set by user.
     * @returns {void}
     */
    toggleCustomMortarColors() {
        this.setState({ customMortarColors: !this.state.customMortarColors });
    }

    /**
     * Toggles the state of whether mortar colors are set by user.
     * @returns {void}
     */
    toggleBlocksTouchingViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleBlocksTouching();
        }
    }

    /**
     * Toggle whether the blocks are touching.
     * @returns {void}
     */
    toggleBlocksTouching() {
        this.setState({ blocksTouching: !this.state.blocksTouching });
    }

    render() {
        const { colors } = this.props;
        const { color0, color1, color2 } = colors;
        const { customMortarColors, blocksTouching } = this.state;

        const colorLabels = customMortarColors
            ? ['brick color', 'mortar color 1', 'mortar color 2']
            : ['brick color'];

        const commonStyle = {
            backgroundImage:
                `linear-gradient(335deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 23px, transparent 23px),
                    linear-gradient(155deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 23px, transparent 23px),
                    linear-gradient(335deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 23px, transparent 23px),
                    linear-gradient(155deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 23px, transparent 23px),

                    linear-gradient(335deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 10px, transparent 10px),
                    linear-gradient(155deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 10px, transparent 10px),
                    linear-gradient(335deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 10px, transparent 10px),
                    linear-gradient(155deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 10px, transparent 10px)`
        };

        const leftBlockStyle = assign({
            backgroundColor: customMortarColors ? `rgb(${color1.r}, ${color1.g}, ${color1.b})` : 'white'
        }, commonStyle);

        const rightBlockStyle = assign({
            backgroundColor: customMortarColors ? `rgb(${color2.r}, ${color2.g}, ${color2.b})` : 'black'
        }, commonStyle);

        const brickClassNames = classNames('BezoldEffect__bricks', 'standard-transition', {
            'BezoldEffect__bricks--touching': blocksTouching
        });

        return (
            <div className="full-screen display-flex justify-content-space-evenly align-items-center">
                <CornerMenu colorLabels={colorLabels}>
                    <label htmlFor="custom-mortar-colors">custom mortar colors: </label>
                    <input
                        id="custom-mortar-colors"
                        type="checkbox"
                        onChange={this.toggleCustomMortarColors}
                        checked={customMortarColors}
                    />
                    <br />
                    <button onClick={this.toggleBlocksTouching}>touch blocks (k)</button>
                    <br/>
                </CornerMenu>
                <div className={brickClassNames} style={leftBlockStyle} />
                <div className={brickClassNames} style={rightBlockStyle} />
            </div>
        );
    }
}

BezoldEffect.propTypes = {
    colors: validatePropColors(3)
};

BezoldEffect = connect(mapStateToProps)(BezoldEffect);

export default BezoldEffect;