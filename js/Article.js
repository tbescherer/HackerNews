var $ = require('jquery');
var React = require('react');
var url = require('url')
var moment = require('moment');
var Article = React.createClass({
    
    getDomain: function() {
        return url.parse(this.props.item.url).hostname;
    },
    
    getCommentLink: function () {
        var commentText = 'discuss';
        if (this.props.item.kids && this.props.item.kids.length) {
          commentText = this.props.item.kids.length + ' comments';
        }
    
        return (
          <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
        );
    },

    getSubtext: function () {
        return (
          <div className="article-subtext">
            {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> | {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
          </div>
        );
    },
    
    getTitle: function () {
        return (
          <div className="article-title">
            <a className="article-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
            <span className="article-domain">({this.getDomain()})</span>
          </div>
        );
    }, 
    
    getRank: function () {
        return (
          <div className="article-rank">
            {this.props.rank}.
          </div>
        );
    },

    getVote: function () {
        return (
          <div className="article-vote">
            <a href={'https://news.ycombinator.com/vote?for=' + this.props.item.id + '&dir=up&whence=news'}>
              <img src="../img/grayarrow2x.gif" width="10"/>
            </a>
          </div>
        );
    },

    render: function () {
        return (
          <div className="article">
            {this.getRank()}
            {this.getVote()}
            <div className="article-itemText">
              {this.getTitle()}
              {this.getSubtext()}
            </div>
          </div>
        );
    }
});


module.exports = Article;