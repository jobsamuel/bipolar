const ref = new Firebase('https://hearty-robot.firebaseio.com');

const Header = React.createClass({
  vote: function(value) {
    const vb = this.props.data.verbo;
    const id = this.props.data.id;

    ref.child(`bipolar_results/${id}/${vb}/value`).set(value, function(error) {
      if (error) {
        return console.error(error);
      }

      this.props.fetch();
    }.bind(this));
  },
  render: function() {
    return (
      <div className="text-center">
        <h1>{this.props.data.verbo}</h1>
          <div className="button-group expanded">
          <a className="button alert" onClick={this.vote.bind(this, -1)}>Negativo</a>
          <a className="button" onClick={this.vote.bind(this, 0)}>Neutral</a>
          <a className="button success" onClick={this.vote.bind(this, 1)}>Positivo</a>
        </div>
      </div>
    )
  }
});

const Container = React.createClass({
  getInitialState: function() {
    return {}
  },
  getData: function() {
    const id = Math.floor(Math.random()*2230);

    ref.child('bipolar').orderByChild('id').equalTo(id).once('child_added', function(snapshot) {
      this.setState({
        verbo: snapshot.val().verbo,
        id: id
      });
    }.bind(this));
  },
  componentWillMount: function() {
    this.getData();
  },
  render: function() {
    return (
      <div className="row">
        <div className="small-10 medium-6 large-4 small-centered medium-centered large-centered">
          <Header data={this.state} fetch={this.getData}/>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Container />,
  document.getElementById('content')
);
