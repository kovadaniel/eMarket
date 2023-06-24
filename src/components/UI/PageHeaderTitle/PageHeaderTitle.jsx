import cl from './PageHeaderTitle.module.css'

function PageHeaderTitle({title, description}) {
    return (
        <div className={cl.container}>
            <h1 className={cl.title}>{title}</h1>
            <h2 className={cl.description}>{description}</h2>
        </div>
    );
}

export default PageHeaderTitle;