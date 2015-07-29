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