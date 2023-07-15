import BlackButton from '../components/UI/BlackButton/BlackButton'

function CheckoutPanel({total, discount = 0}) {
    return (
        <form className="checkout-panel">
            <div className="subtotal">
                <span>Subtotal</span>
                <span>${(total).toFixed(2)}</span>

            </div>
            <div className="discount">
                <span>Discount</span>
                <span>${(discount).toFixed(2)}</span>

            </div>
            <div className="total">
                <span>Grand Total</span>
                <span>${(total - discount).toFixed(2)}</span>
            </div>
            <BlackButton>Checkout now</BlackButton>
        </form>
    );
}

export default CheckoutPanel;