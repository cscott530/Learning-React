var UserProgress = React.createClass({displayName: "UserProgress",
	render: function() {
		return (
			React.createElement("div", {className: "userProgress"}, 
				React.createElement(WidgetHeader, {title: "User Progress"})
			)
		);
	}
});


React.render(React.createElement(UserProgress, null), $('#content')[0]);