import { useState, useEffect } from "react";

function PostItem(props) {
  const { id, title, body } = props;
  return (
    <>
      <div className="postItem" key={id}>
        <div className="postBox">
          <div className="id">No.{id}</div>
          <div className="title">-{title}</div>
        </div>
        {/* 최대 50자, 그 위는 짜름 */}
        <p className="body">{body.slice(0, 50)}...</p>
      </div>
    </>
  );
}

export default PostItem;
