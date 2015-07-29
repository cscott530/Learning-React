var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				"Comment Box!"
			)
		);
	}
});

var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("span", null, "Second Item")
		);
	}
});

React.render(React.createElement(CommentList, null), $('#content')[0]);