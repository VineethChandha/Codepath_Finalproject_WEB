import React from "react";


function PostDisplay(props){

    return(
        <div className="post">
            <h2>{props.title}</h2>
            <p>By {props.author}</p>
            <p>{props.body}</p>
            <p>{props.date}</p>
        </div>
    );

}

export default PostDisplay;