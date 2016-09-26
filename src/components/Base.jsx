var React = require('react');

var Base = React.createClass({
  render: function() {
    return(
      <div>
        <nav className="navbar navbar-liz">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand leftBrand" href="#">
                <h2>Liz's News</h2>
                <h5>this is a sub header</h5>
              </a>
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#/news">
                    NEWS
                  </a>
                </li>
                <li>
                  <a href="#/images">
                    IMAGES
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
        <div className="footer-liz">
          <p>this is a footer</p>
        </div>
      </div>
    );
  }
});

module.exports = Base;
