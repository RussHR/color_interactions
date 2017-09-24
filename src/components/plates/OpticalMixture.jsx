import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class OpticalMixture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stripeWidth: 3
        };

        this.setStripeWidth = this.setStripeWidth.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.handleKeydown);
    }

    /**
     * Maps keydowns to functions.
     * @returns {void}
     */
    handleKeydown({ keyCode }) {
        // if key is 'k' or up
        if (keyCode === 75 || keyCode === 38) {
            this.setState({ stripeWidth: Math.min(this.state.stripeWidth + 1, 30) });
        } else if (keyCode === 76 || keyCode === 40) {
            // if key is 'l' or down
            this.setState({ stripeWidth: Math.max(this.state.stripeWidth - 1, 1) });
        }
    }

    /**
     * Maps keydowns to functions.
     * @param {object} e - js event object whose currentTarget has a value for stripe width in px
     * @returns {void}
     */
    setStripeWidth({ currentTarget: { value: stripeWidth } }) {
        this.setState({ stripeWidth });
    }

    render() {
        const { colors } = this.props;
        const { color0, color1 } = colors;
        const { stripeWidth } = this.state;

        const style = {
            background: `repeating-linear-gradient(90deg,
                rgb(${color0.r},
                ${color0.g}, ${color0.b}),
                rgb(${color0.r}, ${color0.g},
                ${color0.b}) ${stripeWidth}px,
                rgb(${color1.r},
                ${color1.g},
                ${color1.b}) ${stripeWidth}px,
                rgb(${color1.r},
                ${color1.g},
                ${color1.b}) ${stripeWidth * 2}px )`
        };

        return (
            <div className="full-screen" style={style}>
                <CornerMenu colorLabels={['stripe color 1', 'stripe color 2']}>
                    <label htmlFor="stripe-width">stripe width: </label>
                    <input
                        id="stripe-width"
                        type="range"
                        min="1"
                        max="30"
                        value={stripeWidth}
                        onChange={this.setStripeWidth}
                    />
                    <br />
                </CornerMenu>
            </div>
        );
    }
}

OpticalMixture.propTypes = {
    colors: validatePropColors(2)
};

OpticalMixture = connect(mapStateToProps)(OpticalMixture);

export default OpticalMixture;