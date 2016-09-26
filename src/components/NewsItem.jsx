var React = require('react');
var NewsItem = React.createClass({
  render: function() {
    return (
      <div className="row newsItems">
        <div className="col-md-2 imgCol">
          <img src={this.props.image}/>
        </div>
        <div className="col-md-10">
          <h3>{this.props.article}</h3>
          <h5 className="subArticle">{this.props.subarticle}</h5>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
});

module.exports = NewsItem
