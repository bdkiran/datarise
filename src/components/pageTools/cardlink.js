import React from "react";
import style from "./cardLink.module.css";
import FeatureImage from "./featureImage";

/* Used to create card links for the home page. */
const CardLink = ({ post }) => (
        <a className={style.card} href={post.frontmatter.slug}>
            {
                (post.frontmatter.image !== null) && <FeatureImage src={post.frontmatter.image}/>
            }
            <h3> {post.frontmatter.title} </h3>
            Read More
        </a>

   
)
export default CardLink;