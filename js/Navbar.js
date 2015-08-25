var $ = require('jquery');
var React = require('react');

var Navbar = React.createClass({
  getLogo: function () {
    return (
      <div className="navbar-logo">
        <a href="https://www.ycombinator.com"><img src="../img/y18.gif"/></a>
      </div>
    );
  },

  getTitle: function () {
    return (
      <div className="navbar-title">
        <a className="navbar-textLink" href="https://news.ycombinator.com">Hacker News</a>
      </div>
    );
  },
  
  getNav: function () {
    var navLinks = [
      {
        name: 'new',
        url: 'newest'
      },
      {
        name: 'comments',
        url: 'newcomments'
      },
      {
        name: 'show',
        url: 'show'
      },
      {
        name: 'ask',
        url: 'ask'
      },
      {
        name: 'jobs',
        url: 'jobs'
      },
      {
        name: 'submit',
        url: 'submit'
      }
    ];
    
    var finalNavLinks = [];
    navLinks.forEach(function (navLink) {
        finalNavLinks.push(
            <a key={navLink.url} className="navbar-navLink navbar-textLink" href={'https://news.ycombinator.com/' + navLink.url}>
              {navLink.name}
            </a>
        )
    });
    
    return (
      <div className="navbar-nav">
        {
            finalNavLinks
        }
      </div>
    );
  },
    
  getLogin: function () {
    return (
      <div className="navbar-login">
        <a className="navbar-textLink" href="https://news.ycombinator.com/login?whence=news">login</a>
      </div>
    );
  },
    
  render: function () {
    return (
      <div className="navbar">
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
        {this.getLogin()}
      </div>
    );
  }
});

module.exports = Navbar;