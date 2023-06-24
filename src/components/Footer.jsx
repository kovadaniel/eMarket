import { footerReferences } from "../constants";
import CopyRight from "./UI/CopyRight/CopyRight";
import ReferenceColumns from "./UI/ReferenceColumns/ReferenceColumns";

function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="main">
                    <div className="shop-description">
                        <h3 className="title">eMarket</h3>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis, sit expedita vitae recusandae voluptatem.</p>
                    </div>
                    <ReferenceColumns refs={footerReferences}/>
                </div>
                <CopyRight/>
            </div>
        </div>
    );
}

export default Footer;