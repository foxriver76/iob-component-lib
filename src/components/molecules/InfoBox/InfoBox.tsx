import React from 'react';
import { Box, Typography } from '@mui/material';
import { Info, Warning, Close } from '@mui/icons-material';
import '@/components/molecules/InfoBox/InfoBox.css';

interface InfoBoxProps {
    /** Text to display in the info box */
    children: string;
    /** The type determines the color and symbol */
    type: 'warning' | 'info' | 'error';
    /** If the Box is closeable */
    closeable?: boolean;
    /** Use together with `closeable: true`, listener called if close button clicked */
    onClose?: () => void;
}

/**
 * This component can be used to show important information or warnings to the user
 */
export default class InfoBox extends React.Component<InfoBoxProps> {
    render(): React.ReactNode {
        return (
            <Box className="iom-info-box" sx={{ borderColor: theme => theme.palette[this.props.type].main }}>
                {this.props.type === 'info' ? <Info color={'primary'} /> : <Warning color={this.props.type} />}
                <Typography>{this.props.children}</Typography>
                {this.props.closeable ? (
                    <Close
                        sx={{
                            color: theme => (theme.palette.mode === 'dark' ? 'lightgray' : 'gray'),
                            alignSelf: 'flex-start',
                            cursor: 'pointer'
                        }}
                        onClick={this.props.onClose}
                    />
                ) : null}
            </Box>
        );
    }
}
