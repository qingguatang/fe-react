import React from 'react'
import marked from 'marked';
import 'bulma/css/bulma.min.css';
import './style.scss';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  render() {
    var markdown = this.state.markdown;
    var html = marked(markdown);

    return (
      <div className="markdown">
        <div className="toolbar">
          <IconButton icon="icon-editor-bold"></IconButton>
          <IconButton icon="icon-editor-italic"></IconButton>
          <IconButton icon="icon-editor-underline"></IconButton>
          <IconButton icon="icon-editor-list-bulleted"></IconButton>
        </div>
        <div className="body box">
          <div className="editor">
            <textarea className="textarea" value={markdown} onChange={e => this.onChange(e)} />
          </div>
          <div className="preview" dangerouslySetInnerHTML={{__html: html}}>
          </div>
        </div>
      </div>
    );
  }

  onChange(e) {
    this.setState({ markdown: e.target.value });
  }
}

const IconButton = (props) => (
  <button className="button is-small" onClick={props.onClick}>
    <span className="icon is-small">
      <i className={`iconfont ${props.icon}`}></i>
    </span>
  </button>
);

export default Markdown;