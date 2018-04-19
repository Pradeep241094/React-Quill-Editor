import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

const Wrapper = styled.div`
 margin-top: 16px;
 margin-bottom: 32px;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around ;
`;

const WrapperLeft = styled.div`
width: 48%;
position: relative;
`;
const WrapperRight = styled.div`
width: 48%;
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    const {text}= this.state;
    const createMarkup = (text) => { return {__html: text }; };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Quill Editor</h1>
        </header>
        <Wrapper>
        <WrapperLeft>
        <p>Create A text Editor</p>
        <ReactQuill value={this.state.text}
          style={{height: '300px'}}
          modules={App.modules}
          onChange={this.handleChange} />
        </WrapperLeft>
        <WrapperRight>
        <p>Preview</p>
        {console.log(text)}
        <div style={{height: 400, overflowY: 'scroll'}}dangerouslySetInnerHTML={ {__html: text }} />
        </WrapperRight>
        </Wrapper>
      </div>
    );
  }
}

App.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}],
    [{ 'color': [] }, { 'background': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}], 
    ['link', 'image',],
  ],
}

App.formats = [
  'header', 'font', 'background', 'color', 'code', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'script', 'align', 'direction',
  'link', 'image', 'code-block', 'formula', 'video'
]

export default App;
