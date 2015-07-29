var UserProgress = React.createClass({
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
			content = (<LoadingGif />);
		} else {
			content = (<UserRecordsList users={this.state.users} />);
		}
		return (
			<div className="userProgress commonWidget">
				<WidgetHeader title="User Progress" />
				{content}
			</div>
		);
	},

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

var LoadingGif = React.createClass({
	render: function() {
		return (
			<div>
				<img src="http://www.ajaxload.info/cache/FF/FF/FF/00/00/00/19-0.gif" />	
			</div>
		)
	}
})

React.render(<UserProgress />, $('#content')[0]);