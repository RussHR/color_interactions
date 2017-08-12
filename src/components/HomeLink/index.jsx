import React from 'react';
import PropTypes from 'prop-types';

import './home_link.scss';

export default function HomeLink({ href, title, children }) {
    return (
        <a href={href} className="homeLink">
            {children}
            <br />
            {title}
        </a>
    );
}

HomeLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};