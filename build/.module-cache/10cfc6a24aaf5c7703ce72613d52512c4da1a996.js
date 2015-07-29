var CommentBox = React.createClass({displayName: "CommentBox",
	getInitialState: function() {
		return {
			data: []
		};
	},
	loadCommentsFromServer: function() {
		setTimeout(function() {
			this.setState({
				data: [
					{author: 'Chris Scott', content: 'This is the **first** comment'},
					{author: 'M T', content: 'Second'}
				]
			});
		}.bind(this), 1000);
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comment Box"), 
				React.createElement(CommentList, {data: this.state.data}), 
				React.createElement(CommentForm, null)
			)
		);
	}
});

var CommentList = React.createClass({displayName: "CommentList",
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

var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return (
			React.createElement("form", {className: "commentForm"}, 
				React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
				React.createElement("input", {type: "text", placeholder: "Say something...", ref: "text"}), 
				React.createElement("input", {type: "submit", value: "Post"})
			)
		);
	},
	handleSubmit: function(e) {
		e.preventDefault();

		var author = React.findDOMNode(this.refs.author).value.trim();
		var text = React.findDOMNode(this.refs.text).value.trim();

		if (!text || !author) {
			return;
		}

		console.log("By: " + author);
		console.log("Comment: " + text);
	}
});

var Comment = React.createClass({displayName: "Comment",
	render: function() {
		var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
		return (
			React.createElement("div", {className: "comment"}, 
				React.createElement("h2", {className: "commentAuthor"}, 
					this.props.author
				), 
        		React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
			)
		);
	}
});
React.render(React.createElement(CommentBox, {pollInterval: 500}), $('#content')[0]);