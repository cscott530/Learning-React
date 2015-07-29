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
		var userRecords = this.props.data.map(function(u) {
			return (React.createElement(UserRecord, {user: u}))
		});
		return (
			React.createElement("div", {className: "userRecordList"}, 
				userRecords
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