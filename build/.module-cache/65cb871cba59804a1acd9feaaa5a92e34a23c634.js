var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {class: "commentBox"}, 
				"Comment Box!"
			)
		)
	}
});

React.render(React.createElement(CommentBox, null), document.getElementById('content'));