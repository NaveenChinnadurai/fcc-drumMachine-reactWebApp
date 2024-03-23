import React from 'react'
import '../styles/quoteBox.css'
import { FaXTwitter as Twitter,FaInstagram as Insta,FaSquareFacebook as FB} from "react-icons/fa6";
import { PiQuotesFill as Quotes} from "react-icons/pi";
import QUOTES from '../scripts/quotes'
import {useState} from 'react'
import COLORS from '../scripts/colors'

function QuoteBox(props) {
    const [index, setIndex] = useState(0)
    const handleClick=()=>{
        let i=Math.floor(Math.random() * ((QUOTES.length-1) - 0 + 1) + 0);
        setIndex(i);
        let e=Math.floor(Math.random() * ((COLORS.length-1) - 0 + 1) + 0);
        props.setI(e)
    }
    const bgStyles={
        backgroundColor:props.color
    }
    return (
        <div id="quote-box" className='center-elements'>
            <div className="center-elements quote-text-div" style={{color:props.color}}>
                <h1 id="text"><Quotes id='quotes'/>{QUOTES.at(index).quote}</h1>
                <p id="author">-{QUOTES.at(index).author}</p>
            </div>
            <div className="center-elements quote-box-end">
                <div className="quote-links">
                    <span id="tweet-quote" className='bg icon cur-pointer' style={bgStyles}><Twitter/></span>
                    <span className='bg icon cur-pointer' style={bgStyles}><Insta/></span>
                    <span className='bg icon cur-pointer' style={bgStyles}><FB/></span>
                </div>
                <span id="new-quote" className='cur-pointer' style={bgStyles} onClick={handleClick}>New Quote</span>
            </div>
        </div>
    )
}

export default QuoteBox