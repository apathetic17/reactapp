import React from "react";
import { Button } from 'reactstrap';
import '../post-status-filter/post-status-filter.css';


const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            
            <button outline color="info" >Все товары</button>
            <button className="btn btn-info">Все товары</button>
            <button type="button" className="btn btn-outline-secondary">Добавлено в избранное</button>
        </div>
    )
}

export default PostStatusFilter;