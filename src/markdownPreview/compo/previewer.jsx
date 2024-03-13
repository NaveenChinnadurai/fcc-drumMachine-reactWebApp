import React from 'react'
import { Marked, marked } from 'marked'
import { Highlight } from 'prism-react-renderer'
class Previewer extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    marked.setOptions({
        breaks:true,
        highlight:(code)=>{
            return Prism,Highlight(code,Prism.languages.javascript,'javascript')
        }
    })
    const renderer=new marked.Renderer()
    renderer.link=(href,text,title)=>{
        return `<a target="_blank" href="${href}">${text}</a>`
    }
    return (
      <div
        style={this.props.style}
        className={this.props.className}
        dangerouslySetInnerHTML={{
            __html:marked(this.props.content,{renderer:renderer})
        }}
      />
    )
  }
}

export default Previewer
