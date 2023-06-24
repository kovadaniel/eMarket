import ProductDetails from "./ProductDetails";
import ProductRating from "./ProductRating";
import ProductSpecification from "./ProductSpecification";
import ProductTab from "./ProductTab";
import Tabs from "./Tabs";
import { faFile, faStar } from "@fortawesome/free-regular-svg-icons"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

function ProductTabs({product}) {
    return (
        <div id="product-tabs">
            <div className="container">
                {product &&
                    <Tabs 
                        pages={[
                            {
                                title: 'Product Details',
                                icon: faFile,
                                page: <ProductDetails data={product.fullDescription}/>,
                            },
                            {
                                title: 'Specification',
                                icon: faChartSimple,
                                page: <ProductSpecification data={product.specification}/>,
                            }, 
                            {   
                                title: 'Feedback & Ratings',
                                icon: faStar,
                                page: <ProductRating data={product.rating}/>,
                            }
                        ]}
                        makeTab={(page) => <ProductTab page={page}/>}
                    />
                }
            </div>
        </div>
    );
}

export default ProductTabs;