var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "commentList"})
		);
	}
});

var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return (
			React.createElement("div", {className: "commentForm"})
		);
	}
});

var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				"Comment Box!"
			)
		);
	}
});


React.render(React.createElement(CommentBox, null), $('#content')[0]);