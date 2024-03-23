import './style.css'
import QuoteBox from './compo/quoteBox'
import COLORS from './scripts/colors'
import {useState} from 'react'

function RandomQuote() {
  const [i, setI] = useState(0)
  const color=COLORS.at(i)

  return (
    <div className='center-elements random-quote-app' style={{backgroundColor:color}}>
      <QuoteBox setI={setI} color={color} />
      <p>by Naveen Chinnadurai</p>
    </div>
  )
}

export default RandomQuote
