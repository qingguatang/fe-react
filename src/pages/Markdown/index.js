import React from 'react'
import marked from 'marked';
import 'bulma/css/bulma.min.css';
import 'github-markdown-css';
import './style.scss';


class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
    this.ref = React.createRef();
    console.log('ctor');
  }

  componentDidMount() {
    console.log('mount');
    var content = window.localStorage.getItem('markdownContent');
    if (content) {
      this.setState({ markdown: content });
    }
  }

  render() {
    console.log('render');
    var markdown = this.state.markdown;
    var html = marked(markdown);

    return (
      <div className="markdown">
        <div className="toolbar">
          <IconButton icon="icon-editor-bold" onClick={() => this.onBold()}></IconButton>
          <IconButton icon="icon-editor-italic"></IconButton>
          <IconButton icon="icon-editor-underline"></IconButton>
          <IconButton icon="icon-editor-list-bulleted"></IconButton>
        </div>
        <div className="body box">
          <div className="editor">
            <textarea ref={this.ref} className="textarea" value={markdown} onChange={e => this.onChange(e)} />
          </div>
          <div className="preview markdown-body" dangerouslySetInnerHTML={{__html: html}}>
          </div>
        </div>
      </div>
    );
  }


  onChange(e) {
    this.setValue(e.target.value);
  }

  onBold() {
    var el = this.ref.current;
    var start = el.selectionStart;
    var end = el.selectionEnd;
    var text = this.state.markdown.substring(start, end);

    // el.setRangeText('**' + text + '**');
    // el.setRangeText(`**${text}**`);
    // var event = new Event('change', { bubbles: true });
    // el.dispatchEvent(event);

    // single source of truth
    var markdown = this.state.markdown;
    markdown = markdown.substr(0, start) + '**' + text + "**" + markdown.substr(end);
    this.setValue(markdown);
  }


  setValue(markdown) {
    this.setState({ markdown: markdown });
    window.localStorage.setItem('markdownContent', markdown);
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
