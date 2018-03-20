import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Description from './../../Components/Description/Description';
import Loading from './../../Components/Loading/Loading';

class VDD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoading: true,
    };
  }

  componentDidMount() {
    const renderDOMs = () => {
      this.setState({
        showLoading: false,
      });

      const domHTML = `<div>
                         <h2>DOM</h2>
                         <span>Today is ${new Date().toLocaleTimeString()}.</span>
                       </div>`;

      document.getElementsByClassName('rp-counter__date--dom')[0].innerHTML = domHTML;

      const virtualDOMHTML = (
        <div>
          <h2>Virtual DOM</h2>
          <span>Today is {new Date().toLocaleTimeString()}.</span>
        </div>
      );

      ReactDOM.render(virtualDOMHTML, document.getElementsByClassName('rp-counter__date--virtual-dom')[0]);
    };

    this.state.domInterval = setInterval(renderDOMs, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.domInterval);
  }

  render() {
    return (
      <div className="rp-counter">
        <Description
          header="DOM vs Virtual DOM"
          content="Example of how virtual and normal DOM works, try to inspect the date elements to see it in action. More information can found <a href='https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary' target='_blank'>here</a>"
        />

        {this.state.showLoading && <Loading text="Please wait" />}

        {!this.state.showLoading &&
          <div>
            <div className="rp-counter__date--dom"></div>
            <div className="rp-counter__date--virtual-dom"></div>
          </div>
        }
      </div>
    );
  }
}

export default VDD;
