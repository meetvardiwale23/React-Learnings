import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserData = () => {
  const postCount = 5;
  // const [post, setPostData] = useState({post: [],comment:[]});
  const [getPost,setPost] = useState([]);
  const [showComment, setShowComment] = useState(false)
  const [nextPost, setNextPost] = useState([postCount]);

  const userID = useLocation();
  const id = userID.state.id;

  const getAllUserPost = async () => {
    // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //   .then((response) => response.json())
    //   .then((json) => setPostData(json));

    let postURL = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

    const fetchPost = await fetch(postURL);
    const fetchPostData = await fetchPost.json();

    // let setBooleanData = fetchPostData.map((postObject) => {
    //   return {
    //     ...postObject,
    //     showcomment: false,
    //   };
    // });
    //const post = {post : fetchPostData,show}

    setPost(fetchPostData);
  };

  useEffect(() => {
    getAllUserPost();
  }, []);

  const getPostComments = async (event) => {
    const postID = event.currentTarget.id;
    console.log("post id", postID);

    let url = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`;

    const fetchComments = await fetch(url);
    const fetchCommentData = await fetchComments.json();

    //const constComment = {CommentsData : fetchCommentDat}
    const data = getPost.map((p)=>{
      if(p.id == postID){
          return {
            ...p,showComment:!showComment,comment:fetchCommentData
          }
      }
      return p
    })

    setPost(data)

    // let setBooleanData = fet.map((commentObject) => {
    //   return {
    //     ...commentObject,
    //     showcomment: true,
    //   };
    // });

    // setCommentData(setBooleanData);
    // post.map((postcomments) => {
    //   if (postcomments.id == postID) {
    //     if (!postcomments.showcomment) {
    //       const newObj = { ...postcomments, showcomment: true };
    //       const updateMainObj = post.map((p) =>
    //         p.id == newObj.id ? newObj : p
    //       );
    //       setPostData(updateMainObj);
    //       return;
    //     }else{
    //       const newObj = { ...postcomments, showcomment: false };
    //       const updateMainObj = post.map((p) =>
    //         p.id == newObj.id ? newObj : p
    //       );
    //       setPostData(updateMainObj);
    //       return;
    //     }
    //   }
    // });
  };

  const readMore = () => {
    setNextPost(nextPost + postCount);
  };

  console.log("posts",getPost);

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const userForm = () =>{
    navigate('/createpost');
  }
  return (
    <>

        
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        
        
        {getPost.slice(0, nextPost).map((posts) => (
          <>
            <div
              className="userContent"
              key={posts.id}
              style={{
                border: "1px solid black",
                width: "60%",
                padding: "20px",
              }}
            >
              <div className="postID">
                <label>
                  <strong>Post ID : {posts.id}</strong>
                </label>
              </div>

              <div className="postTitle">
                <label>
                  <strong>Post Title :</strong>
                  <p> {posts.title}</p>
                </label>
              </div>
              <div className="postBody">
                <label>
                  <strong>Post Content :</strong>
                </label>
                <p>{posts.body}</p>
              </div>
              <div>
                <button id={posts.id} onClick={(e)=>{setShowComment(!showComment);getPostComments(e)}}>
                  View Comments
                </button>
              </div>
              {console.log({posts})}
              {posts.showComment ? (
                <div className="comments" key={posts.id}>
                  {posts.comment.map(
                    (comments) =>
                      comments.postId == posts.id && (
                        <div
                          className="commentsData"
                          key={comments.id}
                          style={{
                            border: "2px solid gray",
                            padding: "10px",
                            marginTop: "3%",
                            borderRadius: "25px",
                            boxShadow:
                              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                          }}
                        >
                          <div className="userName" style={{}}>
                            <label>
                              <strong>user Name: </strong>
                              {comments.name}
                            </label>
                            <label>
                              {" "}
                              <strong>Comments :</strong> {comments.body}
                            </label>
                          </div>
                        </div>
                      )
                  )}
                </div>
              ) : null} 
            </div>
          </>
        ))}
      </div>

      <div
        className="ReadMore"
        style={{
          marginBottom: "5%",
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <button
          onClick={readMore}
          style={{
            height: "45px",
            width: "150px",
            margintop: "4%",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            fontSize: 18,
            fontweight: "bolder",
          }}
        >
          Read More...
        </button>

        <button
          onClick={goBack}
          style={{
            height: "45px",
            width: "150px",
            margintop: "4%",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            fontSize: 18,
            fontweight: "bolder",
          }}
        >
          Back
        </button>
        
        <button
          onClick={userForm}
          style={{
            height: "45px",
            width: "150px",
            margintop: "4%",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            fontSize: 18,
            fontweight: "bolder",
          }}
        >
          Create Post
        </button>

        
      </div>
    </>
  );
};

export default UserData;
