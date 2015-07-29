var UserProgress = React.createClass({
	render: function() {

		return (
			<div className="userProgress commonWidget">
				<WidgetHeader title="User Progress" />
				<UserRecordsList users={this.props.users} />
			</div>
		);
	}
});

var WidgetHeader = React.createClass({
	render: function() {
		return (
			<h2 className="widgetHeader">{this.props.title}</h2>
		);
	}
});

var UserRecordsList = React.createClass({
	render: function() {
		var userRecords = this.props.users.map(function(u) {
			return (<UserRecord user={u}/>)
		});
		return (
			<div className="userRecordList">
				{userRecords}
			</div>
		);
	}
});

var UserRecord = React.createClass({
	render: function() {
		var userProgressCharts = '';
		if (this.props.user.progress.length > 0) {
			userProgressCharts = this.props.user.progress.map(function(c) {
				return (<UserProgressChart progress={c}/>)
			});
		} else {
			userProgressCharts = (<NoProgressCharts user={this.props.user} />);
		}
		return (
			<div className="userRecord">
				<span className="userName">{this.props.user.name}</span>
				<div className="progressCharts">
					{ userProgressCharts }
				</div>
			</div>
		);
	}
});

var NoProgressCharts = React.createClass({
	render: function() {
		return (
			<div>No recent progress for {this.props.user.name}</div>
		);
	}
});

var UserProgressChart = React.createClass({
	render: function() {
		var progress = this.props.progress.progress;
		return (
			<div className="userProgressChart" title={this.props.progress.name}>
				<div className="userProgressChartFill" style={{ height: progress + '%', top: (100 - progress) + '%' }} />
			</div>
		);
	}
});

var users = [
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
];
React.render(<UserProgress users={users}/>, $('#content')[0]);