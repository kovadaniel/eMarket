function ProductSpecification({data}) {
    return (
        <div className='specificaton-container'>
            <h3 className="title">Product Specification</h3>
            <ul className="specification-list">
                {data.map((p, i) => <li key={i} className="specification">{p}</li>)}
            </ul>
        </div>

    );
}

export default ProductSpecification;