import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

export default function Modal({ isShowing, onClose, contents }) {
    if (!isShowing) {
        return null;
    }

    return (
        <div>
            <div className="Modal__backdrop" onClick={onClose} />
            <div className="Modal__contents">
                <button
                aria-label="Close"
                className="Modal__closeButton position-absolute"
                onClick={onClose}
                >
                    X
                </button>
                {contents}
            </div>
        </div>
    );
}

Modal.propTypes = {
    isShowing: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    contents: PropTypes.node.isRequired
};
Modal.defaultProps = {
    isShowing: false
};