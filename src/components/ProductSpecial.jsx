function ProductSpecial({special}) {
    return (
        <div className="special" >
            <h2 className="special-title">{special.title}</h2>
            <p className="special-body">{special.body}</p>
        </div>
    );
}

export default ProductSpecial;