import PageHeaderTitle from "./UI/PageHeaderTitle/PageHeaderTitle";

const PageHeaderStyle = {

}
function PageHeader({title, description, image}) {
    return (
        <div 
            id="page-header" 
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url('${image}')`}}
        >
            <div className="container">
                <PageHeaderTitle 
                    title={title}
                    description={description}
                    image={image}/>
            </div>
        </div>
    );
}

export default PageHeader;