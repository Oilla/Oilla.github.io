import { useEffect, useState } from 'react';

export default function TypewriterText({ text }: { text: string }) {
    const [displayed, setDisplayed] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
        const timeout = setTimeout(() => {
            setDisplayed((prev) => prev + text[index]);
            setIndex(index + 1);
        }, 80); // ketik per 80ms

        return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <h1 className="w-[90%]
            absolute 
            top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-[white] text-shadow-warm-pink text-[1.2rem] 
            sm:text-[1.5rem] 
            md:text-[1.8rem] 
            press_start animate-bounce">
        {displayed}
        <span className="animate-pulse"></span>
        </h1>
    );
}
