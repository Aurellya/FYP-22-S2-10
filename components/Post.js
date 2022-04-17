import React from "react";
import Link from "next/dist/client/link";

const Post = ({ post }) => {
  return (
    <div className="card mb-5" style={{ width: "360px" }}>
      <img src={post.frontmatter.cover_image} alt="" className="card-img-top" />
      <div className="card-footer">
        <small className="text-muted">Posted on {post.frontmatter.date}</small>
      </div>
      <div className="card-body">
        <h5 className="card-title">{post.frontmatter.title}</h5>
        <p className="card-text">{post.frontmatter.excerpt}</p>
      </div>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn btn-read-more">Read More</a>
      </Link>
    </div>
  );
};

export default Post;
