import React from 'react'
import 'bulma/css/bulma.min.css';
import './style.scss';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
            <textarea className="textarea"></textarea>
          </div>
          <div className="preview">
          </div>
        </div>
      </div>
    );
  }
}

const IconButton = (props) => (
  <button className="button is-small" onClick={props.onClick}>
    <span class="icon is-small">
      <i className={`iconfont ${props.icon}`}></i>
    </span>
  </button>
);

export default Markdown;