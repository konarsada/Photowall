import React, { Component } from 'react';
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PhotoWall extends Component {
    render() {
        return <div>
            <Link className="addIcon" to="/AddPhoto">+</Link>

            <div className="photo-grid">
                {this.props.posts
                    .sort((x, y) => y.id - x.id) // descending order
                    .map((post) => <Photo key={post.id} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
            </div>
        </div>
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall;