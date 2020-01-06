import React from 'react';
import './App.css';
import Down from './down.svg'
import Up from './up.svg'
import Modal from './component/Modal';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
class Body extends React.Component {

    constructor() {
        super();
        this.modules = {
            toolbar: [
              [{ 'font': [] }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              ['bold', 'italic', 'underline'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{ 'align': [] }],
              [{ 'color': [] }, { 'background': [] }],
              ['clean'],
              [{'blockquote': false}],
              [{'code-block': false}],
              [{'image': false}]
              
            ]
        }
        this.formats = [
            'font',
            'size',
            'bold', 'italic', 'underline',
            'list', 'bullet',
            'align',
            'color', 'background',
            'blockquote',
            'code-block',
            'image'
          ]
        this.state = {

            ques: [{
                name: "hii?",
                answer: [{
                    name: "yes",
                    votes: "0"
                }]
            }],
            postVal: "",
            isShowing1: false,
            isShowing2: false,
            ansVal: "",
            index: ""
        }
        this.appendans = this.appendans.bind(this);
        this.appendData = this.appendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCh = this.handleCh.bind(this)
    }
    appendans = () => {
        let {ques} = this.state;
        ques[this.state.index].answer.push({name : this.state.ansVal, votes: "0" })
        console.log(ques);
        this.setState({
            ques:ques,
            index : "",
            ansVal : "",
            isShowing2 : false,
        })
    }
    appendData = () => {
        let { ques } = this.state
        ques.push({ name: this.state.postVal, answer: [] })
        this.setState({
            ques: ques,
            isShowing1: false,
            postVal: ""
        })
    }
    upvote = (index,i) =>{
        let{ ques } = this.state
        ques[index].answer[i].votes++
        this.setState({
            ques:ques,
        })
    }
    downvote = (index,i) =>{
        let{ ques } = this.state
        if(ques[index].answer[i].votes>0)
        ques[index].answer[i].votes--
        this.setState({
            ques:ques,  
        })
    }
    handleChange(e) {
        let getTextAreaValue = e.target.value;
        this.setState({
            postVal: getTextAreaValue
        });
    }
    handleCh(e) {
        let getTextAreaValue = e;
        this.setState({
            ansVal: getTextAreaValue
        });
      }

    renderQuestions = () => {
        return (
            <div>
                {this.state.ques.map((data,index) => {
                    return (
                        <div>
                        <div className="question">
                            <h2>{data.name}</h2>
                            {data.answer.length > 0 ?
                                <div>
                                    {data.answer.map((ans,i) => {
                                        return (
                                            <div className="answer">
                                            <div className="votes">
                                                <button id="vote" onClick={()=>this.upvote(index,i)}><img id="up" src={Up}></img></button>
                                                <p>{ans.votes}</p>
                                                <button id="vote" onClick={()=>this.downvote(index,i)}><img id="down" src={Down}></img></button>
                                            </div>
                                        <div id="answer" dangerouslySetInnerHTML={{__html:ans.name}}></div>
                                            </div>
                                        )
                                    })}
                                </div> : "no answer"}
                                <button type="submit" className="ans-btn" onClick={() => this.setState({ isShowing2: true, isShowing1: false,index : index })}>Add Answer</button>
                        </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        let { ques } = this.state
        return (
            <div>
                <Modal
                    className="modal"
                    show={this.state.isShowing1}
                    close={() => this.setState({ isShowing1: false, isShowing2: false, postVal : "" })}
                    submit={this.appendData}>
                    <textarea id="question" type="text" value={this.state.postVal} onChange={this.handleChange}></textarea>
                </Modal>
                <Modal
                    className="modal"
                    show={this.state.isShowing2}
                    close={() => this.setState({ isShowing1: false, isShowing2: false, ansVal : "" })}
                    submit={this.appendans}>
                    <ReactQuill value={this.state.ansVal}   formats={this.formats} modules={this.modules}
                  onChange={this.handleCh} />
                </Modal>
                <div className="container">
                    <div className="top">
                        <h1>All Questions</h1>
                        <button className="ques-btn" onClick={() => this.setState({ isShowing1: true, isShowing2: false })}>Add Questions</button>
                    </div>
                    <div id="qa-container">
                        {this.renderQuestions()}
                    </div>
                </div>
                
            </div>
        );
    }
}



export default Body;