import React from 'react';
import HomeLink from '../HomeLink';
import Menu from '../Menu';

import './home.scss';

export default function Home() {
    return (
        <div className="full-screen position-relative display-flex home">
            <Menu>
                hay
            </Menu>
            <HomeLink href="#a-color-has-many-faces" title="A Color Has Many Faces" />
            <HomeLink href="#lighter-and-or-darker" title="Lighter and/or Darker" />
        </div>
    );
}