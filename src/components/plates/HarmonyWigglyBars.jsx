import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { Noise } from 'noisejs';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './harmony_wiggly_bars.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class HarmonyWigglyBars extends Component {
    constructor(props) {
        super(props);

        this.noise = new Noise(Math.random());
        this.animate = this.animate.bind(this);
        this.wigglyBars = [];

        this.modalContents = (
            <p>
                There are hardly any absolute rules for making a harmonious or pleasant image;
                these are subjective values. That said, almost any combination of colors
                can usually be arranged harmoniously by adjusting two factors: their frequency
                and their amount. In these four columns, the same four colors are used in
                different ways, but notice how some columns are more pleasant than others.
            </p>
        );
    }

    componentDidMount() {
        this.animate();
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationRequestId);
    }

    animate(timestamp = 0) {
        this.wigglyBars.forEach((wigglyBar, i) => {
            if (wigglyBar) {
                wigglyBar.style.transform = `translate3d(${this.noise.simplex2(i, timestamp / 1000) * 5}%, 
                    ${this.noise.simplex2(timestamp / 1000, i) * 10}%, 0)
                    rotate(${this.noise.simplex2(i, timestamp / 1000) * 5}deg)`;
            }
        });

        this.animationRequestId = window.requestAnimationFrame(this.animate);
    }

    render() {
        const { color0, color1, color2, color3 } = this.props.colors;
        const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };

        return (
            <div className="full-screen overflow-hidden">
                <CornerMenu
                    colorLabels={['color 1', 'color 2', 'color 3', 'color 4']}
                    modalContents={this.modalContents}
                />

                <div className="HarmonyWigglyBars__bgBar full-height display-inline-block" style={color0Style}>
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                </div>

                <div className="HarmonyWigglyBars__bgBar full-height display-inline-block" style={color3Style}>
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                </div>

                <div className="HarmonyWigglyBars__bgBar full-height display-inline-block" style={color1Style}>
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color2Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                </div>

                <div className="HarmonyWigglyBars__bgBar full-height display-inline-block" style={color2Style}>
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color3Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color1Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                    <div
                        className="HarmonyWigglyBars__figureBar full-width"
                        style={color0Style}
                        ref={c => this.wigglyBars.push(c)}
                    />
                </div>
            </div>
        );
    }
}

HarmonyWigglyBars.propTypes = {
    colors: validatePropColors(4)
};

HarmonyWigglyBars = connect(mapStateToProps)(HarmonyWigglyBars);

export default HarmonyWigglyBars;