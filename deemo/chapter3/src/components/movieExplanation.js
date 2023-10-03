function MovieExplanation({ title, explanation }) {
    return (
        <div style={{
            padding: "30px 20px 0 20px",
            lineHeight: "24px"
        }}>
            <h2>{title}</h2>
            <p style={{marginTop: "20px"}}>{explanation}</p>
        </div>
    )
}

export default MovieExplanation;