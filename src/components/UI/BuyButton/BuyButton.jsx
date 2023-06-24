import cl from './BuyButton.module.css'

function BuyButton({children, ...props}) {
    return (
        <button className={cl.button} {...props}>
            {children}
        </button>
    );
}

export default BuyButton;