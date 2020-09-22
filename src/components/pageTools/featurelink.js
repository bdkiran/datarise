import React from "react";
import style from "./featurelink.module.css";
import FeatureImage from "./featureImage";

/* Used to create card links for the home page. */
const FeatureLink = ({ post }) => (
    <a className={style.fetContainer} href={post.frontmatter.slug}>
        <div className={style.imageContainer}>
            <FeatureImage src={post.frontmatter.image}/>
        </div>
        <div className={style.textContainer}>
            <h2> {post.frontmatter.title} </h2>
            <p>{post.excerpt}</p>
        </div>
    </a>
)
export default FeatureLink;