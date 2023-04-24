import React, { useEffect, useState} from "react";
import PostDisplay from "../components/PostDisplay";
import { supabase } from "../supabaseClient";

function Home(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const { data }=await supabase.from("posts").select("*");
            setPosts(data);
        }

        fetchData();
    },[]);


    return(
        <div>
            {posts.map((post) => (
                <PostDisplay 
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    body={post.body}
                    date={post.created_at}
                    />
            ))}
        </div>
    );
}

export default Home;