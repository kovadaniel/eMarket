import cl from './BlackButton.module.css'

function BlackButton({className, children, ...props}) {
    return (
        <button {...props} className={`${className} ${cl.btn}`}>
            {children}
        </button>
    );
}

export default BlackButton;