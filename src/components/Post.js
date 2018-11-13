import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         "Post": ""
    //     }
    // }

    // componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //     axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
    //     .then(response => {
    //         this.setState({
    //             Post: response.data
    //         })
    //     });
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render() {
        console.log(this.props);
        //const post = this.state.Post;
        const post = this.props.post;

        const postDetail = post ?
            (
                <div>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <div className="center">
                        <button className="btn red darken-4" onClick={this.handleClick}>Delete Post</button>
                    </div>
                </div>
            ) :
            (
                <div>This post is no longer awailable.</div>
            )

        return (
            <div className="container">
                {postDetail}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(t => t.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            //dispatch({ type: 'DELETE_POST', id: id })
            // veya aşağıdaki yöntemle dispatch edilebiliyor.
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
