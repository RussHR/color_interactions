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
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleColorIsSubtractive);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleColorIsSubtractive);
    }

    /**
     * Toggles the state of whether to show additive or subtractive color.
     * @returns {void}
     */
    toggleColorIsSubtractive({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.setState({ colorIsSubtractive: !this.state.colorIsSubtractive });
        }
    }

    render() {
        const { colors } = this.props;
        const { color0 } = colors;

        return (
            <div className="full-screen display-grid AdditiveAndSubtractive">
                <CornerMenu colorLabels={['left background color', 'right background color']}>
                    <button onClick={this.toggleCircleFilled}>toggle subtractive/additive color (k)</button>
                    <br/>
                </CornerMenu>

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 2)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 2)} />
                <div style={positionAndStateToColor(color0, 3)} />
                <div style={positionAndStateToColor(color0, 2)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 2)} />
                <div style={positionAndStateToColor(color0, 3)} />
                <div style={positionAndStateToColor(color0, 4)} />
                <div style={positionAndStateToColor(color0, 3)} />
                <div style={positionAndStateToColor(color0, 2)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 0)} />

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 2)} />
                <div style={positionAndStateToColor(color0, 3)} />
                <div style={positionAndStateToColor(color0, 2)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 2)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 1)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />

                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
                <div style={positionAndStateToColor(color0, 0)} />
            </div>
        );
    }
}

AdditiveAndSubtractive.propTypes = {
    colors: validatePropColors(1)
};

AdditiveAndSubtractive = connect(mapStateToProps)(AdditiveAndSubtractive);

export default AdditiveAndSubtractive;

function positionAndStateToColor({ r, g, b }, numLayers) {
    const whiteLevel = 4 - numLayers;
    const newR = Math.min(255, r + whiteLevel * 15);
    const newG = Math.min(255, g + whiteLevel * 15);
    const newB = Math.min(255, b + whiteLevel * 15);
    return { backgroundColor: `rgb(${newR}, ${newG}, ${newB})` };
}