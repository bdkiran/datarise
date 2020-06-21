import React from "react";
import { Link } from "gatsby"


/* Used to create links for the dictionary page. */
const DefLink = ({ post }) => (
    <li>
      <Link to={post.frontmatter.slug}>
        {post.frontmatter.title}
      </Link>
    </li>
)
export default DefLink;