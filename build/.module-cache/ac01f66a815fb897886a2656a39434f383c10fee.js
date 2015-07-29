var UserProgress = React.createClass({displayName: "UserProgress",
	render: function() {

		return (
			React.createElement("div", {className: "userProgress"}, 
				React.createElement(WidgetHeader, {title: "User Progress"})
			)
		);
	}
});

var WidgetHeader = React.createClass({displayName: "WidgetHeader",
	render: function() {
		return (
			React.createElement("h2", null, this.props.title)
		);
	}
});

var UserRecordsList = React.createClass({displayName: "UserRecordsList",
	render: function() {
		var commentNodes = this.props.data.map(function(c) {
			return (React.createElement(Comment, {author: c.author}, c.content))
		});
		return (
			React.createElement("div", {className: "commentList"}, 
				commentNodes
			)
		);
	}
});

var UserRecord = React.createClass({displayName: "UserRecord",
	render: function() {
		return (
			React.createElement("div", null, 
				"Name"
			)
		);
	}
});

var users = [
	{
		name: 'Chris'
	}
]
React.render(React.createElement(UserProgress, {users: users}), $('#content')[0]);