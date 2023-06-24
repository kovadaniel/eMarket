import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductRating({data}) {
    return (
        <div  className="product-rating">
            <h3 className="title">Happy Buyers</h3>
            {data.comments.map((comment, i) => (
                <div key={i} className="comment-container">
                    <blockquote className="comment">
                        {comment.text}
                    </blockquote>
                    <h3 className="comment-author">— {comment.name}</h3>
                    <span className="rate">
                        {Array(comment.rate).fill(true).map((_, i) => <FontAwesomeIcon key={i} className="start-icon" icon={faStar}/>)}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default ProductRating;