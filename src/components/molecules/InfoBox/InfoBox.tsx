import React from 'react';
import { Box, Typography } from '@mui/material';
import { Info, Warning } from '@mui/icons-material';
import '@/components/molecules/InfoBox/InfoBox.css';

interface InfoBoxProps {
    /** Text to display in the info box */
    children: string;
    /** The type determines the color and symbol */
    type: 'warning' | 'info' | 'error';
}

export default class InfoBox extends React.Component<InfoBoxProps> {
    render(): React.ReactNode {
        return (
            <Box className="iom-info-box" sx={{ borderColor: theme => theme.palette[this.props.type].main }}>
                {this.props.type === 'info' ? <Info color={'primary'} /> : <Warning color={this.props.type} />}
                <Typography>{this.props.children}</Typography>
            </Box>
        );
    }
}
