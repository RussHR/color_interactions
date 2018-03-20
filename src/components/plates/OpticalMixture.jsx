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
            squareSize: 3
        };

        this.setSquareSize = this.setSquareSize.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);

        this.modalContents = (
            <p>
                Much like looking at <a
                href="https://www.google.com/culturalinstitute/beta/asset/a-sunday-on-la-grande-jatte/twGyqq52R-lYpA"
                target="_blank">a Seurat painting</a> or even your very computer screen, colors can
                blend optically once they are small enough without having to literally be
                combined with each other. When the squares are large, it’s very easy to notice the
                two different colors, but at their smallest, it’s difficult not to see a
                mixture of the two colors. Checkerboard pattern was adopted from here: <a target="_blank"
                href="https://stackoverflow.com/questions/35361986/css-gradient-checkerboard-pattern">
                https://stackoverflow.com/questions/35361986/css-gradient-checkerboard-pattern</a>
            </p>
        );
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
            this.setState({ squareSize: Math.min(this.state.squareSize + 1, 30) });
        } else if (keyCode === 76 || keyCode === 40) {
            // if key is 'l' or down
            this.setState({ squareSize: Math.max(this.state.squareSize - 1, 1) });
        }
    }

    /**
     * Maps keydowns to functions.
     * @param {object} e - js event object whose currentTarget has a value for stripe width in px
     * @returns {void}
     */
    setSquareSize({ currentTarget: { value: squareSize } }) {
        this.setState({ squareSize });
    }

    render() {
        const { colors } = this.props;
        const { color0, color1 } = colors;
        const { squareSize } = this.state;

        const bgColor1 = `rgb(${color1.r}, ${color1.g}, ${color1.b})`;
        const style = {
            backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})`,
            backgroundImage:
                `linear-gradient(45deg, ${bgColor1} 25%, transparent 25%),
                linear-gradient(-45deg, ${bgColor1} 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, ${bgColor1} 75%),
                linear-gradient(-45deg, transparent 75%, ${bgColor1} 75%)`,
            backgroundSize: `${squareSize * 2}px ${squareSize * 2}px`,
            backgroundPosition: `0 0, 0 ${squareSize}px, ${squareSize}px -${squareSize}px, -${squareSize}px 0px`
        };

        return (
            <div className="full-screen" style={style}>
                <CornerMenu colorLabels={['color 1', 'color 2']} modalContents={this.modalContents}>
                    <label htmlFor="stripe-width">stripe width: </label>
                    <input
                        id="stripe-width"
                        type="range"
                        min="3"
                        max="30"
                        value={squareSize}
                        onChange={this.setSquareSize}
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