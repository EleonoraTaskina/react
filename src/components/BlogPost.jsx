export const BlogPost = (props) => {
    return (
        <div className="blog-post">
            <h4>{props.title}</h4>
            <h6>{props.subTitle}</h6>
            <img src={props.img} alt={props.title} />
            <p>{props.text}</p>
            <button>{props.button}</button>
        </div>
    )
}