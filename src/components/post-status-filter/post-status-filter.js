import React from "react";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-info">Все товары</button>
            <button type="button" className="btn btn-outline-secondary">Добавлено в избранное</button>
        </div>
    )
}

export default PostStatusFilter;