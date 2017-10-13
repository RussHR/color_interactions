import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assign, pick, times } from 'lodash';
import { ChromePicker } from 'react-color';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { changeColorAction, randomColorsAction } from '../../actions/colorActions';

import './corner_menu.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class CornerMenu extends Component {
    constructor(props){
        super(props);
        const lockedColors = {};
        times(props.colorLabels.length, (i) => {
            lockedColors[`color${i}`] = false;
        });

        this.state = {
            isOpen: false,
            isHidden: false,
            activeColor: 'color0',
            lockedColors
        };
        this.toggleOpen = this.toggleOpen.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown({ keyCode }) {
        if (keyCode === 72) {
            this.toggleHiding();
        } else if (keyCode === 74) {
            this.randomizeColors();
        }
    }

    toggleHiding() {
        this.setState({ isHidden: !this.state.isHidden });
    }

    /**
     * Calls dispatch to change colors visible that aren't locked.
     * @returns {void}
     */
    randomizeColors() {
        this.props.dispatch(randomColorsAction(this.state.lockedColors));
    }

    toggleOpen() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    /**
     * Changes which color is shown in the color picker.
     * @param {string} activeColor - the color (e.g. color0, color1) to show in the color picker
     * @returns {void}
     */
    changeActiveColor(activeColor) {
        this.setState({ activeColor });
    }

    /**
     * Calls dispatch to change a color.
     * @param {object} payload - data for colors to be changed including new color in rgb format
     * @returns {void}
     */
    changeColor(newColorChange) {
        this.props.dispatch(changeColorAction(newColorChange));
    }

    /**
     * Toggles the state of whether a color is "locked", i.e. prevented, from changing into a random color.
     * @param {string} color - string that determines which color is locked, e.g. 'color1'
     * @returns {void}
     */
    toggleLockedColor(color) {
        const lockedColors = assign({}, this.state.lockedColors, { [`${color}`]: !this.state.lockedColors[color] });
        this.setState({ lockedColors });
    }

    renderActiveColorRadios() {
        return this.props.colorLabels.map((label, i) => {
            return (
                <div key={`color-radio-${i}`}>
                    <label htmlFor={`color${i}`}>{label}</label>
                    <input
                        type="radio"
                        name="color"
                        id={`color${i}`}
                        checked={this.state.activeColor == `color${i}`}
                        onChange={() => this.changeActiveColor(`color${i}`)}
                    />
                    <br />
                </div>
            );
        });
    }

    renderLockedColorCheckboxes() {
        return this.props.colorLabels.map((label, i) => {
            return (
                <div key={`locked-color${i}`}>
                    <label htmlFor={`color${i}-lock`}>Lock {label}</label>
                    <input
                        type="checkbox"
                        name="color"
                        id={`color${i}-lock`}
                        checked={this.state.lockedColors[`color${i}`]}
                        onChange={() => this.toggleLockedColor(`color${i}`)}
                    />
                    <br />
                </div>
            );
        });
    }

    render() {
        const menuClasses = classNames(
            'CornerMenu',
            'position-absolute',
            'top-0',
            'right-0',
            { 'hidden': this.state.isHidden }
        );

        if (!this.state.isOpen) {
            return (
                <div className={menuClasses}>
                    <button className="CornerMenu__cornerButton no-padding" onClick={this.toggleOpen}>menu</button>
                </div>
            );
        }

        const { colors, children } = this.props;
        const { activeColor } = this.state;

        return (
            <div className={menuClasses}>
                <button
                    aria-label="Close"
                    className="CornerMenu__close position-absolute top-0 right-0"
                    onClick={this.toggleOpen}
                >
                    X
                </button>

                {this.renderActiveColorRadios()}

                <ChromePicker
                    disableAlpha={true}
                    color={colors[activeColor]}
                    onChange={({ rgb: { r, g, b } }) => this.changeColor({ [`${activeColor}`]: { r, g, b } })}
                />

                <br />
                <button onClick={() => this.randomizeColors()}>randomizeColors (j)</button>
                <br />

                {this.renderLockedColorCheckboxes()}

                {children}

                <a href="#">Home</a>
            </div>
        );
    }
}

CornerMenu.propTypes = {
    colorLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.node
};

CornerMenu = connect(mapStateToProps)(CornerMenu);

export default CornerMenu;