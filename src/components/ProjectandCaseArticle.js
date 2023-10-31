import React from 'react'
import { Link } from 'react-router-dom'


const ProjectandCaseArticle = ({ title, imageUrl }) => {

    return (
      <>
            {/* SE OM GET API // https://www.youtube.com/watch?v=F1AyLE_pf8Y&list=PLXIf5ibIbJuwCUVWUmotnFfmmVXeasMR_&index=2 */}
            {/* https://youtu.be/KURg_WvTntk?t=4128 */}
            <article>
                <img src={imageUrl} alt="A mans hands reading a business paper" />
                <h3>{title}</h3>
                <Link to="/">Read More <i className="fa-regular fa-arrow-up-right"></i></Link>
            </article>
</>
    )
}

export default ProjectandCaseArticle 


// //DISPLAY ARTICLE
// const displayArticle = async () => {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');

//     const article = await getArticle(id);

//     return article;
// }


// const [article, setArticle] = useState([]);


    // useEffect(() => {
    //     // displayArticle();
    //     console.log('running');
    // }, [])

    // const displayArticle = () => {
    //     // const params = new URLSearchParams(window.location.search); // 
    //     const {id} = useParams()
    //     const id = params.get('id'); 

    //     setArticle(id);

    // }
