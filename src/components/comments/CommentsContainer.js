import React from 'react';
import CommentComponent from './CommentComponent';

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenComments: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        });
    }

    render() {
        const {comments} = this.props;
        return (
            <div className="commentAuthor">

                <button className={`butClass btn ${this.state.isOpenComments
                    ? 'btn-danger'
                    : 'btn-success'
                }`}
                        onClick={this.onButtonClick}
                >
                    {this.state.isOpenComments
                        ? 'Close'
                        : 'Open'
                    }
                </button>

                {this.state.isOpenComments && (
                    <div className="card">
                        {comments.map(comment => (
                            <CommentComponent author={comment.author}
                                              commentText={comment.commentText}
                                              likes={comment.likes}
                                              key={comment.author}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default CommentsContainer;

