import React from 'react';
import PropTypes from 'prop-types';

import './home_link.scss';

export default function HomeLink({ href, title }) {
    return (
        <a href={href} className="homeLink">
            {title}
        </a>
    );
}

HomeLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};