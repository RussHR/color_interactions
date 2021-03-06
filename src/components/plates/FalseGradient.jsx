import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick, times } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class FalseGradient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numBars: 40
        };
        this.changeNumBars = this.changeNumBars.bind(this);

        this.modalContents = (
                <p>
                    Note that the odd numbered bars are the only ones with a “true” gradient.
                    The bars in-between are of a solid color, but they sometimes appear to have a
                    gradient due to the influence of the gradient on both sides. This is particularly
                    evident when the gradient goes from black to white and the solid color is an
                    in-between gray.
                </p>
        );
    }

    changeNumBars({ currentTarget: { value: numBars } }) {
        this.setState({ numBars });
    }

    render() {
        const { color0, color1, color2 } = this.props.colors;
        const { numBars } = this.state;

        const bars = times(numBars, (i) => {
            let style;
            if (i % 2 == 0) {
                style = {
                    width: `${100 / numBars}%`,
                    background: `linear-gradient(rgb(${color0.r}, ${color0.g}, ${color0.b}),
                        rgb(${color1.r}, ${color1.g}, ${color1.b}))`
                };
            } else {
                style = { width: `${100 / numBars}%`, backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
            }
            return (
                <div key={i} style={style} />
            );
        });

        return (
            <div className="full-screen display-flex">
                <CornerMenu
                    colorLabels={['gradient color 1', 'gradient color 2', 'solid color']}
                    modalContents={this.modalContents}
                >
                    <label htmlFor="num-bars">number of bars: </label>
                    <input
                        id="num-bars"
                        type="number"
                        min="3"
                        max="500"
                        value={numBars}
                        onChange={this.changeNumBars}
                    />
                    <br />
                </CornerMenu>

                {bars}
            </div>
        );
    }
}

FalseGradient.propTypes = {
    colors: validatePropColors(3)
};

FalseGradient = connect(mapStateToProps)(FalseGradient);

export default FalseGradient;