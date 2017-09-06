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
            circleFilled: true,
            multipleCircles: false
        };

        this.toggleCircleFilled = this.toggleCircleFilled.bind(this);
        this.toggleMultipleCircles = this.toggleMultipleCircles.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.handleKeydown);
    }

    /**
     * Toggles the state of whether the inner shapes are touching.
     * @returns {void}
     */
    toggleCircleFilled() {
        this.setState({ circleFilled: !this.state.circleFilled });
    }

    /**
     * Toggles the state of whether there is one or multiple circles showing.
     * @returns {void}
     */
    toggleMultipleCircles() {
        this.setState({ multipleCircles: !this.state.multipleCircles });
    }

    /**
     * Toggles the state of whether the inner shapes are touching via keyboard.
     * @returns {void}
     */
    handleKeydown({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleCircleFilled();
        } else if (keyCode === 76) {
            // key is 'l'
            this.toggleMultipleCircles();
        }
    }

    render() {
        const { colors } = this.props;
        const { color0 } = colors;
        const circleColor = {};
        if (this.state.circleFilled) {
            circleColor.backgroundColor = `rgb(${color0.r}, ${color0.g}, ${color0.b})`;
        }

        let circleContent;

        if (this.state.multipleCircles) {
            circleContent = (
                <div
                    className="AfterImage__circles position-relative display-grid">
                    <div>
                        <div>hi
                        </div>
                        <div>hi
                        </div>
                        <div>hi
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div className="AfterImage__centerDot absolute-center" />
                </div>
            );
        } else {
            circleContent = (
                <div
                    className="AfterImage__circle position-relative"
                    style={circleColor}
                >
                    <div className="AfterImage__centerDot absolute-center" />
                </div>
            );
        }

        return (
            <div className="full-screen display-flex justify-content-center align-items-center AfterImage">
                <CornerMenu colorLabels={['left background color', 'right background color']}>
                    <button onClick={this.toggleCircleFilled}>toggle circle fill (k)</button>
                    <br/>
                    <button onClick={this.toggleMultipleCircles}>toggle multiple circles (l)</button>
                    <br/>
                </CornerMenu>
                {circleContent}
            </div>
        );
    }
}

AfterImage.propTypes = {
    colors: validatePropColors(1)
};

AfterImage = connect(mapStateToProps)(AfterImage);

export default AfterImage;