var React = require('react');
var NewsItem = require('./NewsItem.jsx');

var articles = [
            {
              "id":1,
              "image":"http://placehold.it/50x50",
              "name":"News Title 1",
              "subname":"this is a subheader for news1",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "id":2,
              "image":"http://placehold.it/50x50",
              "name":"News Title 2",
              "subname":"this is a subheader for news2",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              "id":3,
              "image":"http://placehold.it/50x50",
              "name":"News Title 3",
              "subname":"this is a subheader for news3",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
          ];

var News = React.createClass({
  render: function() {
    var newsItems = articles.map(function(item) {
      return <NewsItem key={item.id} article={item.name} subarticle={item.subname} text={item.text} image={item.image}/>;
    });
    return(
      <div className="row">
        <div className="col-sm-12 newsBox">
          {newsItems}
        </div>
      </div>
    );
  }
});

module.exports = News;
