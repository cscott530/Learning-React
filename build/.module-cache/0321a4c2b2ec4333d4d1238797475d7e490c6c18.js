var UserProgress = React.createClass({displayName: "UserProgress",
	render: function() {

		return (
			React.createElement("div", {className: "userProgress"}, 
				React.createElement(WidgetHeader, {title: "User Progress"}), 
				React.createElement(UserRecordsList, {users: this.props.users})
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
		var userRecords = this.props.users.map(function(u) {
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
		var userProgressCharts = this.props.user.progress.map(function(c) {
			return (React.createElement(UserProgressChart, {progress: c}))
		});
		return (
			React.createElement("div", {className: "userRecord"}, 
				React.createElement("span", {className: "userName"}, this.props.user.name), 
				 userProgressCharts 
			)
		);
	}
});

var UserProgressChart = React.createClass({displayName: "UserProgressChart",
	render: function() {
		return (
			React.createElement("div", {className: "userProgressChart", title: this.props.progress.name}, 
				React.createElement("div", {className: "userProgressChartFill", style: { height: this.props.progress.progress}})
			)
		);
	}
})

var users = [
	{
		name: 'Chris',
		progress: [
			{
				name: 'Cert 1',
				progress: '85%'
			},
			{
				name: 'Cert 2',
				progress: '75%'
			}
		]
	},
	{
		name: 'Second User',
		progress: []
	}
];
React.render(React.createElement(UserProgress, {users: users}), $('#content')[0]);