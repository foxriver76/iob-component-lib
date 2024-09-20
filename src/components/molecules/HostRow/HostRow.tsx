import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import '@/components/molecules/HostRow/HostRow.css';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@/components/atoms/IconButton/IconButton';
import NoImage from '@/assets/logo-138.png';

interface HostRowProps {
    /** If expert mode is turned on */
    isExpertMode: boolean;
    /** Host name */
    title: string;
    /** If host is alive */
    isAlive: boolean;
}

interface HostRowState {
    /** If the card is expanded */
    isExpanded: boolean;
}

export default class HostRow extends React.Component<HostRowProps, HostRowState> {
    constructor(props: HostRowProps) {
        super(props);

        this.state = {
            isExpanded: false
        };
    }

    render(): React.ReactNode {
        return (
            <Box className="iom-host-row">
                <Card>
                    <CardHeader
                        sx={{
                            '& .MuiCardHeader-action': {
                                alignSelf: 'center'
                            },
                            backgroundColor: theme => (theme.palette.mode === 'light' ? 'white' : '#121212')
                        }}
                        className={
                            this.props.isAlive ? 'iom-host-row__header--active' : 'iom-host-row__header--inactive'
                        }
                        title={
                            <Box className="iom-host-row__image_wrapper">
                                <CardMedia sx={{ width: 45 }} component="img" image={NoImage}></CardMedia>
                                <Typography sx={{ marginLeft: 1, fontWeight: 'bold' }}>{this.props.title}</Typography>
                            </Box>
                        }
                        action={
                            <Box sx={{ height: '100%' }}>
                                <IconButton
                                    onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}
                                    icon={this.state.isExpanded ? 'chevronUp' : 'chevronDown'}
                                    noBackground
                                />
                            </Box>
                        }
                    />
                    <Collapse in={this.state.isExpanded}>
                        <CardContent
                            sx={{ backgroundColor: theme => (theme.palette.mode === 'light' ? '#f2f2f2' : '#1d1d1d') }}
                        >
                            Test
                        </CardContent>
                    </Collapse>
                </Card>
            </Box>
        );
    }
}
