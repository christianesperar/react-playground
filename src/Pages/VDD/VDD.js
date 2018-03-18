import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Description from './../../Components/Description/Description';
import Loading from './../../Components/Loading/Loading';

class VDD extends Component {

  componentDidMount() {
    const renderDOMDate = () => {
      const domHTML = `<div>
                         <h2>DOM</h2>
                         <span>Today is ${new Date().toLocaleTimeString()}.</span>
                       </div>`;

      document.getElementsByClassName('rp-counter__date--dom')[0].innerHTML = domHTML;
    };

    this.domDateInterval = setInterval(renderDOMDate, 1000);

    function renderVirtualDOMDate() {
      const element = (
        <div>
          <h2>Virtual DOM</h2>
          <span>Today is {new Date().toLocaleTimeString()}.</span>
        </div>
      );

      ReactDOM.render(element, document.getElementsByClassName('rp-counter__date--virtual-dom')[0]);
    }

    this.virtualDOMDateInterval = setInterval(renderVirtualDOMDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.virtualDOMDateInterval);
    clearInterval(this.domDateInterval);
  }

  render() {
    return (
      <div className="rp-counter">
        <Description
          header="DOM vs Virtual DOM"
          content="Example of how virtual and normal DOM works, try to inspect the date elements to see it in action. More information can found <a href='https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary' target='_blank'>here</a>"
        />

        <div className="rp-counter__date--dom">
          <Loading text="Please wait" />
        </div>

        <div className="rp-counter__date--virtual-dom"></div>
      </div>
    );
  }
}

export default VDD;
