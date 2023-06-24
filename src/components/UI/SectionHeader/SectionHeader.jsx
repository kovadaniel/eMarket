import cl from './SectionHeader.module.css'
import OnViewTransition from '../../OnViewTransition';

function SectionHeader({inscription, title, body}) {
    return (
        <OnViewTransition 
            timeout={700} 
            classNames='section-header' 
            className='section-header' 
            margin='-100px'>

            <div className={cl.container}>
                <span className={cl.inscription}>{inscription ? inscription : ''}</span>
                <h2 className={cl.title}>{title ? title : ''}</h2>
                <p className={cl.body}>{body ? body : ''}</p>
            </div>
        </OnViewTransition>
    );
}

export default SectionHeader;