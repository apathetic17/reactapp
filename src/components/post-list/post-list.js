import React from "react";

import '../post-list/post-list.css';
import { ListGroup, ListGroupItem } from "reactstrap";

import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleFollow ,onToggleLiked}) => {

    const elements = posts.map((item) =>{
        const{id, ...itemProps} = item;
        return(
            <li key={id} className='list-group-item'>
                <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleFollow={() => onToggleFollow(id)}
                onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    })

    return (
        <ListGroup flush className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;