import React from "react";
import { navigate } from "gatsby";
import style from "./featurelink.module.css";
import FeatureImage from "./featureImage";

/* Used to create card links for the home page. */
const FeatureLink = ({ post }) => (
    <div className={style.fetContainer} role="link" onClick={event => {navigate(post.frontmatter.slug)}}>
        <div className={style.imageContainer}>
            <FeatureImage src={post.frontmatter.image}/>
        </div>
        <div className={style.textContainer}>
            <h3> {post.frontmatter.title} </h3>
            <p>{post.excerpt}</p>
        </div>
    </div>

)
export default FeatureLink;