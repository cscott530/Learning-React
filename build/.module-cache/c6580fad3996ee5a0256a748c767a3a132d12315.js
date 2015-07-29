var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
			"Comment List"
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

var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}
				
			)
		);
	}
});


React.render(React.createElement(CommentBox, null), $('#content')[0]);