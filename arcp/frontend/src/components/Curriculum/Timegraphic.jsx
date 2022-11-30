import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CustomizedTimeline({ url }) {

    return (
        <div className='tl'>
            <Timeline position="left">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text'
                    >
                        Octubre 2022 - Junio 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Link to={`${url}/assembler`}>
                            <TimelineDot color="secondary">
                                <ImportContactsIcon />
                            </TimelineDot></Link>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '10px', px: 2 }}>
                        <Typography className='tl-text' variant="h6" component="span">
                            Master Software Development
                        </Typography>
                        <Typography className='tl-text'>Assembler Institute of Technology</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text'
                    >
                        Octubre 2022 - Abril 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <Link to={`${url}/front`}>
                            <TimelineDot color="secondary">
                                <ImportContactsIcon />
                            </TimelineDot></Link>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '40px', px: 2 }}>
                        <Typography className='tl-text' variant="h6" component="span">
                            Front-End Development
                        </Typography>
                        <Typography className='tl-text'>Tokio School</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text'
                    >
                        Mayo 2022 - Octubre 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <Link to={`${url}/artifact`}>
                            <TimelineDot color="primary">
                                <LaptopChromebookIcon />
                            </TimelineDot></Link>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '20px', px: 2 }}>
                        <Typography className='tl-text' variant="h6" component="span">
                            Artifact Consulting S.L
                        </Typography>
                        <Typography className='tl-text'>Backend Developer</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text'
                    >
                        Diciembre 2021 - Mayo 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                        <Link to={`${url}/java`}>
                            <TimelineDot color="secondary">
                                <ImportContactsIcon />
                            </TimelineDot></Link>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '40px', px: 2 }}>
                        <Typography className='tl-text' variant="h6" component="span">
                            Java Backend Development
                        </Typography>
                        <Typography className='tl-text'>Tokio School</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text'
                    >
                        Julio 2017 - Marzo 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <Link to={`${url}/sistemas`}>
                            <TimelineDot color="success">
                                <HeadsetMicIcon />
                            </TimelineDot></Link>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                    </TimelineSeparator>
                    <TimelineContent
                        sx={{ py: '80px', px: 2 }}>

                        <Typography variant="h6" component="span" className='tl-text'>
                            Sistemas 2 Valencia S.L
                        </Typography>
                        <Typography className='tl-text'>Técnico de Sonido</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='tl-text'
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                    >
                        Junio 2017 - Julio 2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                        <Link to={`${url}/cisco`}>
                            <TimelineDot color="secondary">
                                <ImportContactsIcon />
                            </TimelineDot></Link>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '0px', px: 2 }}>
                        <Typography variant="h6" component="span" className='tl-text'>Cisco NetAcad Academy</Typography>
                        <Typography className='tl-text'>CCNA v1</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='tl-text'
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                    >
                        Septiembre 2015 - Junio 2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <Link to={`${url}/fp`}>
                            <TimelineDot color="secondary">
                                <ImportContactsIcon />
                            </TimelineDot></Link>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent className='tl-text'
                        sx={{ py: '20px', px: 2 }}
                    >
                        <Typography className='tl-text' variant="h6" component="span">Ciclo Formativo Grado Superior
                        </Typography>
                        <Typography className='tl-text'>Sistemas Informáticos y Telecomunicaciones</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}