import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";
import Post from "../../components/Post";
import Head from "next/head";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>FYP-22-S2-10 - Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="py-5 container">
        <h3 className="text-center">Blog</h3>
        <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {posts.map((post, index) => (
            <div className="col px-4" key={index}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  // get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    // get frontnmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
