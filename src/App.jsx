import React from 'react';
import defaultDataset from "./dataset"
import './assets/styles/style.css';
import {AnswersList} from "./components/index";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            chats: [],
            currentId: "init",
            dataset: defaultDataset,
            open: false
        }
    }

    initAnsers = () => {
        const initDataset = this.state.dataset[this.state.currentId];
        const initAnsers = initDataset.answers;

        this.setState({
            answers: initAnsers
        })
    }

    componentDidMount() {
        this.initAnsers()
    }

    render () {
        return (
            <section className="c-section">
                <div className="c-box">
                    <AnswersList answers={this.state.answers} />
                </div>
            </section>
        );
    }
}
