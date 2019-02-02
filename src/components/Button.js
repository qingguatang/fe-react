import React from 'react'

function Button(props) {
  var cx = "btn";

  var type = props.type || 'light';
  cx += ' btn-' + type;

  // if (props.type) {
  //   cx += " btn-" + props.type;
  // } else {
  //   cx += " btn-light";
  // }

  var size = ({
    'big': 'btn-lg',
    'small': 'btn-sm'
  })[props.size] || '';

  cx += size;

  // if (props.size) {
  //   if (props.size === 'big') {
  //     cx += ' btn-lg';
  //   } else if (props.size === 'small') {
  //     cx += ' btn-sm';
  //   }
  // }

  return (
    <button type="button" className={cx} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;