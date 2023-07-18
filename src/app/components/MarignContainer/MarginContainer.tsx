import React from 'react';

interface MarginContainerProps {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    children: React.ReactNode;
}

const MarginContainer: React.FC<MarginContainerProps> = ({
     top = 0,
     right = 0,
     bottom = 0,
     left = 0,
     children,
 }) => {
    const style = {
        marginTop: `${top}rem`,
        marginRight: `${right}rem`,
        marginBottom: `${bottom}rem`,
        marginLeft: `${left}rem`,
    };

    return <div style={style}>{children}</div>;
};

export default MarginContainer;