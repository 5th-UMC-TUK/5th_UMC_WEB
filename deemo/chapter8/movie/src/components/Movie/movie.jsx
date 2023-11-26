import { Container, Contentbox, ImgBox, Title, Vote_average } from "../../style/Movie/movie.style";
import {useNavigate} from 'react-router-dom';

function Movie({ img, titleText, voteAverage, movieId}) {
    const nav = useNavigate();
    const onClick = () =>{
        nav(`/detail/${titleText}`,{
            state: {img, titleText, voteAverage, movieId}
        });
    }
    return (
        <Container>
            <ImgBox src={img} onClick={onClick} />
            <Contentbox>
                <Title>{titleText}</Title>
                <Vote_average>{voteAverage}</Vote_average>
            </Contentbox>
        </Container>
        
    )
}

export default Movie;
