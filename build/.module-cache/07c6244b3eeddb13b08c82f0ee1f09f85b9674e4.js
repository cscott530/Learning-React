var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comment Box"), 
				React.createElement(CommentList, null), 
				React.createElement(CommentForm, null)
			)
		);
	}
});

var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
				React.createElement(Comment, {author: "Chris Scott"}, "This is the first comment `Test`"), 
				React.createElement(Comment, {author: "Mark Twain"}, "Second comment!")
			)
		);
	}
});

var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return (
			React.createElement("div", {className: "commentForm"}, 
				"Comment Form"
			)
		);
	}
});

var Comment = React.createClass({displayName: "Comment",
	render: function() {
		var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
		return (
			React.createElement("div", {className: "comment"}, 
				React.createElement("h2", {className: "commentAuthor"}, 
					this.props.author
				), 
        		React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
			)
		);
	}
});


React.render(React.createElement(CommentBox, null), $('#content')[0]);