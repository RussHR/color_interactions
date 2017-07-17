import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Router extends Component {

    /**
     * Attach listener for hash changes in url once component has mounted.
     * @returns {void}
     */
    componentDidMount() {
        window.addEventListener("hashchange", this.handleHashChange, false);
    }

    /**
     * Remove listener for hash changes in url when component unmounts.
     * @returns {void}
     */
    componentWillUnmount() {
        window.removeEventListener("hashchange", this.handleHashChange, false);
    }

    handleHashChange({ currentTarget: { location: { hash } } }) {
        console.log(hash);
    }

    render() {
        return (
            <div>
                hi i am router
                {this.props.children}
            </div>
        );
    }
}

Router.propTypes = {
    children: PropTypes.node.isRequired
}