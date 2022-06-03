import React, {Component} from "react";

import '../post-list-item/post-list-item.css';

export default class PostListItem extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         follow: false,
    //         like: false
    //     };
    //     this.onFollow = this.onFollow.bind(this);
    //     this.onLike = this.onLike.bind(this);
    // }


        // onFollow(){
        //     this.setState(({follow}) =>({
        //         follow: !follow
        //     }))
        // }

        // onLike(){
        //     this.setState(({like}) =>({
        //         like: !like
        //     }))
        // }


    render() {
        const {label, onDelete, onToggleFollow, onToggleLiked, follow, like} = this.props;
        // const {follow, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (follow) {
            classNames += ' follow';
        }

        if (like) {
            classNames += ' like';
        }
        return(
            <div className={classNames}>
            <span 
            className="app-list-item-label"
            onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button" 
                className="btn-star btn-sm"
                onClick={onToggleFollow}>
                    <i className="fa fa-star"></i>
                </button>
                <button 
                type="button" 
                className="btn-trash btn-sm"
                onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}

