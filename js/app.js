"use strict";var ref=new Firebase("https://hearty-robot.firebaseio.com"),Header=React.createClass({displayName:"Header",vote:function(e){var t=this.props.data.id;ref.child("bipolar_results/"+t+"/votos_totales").transaction(function(e){return e?e+1:1}),ref.child("bipolar_results/"+t+"/valor").transaction(function(t){return t?t+e:e}),this.props.fetch()},render:function(){return React.createElement("div",{className:"text-center"},React.createElement("h1",null,this.props.data.verbo),React.createElement("div",{className:"button-group expanded"},React.createElement("a",{className:"button alert",onClick:this.vote.bind(this,-1)},"Negativo"),React.createElement("a",{className:"button",onClick:this.vote.bind(this,0)},"Neutral"),React.createElement("a",{className:"button success",onClick:this.vote.bind(this,1)},"Positivo")))}}),Container=React.createClass({displayName:"Container",getInitialState:function(){return{}},getData:function(){var e=Math.floor(2230*Math.random());ref.child("bipolar").orderByChild("id").equalTo(e).once("child_added",function(t){this.setState({verbo:t.val().verbo,id:e})}.bind(this))},componentWillMount:function(){this.getData()},render:function(){return React.createElement("div",{className:"row"},React.createElement("div",{className:"small-10 medium-6 large-4 small-centered medium-centered large-centered"},React.createElement(Header,{data:this.state,fetch:this.getData})))}});ReactDOM.render(React.createElement(Container,null),document.getElementById("content"));