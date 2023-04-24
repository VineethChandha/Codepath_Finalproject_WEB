import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";


function CreatePost(){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] =useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { error } = await supabase.from('posts').insert(
                { title: title,
                body: body,
                author: author 
                });

            if(error){
                throw error;
            }

            navigate("/");
        } catch (error) {
            console.log("Error creating post: ", error.message);
        }

    };


    return(
     <div className="container">
        <h2>Create a new post</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter title"
                    value={title}
                    onChange={(event)=>setTitle(event.target.value)}
                    required
                    />
            </div>
            <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                    className="form-control"
                    id="body"
                    rows="5"
                    placeholder="Enter post body"
                    value={body}
                    onChange={(event)=>setBody(event.target.value)}
                    required
                    ></textarea>
            </div>
            <div className="form-group">
            <input 
                    type="text"
                    className="form-control"
                    id="author"
                    placeholder="Enter author"
                    value={author}
                    onChange={(event)=>setAuthor(event.target.value)}
                    required
                    />
            </div>
            <button type="submit" className="btn btn-primary">Create Post</button>
        </form>
     </div>
    );
}

export default CreatePost;