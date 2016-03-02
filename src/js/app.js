const Title = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <h1>{this.props.data}</h1>
      </div>
    )
  }
});

const Buttons = React.createClass({
  render: function() {
    return (
      <div className="button-group expanded">
        <a className="button alert">Negativo</a>
        <a className="button">Neutral</a>
        <a className="button success">Positivo</a>
      </div>
    )
  }
});

const Container = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="small-10 medium-6 large-4 small-centered medium-centered large-centered">
          <Title data="Bipolar" />
          <Buttons />
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Container />,
  document.getElementById('content')
);