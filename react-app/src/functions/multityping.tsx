import { useEffect, useState } from 'react';

interface Props {
  texts: string[]; // array teks yang berganti-ganti
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export default function multityping({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
}: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    let timeout: number;

    if (isDeleting) {
      timeout = window.setTimeout(() => {
        setDisplayed(fullText.substring(0, displayed.length - 1));
      }, deletingSpeed);
    } else {
      timeout = window.setTimeout(() => {
        setDisplayed(fullText.substring(0, displayed.length + 1));
      }, typingSpeed);
    }

    // kondisi selesai ngetik
        if (!isDeleting && displayed === fullText) {
        timeout = window.setTimeout(() => setIsDeleting(true), delay);
        }

        // kondisi selesai menghapus
        if (isDeleting && displayed === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delay]);

    return (
        <h1 className="w-[70%]
            absolute 
            top-4/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-lg text-[white] text-shadow-warm-pink2 pixelify 
            text-[1em]
            sm:text-[1.3em]
            md:text-[1.55em]
            ">
        {displayed}
        <span className="animate-pulse"></span>
        </h1>
    );
}
