import { Container, Contentbox, ImgBox, Title, Vote_average } from "./movie.style";

function Movie({ img, titleText, voteAverage }) {
    return (
        <Container>
            <ImgBox src={img} />
            <Contentbox>
                <Title>{titleText}</Title>
                <Vote_average>{voteAverage}</Vote_average>
            </Contentbox>
        </Container>
        
    )
}

export default Movie;
