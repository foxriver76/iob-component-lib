import React from 'react';
import { Box, Typography } from '@mui/material';
import { Info } from '@mui/icons-material';
import '@/components/molecules/InfoBox/InfoBox.css';

interface InfoBoxProps {
    /** Test to display in the info box */
    text: string;
}

export default class InfoBox extends React.Component<InfoBoxProps> {
    render(): React.ReactNode {
        return (
            <Box className="iom-info-box" sx={{ borderColor: theme => theme.palette.primary.main }}>
                <Info color={'primary'} />
                <Typography>{this.props.text}</Typography>
            </Box>
        );
    }
}
