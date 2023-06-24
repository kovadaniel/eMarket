import cl from './LightInput.module.css'

function LightInput({type, placeholder, className, ...props}) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className={`${className} ${cl.input}`}
            {...props}/>
    );
}

export default LightInput;