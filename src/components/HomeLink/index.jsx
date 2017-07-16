import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';

import './home_link.scss';

export default function HomeLink({ href }) {
    return (
        <a href={href} className="homeLink">
            HomeLink
        </a>
    );
}

HomeLink.propTypes = {
    href: PropTypes.string.isRequired
}