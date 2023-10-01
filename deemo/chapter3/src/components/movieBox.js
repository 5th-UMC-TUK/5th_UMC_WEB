import styless from "./movieBox.module.css"

function MovieBox({ img, title, vote_average }) {
    return (
        <div className={styless.container}>
            <img src={img} className={styless.imgBox} />
            <div className={styless.contentbox}>
                <span className={styless.title}>{title}</span>
                <span className={styless.vote_average}>{vote_average}</span>
            </div>

        </div>
    )
}

export default MovieBox;