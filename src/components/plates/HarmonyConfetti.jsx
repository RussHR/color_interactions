import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assign, pick, times } from 'lodash';
import { Noise } from 'noisejs';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './harmony_confetti.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class HarmonyConfetti extends Component {
    constructor(props) {
        super(props);

        this.noise = new Noise(Math.random());
        this.animate = this.animate.bind(this);
        this.state = {};
        this.state.smallBoxProperties = this.randomSmallBoxProperties();

        this.randomizeSmallBoxes = this.randomizeSmallBoxes.bind(this);
        this.randomizeSmallBoxesViaKeyboard = this.randomizeSmallBoxesViaKeyboard.bind(this);
    }

    componentDidMount() {
        // this.animate();
        window.document.addEventListener('keydown', this.randomizeSmallBoxesViaKeyboard);
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationRequestId);
        window.document.removeEventListener('keydown', this.randomizeSmallBoxesViaKeyboard);
    }

    animate(timestamp = 0) {
        // this.wigglyBars.forEach((wigglyBar, i) => {
        //     if (wigglyBar) {
        //         wigglyBar.style.transform = `translate3d(${this.noise.simplex2(i, timestamp / 1000) * 5}%, 
        //             ${this.noise.simplex2(timestamp / 1000, i) * 10}%, 0)
        //             rotate(${this.noise.simplex2(i, timestamp / 1000) * 5}deg)`;
        //     }
        // });

        this.animationRequestId = window.requestAnimationFrame(this.animate);
    }

    randomizeSmallBoxes() {
        this.setState({ smallBoxProperties: this.randomSmallBoxProperties() });
    }

    randomSmallBoxProperties() {
        return times(90, i => {
            const { color1, color2, color3, color4 } = this.props.colors;
            const colorRoll = Math.random();
            let backgroundColor;

            if (colorRoll < 0.125) {
                backgroundColor = 2;
            } else if (colorRoll < 0.375) {
                backgroundColor = 3;
            } else if (colorRoll < 0.475) {
                backgroundColor = 4;
            } else {
                backgroundColor = 1;
            }

            return {
                top: `${(Math.random() * 100).toFixed(1)}%`,
                left: `${(Math.random() * 100).toFixed(1)}%`,
                backgroundColor
            };
        });
    }

    randomizeSmallBoxesViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.randomizeSmallBoxes();
        }
    }

    render() {
        const { color0, color1, color2, color3, color4 } = this.props.colors;
        const mainBgStyle = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };
        const color4Style = { backgroundColor: `rgb(${color4.r}, ${color4.g}, ${color4.b})` };

        return (
            <div className="full-screen overflow-hidden" style={mainBgStyle}>
                <CornerMenu colorLabels={['background color', 'color 1', 'color 2', 'color 3', 'color 4']}>
                    <button onClick={this.randomizeSmallBoxes}>randomize confetti (k)</button>
                    <br/>
                </CornerMenu>

                {/* bar one */}
                <HarmonyConfettiMainBar
                    smallBoxProperties={this.state.smallBoxProperties}
                    color1Style={color1Style}
                    color2Style={color2Style}
                    color3Style={color3Style}
                    color4Style={color4Style}
                />

                {/* bar two */}
                <HarmonyConfettiMainBar
                    smallBoxProperties={this.state.smallBoxProperties}
                    color1Style={color2Style}
                    color2Style={color3Style}
                    color3Style={color4Style}
                    color4Style={color1Style}
                />

                {/* bar three */}
                <HarmonyConfettiMainBar
                    smallBoxProperties={this.state.smallBoxProperties}
                    color1Style={color3Style}
                    color2Style={color4Style}
                    color3Style={color1Style}
                    color4Style={color2Style}
                />

                {/* bar four */}
                <HarmonyConfettiMainBar
                    smallBoxProperties={this.state.smallBoxProperties}
                    color1Style={color4Style}
                    color2Style={color1Style}
                    color3Style={color2Style}
                    color4Style={color3Style}
                />
            </div>
        );
    }
}

HarmonyConfetti.propTypes = {
    colors: validatePropColors(5)
};

HarmonyConfetti = connect(mapStateToProps)(HarmonyConfetti);

export default HarmonyConfetti;

function HarmonyConfettiMainBar(props) {
    const { smallBoxProperties, color1Style } = props;

    const smallBoxes = smallBoxProperties.map((boxProperties, i) => {
        const style = {
            top: boxProperties.top,
            left: boxProperties.left,
            backgroundColor: props[`color${boxProperties.backgroundColor}Style`]['backgroundColor']
        };

        return (
            <div
                className="HarmonyConfetti_smallBox HarmonyConfetti_smallBox--12 position-absolute"
                style={style}
                key={i}
            />
        );
    })

    return (
        <div className="HarmonyConfetti_mainBar full-width position-relative">

            {smallBoxes.slice(0,30)}

            <div
                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--first position-absolute"
                style={color1Style}
            />
            <div
                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--second position-absolute"
                style={color1Style}
            />
            <div
                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--third position-absolute"
                style={color1Style}
            />
            <div
                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--fourth position-absolute"
                style={color1Style}
            />

            {smallBoxes.slice(30,60)}

            <div
                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--first position-absolute"
                style={color1Style}
            />
            <div
                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--second position-absolute"
                style={color1Style}
            />
            <div
                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--third position-absolute"
                style={color1Style}
            />
            <div
                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--fourth position-absolute"
                style={color1Style}
            />

            {smallBoxes.slice(60)}
        </div>
    );
}