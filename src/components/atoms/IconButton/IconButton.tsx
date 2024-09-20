import React from 'react';
import { Tooltip, IconButton as MuiIconButton } from '@mui/material';
import { icons } from '@/icon-lib';

interface IconButtonProps {
    /** If the button is disabled */
    disabled?: boolean;
    /** Handler if button is clicked */
    onClick: () => void;
    /** Text in the tooltip */
    tooltipText?: string;
    /** The icon to display */
    icon: keyof typeof icons;
    /** If the component should have no background */
    noBackground?: boolean;
    /** Optional color of the icon, only works with no background option */
    iconColor?: 'primary' | 'warning' | 'error' | 'secondary' | 'default';
}

/**
 * This component wraps the MUI Icon Button and provides the standardized ioBroker icons
 * and functionalities like tooltip
 */
export default class IconButton extends React.Component<IconButtonProps> {
    render(): React.ReactNode {
        const Icon = icons[this.props.icon];
        return (
            <Tooltip title={this.props.tooltipText} componentsProps={{ popper: { sx: { pointerEvents: 'none' } } }}>
                <MuiIconButton
                    color={this.props.iconColor}
                    sx={
                        this.props.noBackground
                            ? undefined
                            : {
                                  backgroundColor: theme => theme.palette.primary.main,
                                  '&:hover': { backgroundColor: theme => theme.palette.primary.light },
                                  color: theme => theme.palette.getContrastText(theme.palette.primary.dark)
                              }
                    }
                    size={'small'}
                    disabled={this.props.disabled}
                    onClick={() => this.props.onClick()}
                >
                    <Icon />
                </MuiIconButton>
            </Tooltip>
        );
    }
}
