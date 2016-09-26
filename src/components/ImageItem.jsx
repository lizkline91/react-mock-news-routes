var React = require('react');
var ImageItem = React.createClass({
  render: function() {
    return (
      <div className="col-md-4 imgContainer" >
        <img className="fitContainer" src={this.props.picture}/>
      </div>
    );
  }
});

module.exports = ImageItem
