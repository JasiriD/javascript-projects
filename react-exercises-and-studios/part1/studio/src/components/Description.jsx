import styles from "./Description.module.css";

import React from 'react';

function recipeAuthor(){


    let authorLink = "https://bellyfull.net/about/";

    let authorPhoto = "https://bellyfull.net/wp-content/uploads/2016/08/Author-Photo-blog.jpg"; 

    let authorName = "Amy Lastname";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Alt Text" className = {styles.imageUpdates}/>
            <div>
                <h3>
                    {authorName}
                </h3>
                <a href = {authorLink}>
                    Blog name
                </a>
            </div>
        </div>
    )

}

class RecipeDescription extends React.Component {
    render() {
        <div>
            <div>
                <h1>
                    Chicken Alfredo
                </h1>
                <p>
                    tasyt cihckne alfrndeo..,.
                </p>
            </div>
            <recipeAuthor />
        </div>
    }
}