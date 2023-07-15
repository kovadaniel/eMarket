import cl from "./CheckBox.module.css"

function CheckBox(props) {
    return (
        <input type="checkbox" className={cl.checkbox} {...props}/>
    );
}

export default CheckBox;