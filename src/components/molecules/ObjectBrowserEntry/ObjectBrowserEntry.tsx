import React from 'react';

export interface IProps {
    color: string;
    onClick?: (color: string) => void;
}

export default class ObjectBrowserEntry extends React.Component<IProps> {
    render(): React.ReactNode {
        return (
            <button
                style={{ color: this.props.color }}
                onClick={() => this.props.onClick && this.props.onClick(this.props.color)}
            >
                Color Button
            </button>
        );
    }
}
