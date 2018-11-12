import React, { Component } from "react";
import Link from "react-router-dom/Link";
import reactlogo from '../images/react.png'
import { connect } from 'react-redux'

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       this.setState({
  //         posts: response.data.slice(0, 10),
  //       })
  //     })
  // }

  render() {
    // const { posts } = this.state;
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={reactlogo} alt="a logo" />
            <div className="card-content">
              <Link to={'/post/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center">No posts yet</div>
      )

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <div className="home">{postList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);