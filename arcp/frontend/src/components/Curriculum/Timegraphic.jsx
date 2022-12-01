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

export default function CustomizedTimeline({ handlePopup }) {

    let style = {
        cursor: 'pointer'
    }
    return (
        <div className='tl'>
            <Timeline position="left">
                <TimelineItem onClick={handlePopup} style={style} topic='assembler'>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text' onClick={handlePopup} style={style} topic='assembler'
                    >
                        Octubre 2022 - Junio 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator onClick={handlePopup} style={style} topic='assembler'>
                        <TimelineDot color="secondary" onClick={handlePopup} style={style} topic='assembler'>
                            <ImportContactsIcon onClick={handlePopup} style={style} topic='assembler' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='assembler' />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '10px', px: 2 }} onClick={handlePopup} style={style} topic='assembler'>
                        <Typography className='tl-text' variant="h6" component="span" onClick={handlePopup} style={style} topic='assembler'>
                            Master Software Development
                        </Typography>
                        <Typography className='tl-text' onClick={handlePopup} style={style} topic='assembler'>Assembler Institute of Technology</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem onClick={handlePopup} style={style} topic='front'>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text' onClick={handlePopup} style={style} topic='front'
                    >
                        Octubre 2022 - Abril 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator onClick={handlePopup} style={style} topic='front'>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='front' />

                        <TimelineDot color="secondary" onClick={handlePopup} style={style} topic='front'>
                            <ImportContactsIcon onClick={handlePopup} style={style} topic='front' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='front' />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '40px', px: 2 }}>
                        <Typography className='tl-text' variant="h6" component="span" onClick={handlePopup} style={style} topic='front'>
                            Front-End Development
                        </Typography>
                        <Typography className='tl-text' onClick={handlePopup} style={style} topic='front'>Tokio School</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem onClick={handlePopup} style={style} topic='artifact'>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text' onClick={handlePopup} style={style} topic='artifact'
                    >
                        Mayo 2022 - Octubre 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator onClick={handlePopup} style={style} topic='artifact'>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='artifact' />

                        <TimelineDot color="primary" onClick={handlePopup} style={style} topic='artifact'>
                            <LaptopChromebookIcon onClick={handlePopup} style={style} topic='artifact' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} onClick={handlePopup} style={style} topic='artifact' />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '20px', px: 2 }} onClick={handlePopup} style={style} topic='artifact'>
                        <Typography className='tl-text' variant="h6" component="span" onClick={handlePopup} style={style} topic='artifact'>
                            Artifact Consulting S.L
                        </Typography>
                        <Typography className='tl-text' onClick={handlePopup} style={style} topic='artifact'>Backend Developer</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem onClick={handlePopup} style={style} topic='java'>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text' onClick={handlePopup} style={style} topic='java'
                    >
                        Diciembre 2021 - Mayo 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator onClick={handlePopup} style={style} topic='java'>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} onClick={handlePopup} style={style} topic='java' />
                        <TimelineDot color="secondary" onClick={handlePopup} style={style} topic='java'>
                            <ImportContactsIcon onClick={handlePopup} style={style} topic='java' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='java' />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '40px', px: 2 }} onClick={handlePopup} style={style} topic='java'>
                        <Typography className='tl-text' variant="h6" component="span" onClick={handlePopup} style={style} topic='java'>
                            Java Backend Development
                        </Typography>
                        <Typography className='tl-text' onClick={handlePopup} style={style} topic='java'>Tokio School</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem onClick={handlePopup} style={style} topic='sistemas'>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" className='tl-text' onClick={handlePopup} style={style} topic='sistemas'
                    >
                        Julio 2017 - Marzo 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator onClick={handlePopup} style={style} topic='sistemas'>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='sistemas' />
                        <TimelineDot color="success" onClick={handlePopup} style={style} topic='sistemas'>
                            <HeadsetMicIcon onClick={handlePopup} style={style} topic='sistemas' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} onClick={handlePopup} style={style} topic='sistemas' />
                    </TimelineSeparator>
                    <TimelineContent
                        sx={{ py: '80px', px: 2 }} onClick={handlePopup} style={style} topic='sistemas'>

                        <Typography variant="h6" component="span" className='tl-text' onClick={handlePopup} style={style} topic='sistemas'>
                            Sistemas 2 Valencia S.L
                        </Typography>
                        <Typography className='tl-text' onClick={handlePopup} style={style} topic='sistemas'>Técnico de Sonido</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem onClick={handlePopup} style={style} topic='cisco'>
                    <TimelineOppositeContent className='tl-text'
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" onClick={handlePopup} style={style} topic='cisco'
                    >
                        Junio 2017 - Julio 2017
                    </TimelineOppositeContent>
                    <TimelineSeparator onClick={handlePopup} style={style} topic='cisco'>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} onClick={handlePopup} style={style} topic='cisco' />
                        <TimelineDot color="secondary" onClick={handlePopup} style={style} topic='cisco' >
                            <ImportContactsIcon onClick={handlePopup} style={style} topic='cisco' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='cisco' />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '0px', px: 2 }} onClick={handlePopup} style={style} topic='cisco' >
                        <Typography variant="h6" component="span" className='tl-text' onClick={handlePopup} style={style} topic='cisco'>Cisco NetAcad Academy</Typography>
                        <Typography className='tl-text' onClick={handlePopup} style={style} topic='cisco'>CCNA v1</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem onClick={handlePopup} style={style} topic='fp'>
                    <TimelineOppositeContent className='tl-text'
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)" onClick={handlePopup} style={style} topic='fp'
                    >
                        Septiembre 2015 - Junio 2017
                    </TimelineOppositeContent>
                    <TimelineSeparator onClick={handlePopup} style={style} topic='fp'>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='fp' />
                        <TimelineDot color="secondary" onClick={handlePopup} style={style} topic='fp'>
                            <ImportContactsIcon onClick={handlePopup} style={style} topic='fp' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} onClick={handlePopup} style={style} topic='fp' />
                    </TimelineSeparator>
                    <TimelineContent className='tl-text'
                        sx={{ py: '20px', px: 2 }} onClick={handlePopup} style={style} topic='fp'
                    >
                        <Typography className='tl-text' variant="h6" component="span" onClick={handlePopup} style={style} topic='fp'>Ciclo Formativo Grado Superior
                        </Typography>
                        <Typography className='tl-text' onClick={handlePopup} style={style} topic='fp'>Sistemas Informáticos y Telecomunicaciones</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}