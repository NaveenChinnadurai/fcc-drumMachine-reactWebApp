import { useState } from 'react'
import './App.css'
import ClockTimer from './clocklTimer/page'
import Drum from './drum/page'
import MarkdownPreview from './markdownPreview/page'
import RandomQuote from './randomQuote/page'
function App() {
  const [content, setContent] = useState(<RandomQuote/>)
  return (
    <div className='app'>
      <ul className='navbar' >
        <li onClick={()=>setContent(<RandomQuote/>)}>Random Quote Generator</li>
        <li onClick={()=>setContent(<Drum/>)}>Drum</li>
        <li onClick={()=>setContent(<MarkdownPreview/>)}>Markdown Preview</li>
        <li onClick={()=>setContent(<ClockTimer/>)}>Clock Timer</li>
      </ul>
      <div>{content}</div>
    </div>
  )
}

export default App
