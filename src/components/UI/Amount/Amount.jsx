import cl from "./Amount.module.css"

function Amount({amount, change}) {

    return (
        <div className={cl.wrap}>
            <button className={cl.decrement} onClick={() => {
                change(-1);
                console.log('clicked');
            }}>-</button>
            <div className={cl.number}>{amount}</div>
            <button className={cl.increment} onClick={() => change(1)}>+</button>
        </div>
    );
}

export default Amount;