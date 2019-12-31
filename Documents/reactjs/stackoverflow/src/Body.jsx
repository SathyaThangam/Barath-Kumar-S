import React from 'react';
import './App.css';
import Modal from './component/Modal';
class Body extends React.Component {

    constructor() {
        super();

        this.state = {

            ques: [{
                name: "hii?",
                answer: [{
                    name: "Yes"
                }]
            }],
            postVal: "",
            isShowing1: false,
            isShowing2: false,
            ansVal: "",
            index: ""
        }
        this.appendans = this.appendans.bind(this);
        this.handleans = this.handleans.bind(this);
        this.appendData = this.appendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    appendans = () => {
        let {ques} = this.state;
        ques[this.state.index].answer.push({name : this.state.ansVal })
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

    handleChange(e) {
        let getTextAreaValue = e.target.value;
        this.setState({
            postVal: getTextAreaValue
        });
    }
    handleans(e) {
        let getTextAreaValue = e.target.value;
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
                                            <div>
                                                {<div>Answer: {ans.name}</div>}
                                            </div>
                                        )
                                    })}
                                </div> : "no answer"}
                        </div>
                        <button type="submit" onClick={() => this.setState({ isShowing2: true, isShowing1: false,index : index })}>Add Answer</button>
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
                <div className="container">
                    <div className="top">
                        <h1>All Questions</h1>
                        <button className="ques-btn" onClick={() => this.setState({ isShowing1: true, isShowing2: false })}>Add Questions</button>
                    </div>
                    <div id="qa-container">
                        {this.renderQuestions()}
                    </div>
                </div>
                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
                <Modal
                    className="modal"
                    show={this.state.isShowing1}
                    close={() => this.setState({ isShowing1: false, isShowing2: false })}
                    submit={this.appendData}>
                    <textarea id="question" type="text" value={this.state.postVal} onChange={this.handleChange}></textarea>
                </Modal>
                <Modal
                    className="modal"
                    show={this.state.isShowing2}
                    close={() => this.setState({ isShowing1: false, isShowing2: false })}
                    submit={this.appendans}>
                    <textarea id="answer" type="text" value={this.state.ansVal} onChange={this.handleans}></textarea>
                </Modal>
            </div>
        );
    }
}



export default Body;