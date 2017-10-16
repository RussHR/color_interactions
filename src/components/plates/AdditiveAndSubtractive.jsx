import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './additive_and_subtractive.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class AdditiveAndSubtractive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorIsSubtractive: true
        };

        this.toggleColorIsSubtractive = this.toggleColorIsSubtractive.bind(this);
        this.toggleColorIsSubtractiveViaKeyboard = this.toggleColorIsSubtractiveViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleColorIsSubtractive);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleColorIsSubtractive);
    }

    /**
     * Toggles the state of whether to show additive or subtractive color via keyboard.
     * @returns {void}
     */
    toggleColorIsSubtractive() {
        this.setState({ colorIsSubtractive: !this.state.colorIsSubtractive });
    }

    /**
     * Toggles the state of whether to show additive or subtractive color via keyboard.
     * @returns {void}
     */
    toggleColorIsSubtractiveViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleColorIsSubtractive();
        }
    }

    positionAndStateToColor(numLayers) {
        const { colors: { color0: { r, g, b } } } = this.props;
        const whiteLevel = this.state.colorIsSubtractive ? 4 - numLayers : numLayers;
        const newR = Math.min(255, r + whiteLevel * 30);
        const newG = Math.min(255, g + whiteLevel * 30);
        const newB = Math.min(255, b + whiteLevel * 30);
        return { backgroundColor: `rgb(${newR}, ${newG}, ${newB})` };
    }

    render() {
        return (
            <div className="full-screen display-grid AdditiveAndSubtractive">
                <CornerMenu colorLabels={['base color']}>
                    <button onClick={this.toggleColorIsSubtractive}>toggle subtractive/additive color (k)</button>
                    <br/>
                </CornerMenu>

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(3)} />
                <div style={this.positionAndStateToColor(3)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(3)} />
                <div style={this.positionAndStateToColor(4)} />
                <div style={this.positionAndStateToColor(3)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(0)} />

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(3)} />
                <div style={this.positionAndStateToColor(3)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(0)} />

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(2)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(0)} />

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(1)} />
                <div style={this.positionAndStateToColor(0)} />

                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
                <div style={this.positionAndStateToColor(0)} />
            </div>
        );
    }
}

AdditiveAndSubtractive.propTypes = {
    colors: validatePropColors(1)
};

AdditiveAndSubtractive = connect(mapStateToProps)(AdditiveAndSubtractive);

export default AdditiveAndSubtractive;