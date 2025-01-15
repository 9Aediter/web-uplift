import React from 'react';
import PropTypes from 'prop-types';

const ButtonDefault = ({ onClick, children, className, size, ...props }) => {
    // กำหนด className สำหรับขนาดปุ่ม
    const sizeClass = size ? `btn-${size}` : '';

    return (
        <button
            className={`button-default ${sizeClass} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

ButtonDefault.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm', 'xs', '']), // รับค่า 'lg', 'sm', 'xs', หรือไม่ใส่
};

ButtonDefault.defaultProps = {
    onClick: () => {},
    className: '',
    size: '', // ค่า default ไม่ใส่ size
};

export default ButtonDefault;