"use client";
import React, {useState, useEffect} from 'react'
import '../styles/textTyper.css'

const TextTyper = ({text, interval=150}) => {

    const [typedText, setTypedText] = useState(``);

    const typingRender = (text, interval)=>{
        let textIndex = 0;
        let localTyping = ``;
    
        let textInterval = setInterval(() => {
            if (textIndex < text.length) {
                setTypedText((localTyping += text[textIndex]));
                textIndex += 1;
            } else {
                textIndex = 0;
                localTyping = ``;
                clearInterval(textInterval);
            }
        }, interval);
    }

    useEffect(() => {
        typingRender(text, interval);
    }, [text, interval])
    

    return (
        <div className='text-7xl whitespace-pre font-bold'>
            {typedText}
            <span className='blink_box'>|</span>
        </div>
    )
}

export default TextTyper