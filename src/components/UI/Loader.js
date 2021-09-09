import loader from '../../assets/loader.gif';
import Wrapper from './Wrapper';

const Loader = (props) =>{
    let styles = {'textAlign':'center'};
    if(props.height){
        styles = {...styles,'height':props.height}
    }

    return (
        <Wrapper styles={styles}>
            <img src={loader} alt="loader-gif" />
        </Wrapper>
    )
}

export default Loader;