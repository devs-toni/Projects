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
import study from '../../assets/study.svg';
import laptop from '../../assets/laptop.svg';
import headset from '../../assets/headset.svg';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';


export default function CustomizedTimeline({ handlePopup }) {
    const { texts, language } = useContext(LanguageContext);

    let style = {
        cursor: 'pointer',
    }
    let styleIcon = {
        cursor: 'pointer',
        filter: 'var(--filter)',
        width: '30px',
        height: '30px',
        padding: '2px'
    }
    let styleMargin = {
        marginTop: '0'
    }
    let styleMarginLow = {
        marginTop: '0',
        fontSize: '0.9em'
    }
    let color1 = {
        backgroundColor: "#c633e4"
    }
    let color2 = {
        backgroundColor: "#465ac9"
    }

    return (
        <div className='tl'>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                        className='tl-text'
                    >
                        <Typography style={styleMargin}>Master Software Development</Typography>
                        <Typography style={styleMarginLow}>Assembler Institute of Technology</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '15px' }} />
                        <TimelineDot style={color1}>
                            <img src={study} alt='study' onClick={handlePopup} style={styleIcon} topic='assembler' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '15px' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                        className='tl-text'
                    >
                        <Typography style={styleMargin}>Frontend Development</Typography>
                        <Typography style={styleMarginLow}>Tokio School</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '40px' }} />
                        <TimelineDot style={color1} >
                            <img src={study} alt='study' onClick={handlePopup} style={styleIcon} topic='front' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '40px' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                        className='tl-text'
                    >
                        <Typography style={styleMargin}>Backend</Typography>
                        <Typography style={styleMarginLow}>Artifact Consulting S.L</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator >
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '5px' }} />
                        <TimelineDot style={color2} >
                            <img src={laptop} alt='study' onClick={handlePopup} style={styleIcon} topic='artifact' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '5px' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                        className='tl-text'
                    >
                        <Typography style={styleMargin}>Backend</Typography>
                        <Typography style={styleMarginLow}>Java</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '90px' }} />
                        <TimelineDot style={color1}>
                            <img src={study} alt='study' onClick={handlePopup} style={styleIcon} topic='java' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '90px' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                        className='tl-text'
                    >
                          <Typography style={styleMargin}>{texts.curriculum.timeline.sistemas}</Typography>
                        <Typography style={styleMarginLow}>Sistemas2 Valencia</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '5px' }} />
                        <TimelineDot style={color2}>
                            <img src={headset} alt='study' onClick={handlePopup} style={styleIcon} topic='sistemas' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '5px' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem >
                    <TimelineOppositeContent className='tl-text'
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                    >
                        <Typography style={styleMargin}>Cisco CCNA1</Typography>
                        <Typography style={styleMarginLow}>Netacad Academy</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator >
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '5px' }} />
                        <TimelineDot style={color1} >
                            <img src={study} alt='study' onClick={handlePopup} style={styleIcon} topic='cisco' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '5px' }} />
                    </TimelineSeparator>
                    <TimelineContent />
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='tl-text'
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--color)"
                    >
                        <Typography style={styleMargin}>{texts.curriculum.timeline.fp}</Typography>
                        <Typography style={styleMarginLow}>Vicente Blasco Ibañez</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '5px' }} />
                        <TimelineDot style={color1} >
                            <img src={study} alt='study' onClick={handlePopup} style={styleIcon} topic='fp' />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'var(--font-color)', height: '5px' }} />
                    </TimelineSeparator>
                    <TimelineContent className='tl-text' />
                </TimelineItem>
            </Timeline>
        </div>
    );
}