var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				"Comment Box!"
			)
		)
	}
});

React.render(React.createElement(CommentBox, null), $('#content')[0]);