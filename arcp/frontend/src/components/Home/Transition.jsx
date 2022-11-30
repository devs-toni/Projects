import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "portfolio",
    "🌎",
    "página",
];

export const Transition = ( { className } ) => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <TextTransition direction={'down'} inline={true} className={className} springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
            </TextTransition>
        </>
    );
};