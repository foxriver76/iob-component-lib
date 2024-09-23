import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import '@/components/molecules/HostRow/HostRow.css';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@/components/atoms/IconButton/IconButton';
import NoImage from '@/assets/logo-138.png';
import { green } from '@mui/material/colors';

interface HostRowProps {
    /** If expert mode is turned on */
    isExpertMode: boolean;
    /** Host name */
    title: string;
    /** If host is alive */
    isAlive: boolean;
    /** CPU Usage in % */
    cpu: number;
    /** RAM consumption in % */
    ram: number;
    /** Uptime string e.g. 1 h */
    uptime: string;
    /** The installed version */
    installedVersion: string;
    /** Available version to install */
    availableVersion: string;
    /** Incoming/outgoing events like ⇥3 / ↦13 */
    events: string;
    /** If update is available */
    updateAvailable: boolean;
    /** All details display as key value pairs in the collapsable */
    details: Record<string, string | number>;
    /** Function called if user copies host info */
    onCopy: () => void;
    /** Function called if user wants to perform the host upgrade */
    onUpgrade: () => void;
    // TODO: expertmode, tooltips, badge, screen size
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
                                <Typography
                                    sx={{
                                        marginLeft: 1,
                                        fontWeight: 'bold',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        width: 140
                                    }}
                                >
                                    {this.props.title}
                                </Typography>
                                <Box className="iom-host-row__statistics-box">
                                    <Typography variant="body2" color="textSecondary" sx={{ alignContent: 'center' }}>
                                        {this.props.cpu} %
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ alignContent: 'center' }}>
                                        {this.props.ram} %
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ alignContent: 'center' }}>
                                        {this.props.uptime}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ alignContent: 'center' }}>
                                        {this.props.installedVersion}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color={this.props.updateAvailable ? green[700] : 'textSecondary'}
                                        sx={{
                                            alignContent: 'center',
                                            border: this.props.updateAvailable ? '1px solid' : undefined,
                                            borderRadius: 3,
                                            paddingRight: this.props.updateAvailable ? 1 : undefined
                                        }}
                                    >
                                        {this.props.updateAvailable ? (
                                            <IconButton
                                                iconColor={'inherit'}
                                                onClick={() => this.props.onUpgrade()}
                                                icon={'refresh'}
                                                noBackground
                                            />
                                        ) : null}
                                        {this.props.availableVersion}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ alignContent: 'center' }}>
                                        {this.props.events}
                                    </Typography>
                                </Box>
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
                            <Box sx={{ float: 'right' }}>
                                <IconButton onClick={() => this.props.onCopy()} icon={'contentCopy'} noBackground />
                            </Box>
                            <Box className="iom-host-row__details-box">
                                {Object.entries(this.props.details).map(([key, value]) => (
                                    <Box sx={{ display: 'inline-flex' }}>
                                        <Typography
                                            variant="caption"
                                            sx={{ fontWeight: 'bold', whiteSpace: 'preserve' }}
                                        >{`${key}: `}</Typography>
                                        <Typography variant={'caption'}>{value}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Collapse>
                </Card>
            </Box>
        );
    }
}
