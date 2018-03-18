import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: '•',
    };
  }

  componentDidMount() {
    const renderLoading = () => {
      let { loading } = this.state;

      if (loading.slice(-3) === '•••') {
        loading = '•';
      } else {
        loading += '•';
      }

      this.setState({
        loading,
      });
    };

    this.loadingInterval = setInterval(renderLoading, 300);
  }

  componentWillUnmount() {
    clearInterval(this.loadingInterval);
  }

  render() {
    return (
      <div className="rp-loading">
        <span className="rp-loading__bullet">
          {this.state.loading}
        </span>

        <br />

        <span className="rp-loading__text">
          {this.props.text}
        </span>
      </div>
    );
  }
}

export default Loading;
