var Navbar = require("./Navbar");
var Article = require("./Article");
var React = require('react');

var ArticleList = React.createClass({
    fetchMore: function() {
        this.props.page = this.props.page + 1;
        var moreHref = "?p=" + this.props.page;
        return (
            <div className="articleList-more">
                <a className="articleList-moreLink" href={moreHref}>More</a>
            </div>
        );
    },
    
    render: function () {
        var finalItems = [];
        this.props.items.forEach(function(item, index) {
            finalItems.push(<Article key={item.id} item={item} rank={index + 1 + (30 * (this.props.page - 1))}/>)
        }.bind(this));
        return (
            <div className="articleList">
                <Navbar/>
                <div className="articleList-articles">
                    {finalItems }
                </div>
                {this.fetchMore()}
            </div>
        );
    }
});

module.exports = ArticleList;