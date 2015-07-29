var UserProgress = React.createClass({displayName: "UserProgress",
	getInitialState: function() {
		return {
			loading: true,
			users: []
		};
	},
	loadUsersFromServer: function() {
		//e.g.
		setTimeout(function() {
			this.setState({
				loading: false,
				users: [
					{
						name: 'Chris',
						progress: [
							{
								name: 'Cert 1',
								progress: '85'
							},
							{
								name: 'Cert 2',
								progress: '75'
							}
						]
					},
					{
						name: 'Second User',
						progress: []
					}
				]
			});
		}.bind(this), 1000);
	},
	componentDidMount: function() {
		this.loadUsersFromServer();
	},
	render: function() {
		var content = '';
		if (this.state.loading) {
			content = (React.createElement(LoadingGif, null));
		} else {
			content = (React.createElement(UserRecordsList, {users: this.state.users}));
		}
		return (
			React.createElement("div", {className: "userProgress commonWidget"}, 
				React.createElement(WidgetHeader, {title: "User Progress"}), 
				content
			)
		);
	},

});

var WidgetHeader = React.createClass({displayName: "WidgetHeader",
	render: function() {
		return (
			React.createElement("h2", {className: "widgetHeader"}, this.props.title)
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
		var userProgressCharts = '';
		if (this.props.user.progress.length > 0) {
			userProgressCharts = this.props.user.progress.map(function(c) {
				return (React.createElement(UserProgressChart, {progress: c}))
			});
		} else {
			userProgressCharts = (React.createElement(NoProgressCharts, {user: this.props.user}));
		}
		return (
			React.createElement("div", {className: "userRecord"}, 
				React.createElement("span", {className: "userName"}, this.props.user.name), 
				React.createElement("div", {className: "progressCharts"}, 
					 userProgressCharts 
				)
			)
		);
	}
});

var NoProgressCharts = React.createClass({displayName: "NoProgressCharts",
	render: function() {
		return (
			React.createElement("div", null, "No recent progress for ", this.props.user.name)
		);
	}
});

var UserProgressChart = React.createClass({displayName: "UserProgressChart",
	render: function() {
		var progress = this.props.progress.progress;
		return (
			React.createElement("div", {className: "userProgressChart", title: this.props.progress.name}, 
				React.createElement("div", {className: "userProgressChartFill", style: { height: progress + '%', top: (100 - progress) + '%'}})
			)
		);
	}
});

var LoadingGif = React.createClass({displayName: "LoadingGif",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("img", {src: "http://www.ajaxload.info/cache/FF/FF/FF/00/00/00/19-0.gif"})	
			)
		)
	}
})

React.render(React.createElement(UserProgress, null), $('#content')[0]);