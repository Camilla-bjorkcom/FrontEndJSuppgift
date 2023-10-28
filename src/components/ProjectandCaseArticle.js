import React from 'react'
import { Link } from 'react-router-dom'


// // GET ARTICLE
// const getArticle = async (id) => {
//     try {
//         const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
//         const articles = await result.json();

//         return articles;
//     }
//     catch (error) {
//         console.error(error);
//     }
// }

// //DISPLAY ARTICLE
// const displayArticle = async () => {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');

//     const article = await getArticle(id);

//     return article;
// }


const ProjectandCaseArticle = ({ title, imageUrl }) => {
    return (
        // //DISPLAY ARTICLE


        <div className = "projects" >
            {/* SE OM GET API // https://www.youtube.com/watch?v=F1AyLE_pf8Y&list=PLXIf5ibIbJuwCUVWUmotnFfmmVXeasMR_&index=2 */ }
            < article >
                <img src={imageUrl} alt="A mans hands reading a business paper" />
                <h3>{title}</h3>
                <Link to="/">Read More <i className="fa-regular fa-arrow-up-right"></i></Link>
            </article >
            <article>
                <img src={imageUrl} alt="Pink apple product" />
                <h3>{title}</h3>
                <Link to="/">Read More <i className="fa-regular fa-arrow-up-right"></i></Link>
            </article>
            <article>
                <img src={imageUrl} alt="Desk with office supplies" />
                <h3>{title}</h3>
                <Link to="/">Read More <i className="fa-regular fa-arrow-up-right"></i></Link>
            </article>
            <article>
                <img src={imageUrl} alt="Laptop with business intellegence insights" />
                <h3>{title}</h3>
                <Link to="/">Read More <i className="fa-regular fa-arrow-up-right"></i></Link>
            </article>
        </div >

    )
}

export default ProjectandCaseArticle