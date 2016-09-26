var React = require('react');
var ImageItem = require('./ImageItem.jsx')

var pictures = [
            {
              "id":1,
              "image":"https://hd.unsplash.com/photo-1464013778555-8e723c2f01f8",
              "title":"Image 1"
            },
            {
              "id":2,
              "image":"https://hd.unsplash.com/photo-1468818519844-64bc429824de",
              "title":"Image 2"
            },
            {
              "id":3,
              "image":"https://hd.unsplash.com/photo-1471623817296-aa07ae5c9f47",
              "title":"Image 3"
            },
            {
              "id":4,
              "image":"https://hd.unsplash.com/photo-1466220666686-90bdba318c9a",
              "title":"Image 4"
            },
            {
              "id":5,
              "image":"https://hd.unsplash.com/photo-1466220666686-90bdba318c9a",
              "title":"Image 5"
            },
            {
              "id":6,
              "image":"https://hd.unsplash.com/photo-1466220666686-90bdba318c9a",
              "title":"Image 6"
            },
            {
              "id":7,
              "image":"https://hd.unsplash.com/photo-1468852747768-9d51ceb4422d",
              "title":"Image 7"
            },
            {
              "id":8,
              "image":"https://hd.unsplash.com/photo-1461360370896-922624d12aa1",
              "title":"Image 8"
            },
            {
              "id":9,
              "image":"https://hd.unsplash.com/photo-1468852747768-9d51ceb4422d",
              "title":"Image 9"
            },
          ]
var Images = React.createClass({
  render: function() {
    var imageItems = pictures.map(function(item) {
      return <ImageItem key={item.id} picture={item.image} title={item.title}/>;
    });
    return(
      <div className="row">
        <div className="col-sm-12">
          {imageItems}
        </div>
      </div>
    );
  }
});

module.exports = Images;
