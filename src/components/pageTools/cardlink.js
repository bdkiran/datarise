import React from "react";
import { navigate } from "gatsby";
import style from "./cardLink.module.css";
import FeatureImage from "./featureImage";

/* Used to create card links for the home page. */
const CardLink = ({ post }) => (
        <div className={style.card} onClick={event => {navigate(post.frontmatter.slug)}}>
            {
                (post.frontmatter.image !== null) && <FeatureImage src={post.frontmatter.image}/>
            }
            <h3> {post.frontmatter.title} </h3>
            Read More
        </div>

   
)
export default CardLink;