const Header = React.createClass({
  render: () =>
    <div className="verb">
      <h1>{this.props.data}</h1>
    </div>
});

ReactDOM.render(
  <Header data="Bipolar" />,
  document.getElementById('content')
);