import cl from './Slide.module.css'

function Slide(props) {
    return (
        <div 
            className={cl.slide}
            style={{backgroundImage: `url(${props.url})`}}/>
    );
}

export default Slide;