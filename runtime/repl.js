import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import Browser from 'ait-lang/runtimes/browser';
import canvas from 'ait-canvas';
import dom from 'ait-dom';
require('./cm-ait');

function ait2str(v) {
  if(v instanceof Array) {
    let ret = v.map(ait2str);
    if(v.length <= 4) {
      return `[ ${ret.join(' ')} ]`;
    } else {
      return `[ ${ret.slice(0, 4).join(' ')} ... ]`;
    }
  } else if (typeof v === 'object') {
    if(v.type === 'js') {
      return v.name
    } else if (v.type === 'ait') {
      return v.name
    } else {
      return `{${Object.keys(v).map(k => k + ': ' + v[k]).join(', ')}}`
    }
  } else if (typeof v === 'number') {
    return Math.round(v * 1000) / 1000;
  }

  return JSON.stringify(v);
}


export default class Repl extends Component {
  constructor(props) {
    super(props);

    const code = props.code || '';
    const additionalModules = props.modules || [];

    const runtime = Browser();
    runtime.load(canvas);
    runtime.load(dom);
    additionalModules.forEach(m => runtime.evaluate(m));
    runtime.setCanvasDimensions(500, 500);
    runtime.reset();
    runtime.evaluate(code)

    this.state = {
      runtime: runtime,
      code
    };

    window.runtime = runtime;

    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    this.state.runtime.reset();
    try {
      // this.state.runtime.reset();
      this.state.runtime.evaluate(newCode);
      this.setState({code: newCode});
    } catch (e) {
      console.error(e.message);
    }
  }

  componentDidMount() {
    if(this.props.mode === 'canvas') {
      this._output.appendChild(this.state.runtime.ctx.canvas);

      this.state.runtime.ctx.canvas.addEventListener('click', e => {
        this.state.runtime.stopAnimations();
      });
    }
  }

  render() {
    const {mode} = this.props;

    return (<div className="repl">
      <div className="input">
        <Codemirror value={this.state.code} onChange={this.updateCode} options={{
          lineNumbers: false,
          theme: 'seti',
          mode: 'ait',
          tabSize: 2
        }}/>
      </div>
      <div className="output" ref={el => this._output = el}>
        <div>The {mode === 'stack' ? 'Stack' : 'Canvas'}:</div>
        {
          mode === 'stack' ?
            <ul className="stack">
              {
                this.state.runtime.stack.stack()
                  .reverse()
                  .map((v, i) => <li key={i}>{ait2str(v)}</li>)
              }
            </ul>
          : null
        }
      </div>
    </div>);
  }
}
