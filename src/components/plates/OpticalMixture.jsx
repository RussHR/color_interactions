import React, { Component } from 'react';
import { connect } from 'react-redux';
import { merge, pick, times } from 'lodash';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './optical_mixture.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class OpticalMixture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numCirclesInRow: 3,
            circlesInCircles: false
        };

        this.changeNumCircles = this.changeNumCircles.bind(this);
        this.toggleCirclesInCircles = this.toggleCirclesInCircles.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.handleKeydown);
    }

    toggleCirclesInCircles() {
        this.setState({ circlesInCircles: !this.state.circlesInCircles });
    }

    /**
     * Maps keydowns to functions.
     * @returns {void}
     */
    handleKeydown({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleCirclesInCircles();
        }
    }

    changeNumCircles({ currentTarget: { value: numCirclesInRow } }) {
        this.setState({ numCirclesInRow });
    }

    render() {
        const { colors } = this.props;
        const { color0, color1, color2 } = colors;
        const { numCirclesInRow, circlesInCircles } = this.state;
        const backgroundColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const circle1Color = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` }
        const circle2Color = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` }

        let circles;

        if (circlesInCircles) {
            circles = times(numCirclesInRow * numCirclesInRow, (i) => {
                const outerCircleStyle = merge({
                    height: `${100 / numCirclesInRow}%`,
                    width: `${100 / numCirclesInRow}%`
                }, circle1Color);

                return (
                    <div
                        key={i}
                        style={outerCircleStyle}
                        className="display-inline-block position-relative circle"
                    >
                        <div className="OpticalMixture__innerCircle circle absolute-center" style={circle2Color} />
                    </div>
                );
            });
        } else {
            circles = times(numCirclesInRow * numCirclesInRow, (i) => {
                const style = merge({
                    height: `${100 / numCirclesInRow}%`,
                    width: `${100 / numCirclesInRow}%`
                }, (i % 2 == 0 ? circle1Color : circle2Color));
                return <div key={i} style={style} className="display-inline-block circle" />;
            });
        }

        return (
            <div className="full-screen OpticalMixture" style={backgroundColor}>
                <CornerMenu colorLabels={['background color', 'circle color 1', 'circle color 2']}>
                    <label htmlFor="num-circles">number of circles in a row: </label>
                    <input
                        id="num-circles"
                        type="number"
                        min="1"
                        max="50"
                        value={numCirclesInRow}
                        onChange={this.changeNumCircles}
                    />
                    <br />
                </CornerMenu>
                    {circles}
            </div>
        );
    }
}

OpticalMixture.propTypes = {
    colors: validatePropColors(3)
};

OpticalMixture = connect(mapStateToProps)(OpticalMixture);

export default OpticalMixture;