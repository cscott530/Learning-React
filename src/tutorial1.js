var CommentBox = React.createClass({
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
			<div className="commentBox">
				<h1>Comment Box</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.newCommentAdded}/>
			</div>
		);
	},
	newCommentAdded: function(comment) {
	    var comments = this.state.data;
	    var newComments = comments.concat([comment]);
	    this.setState({data: newComments});
	    this.loadCommentsFromServer();
	}
});

var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(c) {
			return (<Comment author={c.author}>{c.content}</Comment>)
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="author" />
				<input type="text" placeholder="Say something..." ref="content" />
				<input type="submit" value="Post" />
			</form>
		);
	},
	handleSubmit: function(e) {
		e.preventDefault();

		var author = React.findDOMNode(this.refs.author).value.trim();
		var content = React.findDOMNode(this.refs.content).value.trim();

		if (!content || !author) {
			return;
		}

		var comment = {
			author: author,
			content: content
		};

		React.findDOMNode(this.refs.author).value = '';
		React.findDOMNode(this.refs.content).value = '';

		this.props.onCommentSubmit(comment);
	}
});

var Comment = React.createClass({
	render: function() {
		var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
        		<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
			</div>
		);
	}
});
React.render(<CommentBox pollInterval={500}/>, $('#content')[0]);