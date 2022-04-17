import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const PostPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  useEffect(() => {
    // const children = document.querySelectorAll("div > table");
    // console.log(children);
    console.log("hi");
  }, []);

  return (
    <div className="pt-5 pb-5 bg-light container">
      <h3>{title}</h3>
      <p>Posted on {date}</p>
      {/* <img src={cover_image} alt="" className="w-50" /> */}
      <br />
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          style={{ overflow: "scroll" }}
        ></div>
      </div>
    </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
