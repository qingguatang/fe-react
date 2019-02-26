import React, { Component } from 'react';
import 'bulma';
import './style.scss';


class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      subject: 'vue',
      agree: false,
      statemanage: 'redux',
      errors: {
        // name: '请输入名称'
      },
      test: 1
    };
  }

  render() {
    var errors = this.state.errors;
    return (
      <div className="myform">
        <form onSubmit={e => this.onSubmit(e)}>
        <div className="title">Forms</div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input"
              value={this.state.name}
              onChange={e => this.onFieldChange('name', e)}
              onBlur={e => this.validateField('name')} />
          </div>
          {errors.name ? <p class="help is-danger">{errors.name}</p> : null}
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Email"
              value={this.state.email}
              onChange={e => this.onFieldChange('email', e)}
              onBlur={e => this.validateField('email')} />
          </div>
          {errors.email ? <p class="help is-danger">{errors.email}</p> : null}
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Message"
              value={this.state.message}
              onChange={e => this.onFieldChange('message', e)} />
          </div>
        </div>
        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select value={this.state.subject}
                  onChange={e => this.onFieldChange('subject', e)}>
                <option value="">请选择</option>
                <option value="react">React Js</option>
                <option value="vue">VueJs</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" checked={this.state.agree}
                  onChange={e => this.onFieldChange('agree', e, 'checked')} />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="statemanage" value="redux"
                checked={this.state.statemanage === 'redux'}
                onChange={e => this.onFieldChange('statemanage', e)} />
              Redux
            </label>
            <label class="radio">
              <input type="radio" name="statemanage" value="mobx"
                checked={this.state.statemanage === 'mobx'}
                onChange={e => this.onFieldChange('statemanage', e)} />
              MobX
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="submit">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text" type="button">Reset</button>
          </div>
        </div>
        </form>
      </div>
    );
  }

  onFieldChange(field, e, valueField) {
    // console.log(e.target)
    var value = e.target[valueField || 'value'];
    var state = {};
    state[field] = value;
    // this.setState({ [field]: value });
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.validateField()) {
      return;
    }
    // console.log(this.state);

    console.log(this.state.test);
    this.setState({test:2})
    console.log(this.state.test);
  }

  validateField(field) {
    var errors = this.state.errors;
    if (!field || field === 'name') {
      if (!this.state.name) {
        errors.name = '请输入名称';
      } else {
        errors.name = null;
      }
    }

    if (!field || field === 'email') {
      var re = /^[-\w]+@[-\w]+(\.[-\w]+)+$/;
      if (this.state.email && !re.test(this.state.email)) {
        errors.email = '请正确输入Email';
      } else {
        errors.email = null;
      }
    }
    this.setState({ errors: errors });

    for (var k in errors) {
      if (errors[k]) {
        return false;
      }
    }
    return true;
  }
}

export default Forms;

