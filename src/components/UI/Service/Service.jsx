import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BuyButton from '../BuyButton/BuyButton';
import cl from './Service.module.css'
import OnViewTransition from '../../OnViewTransition';

const serviceButtonStyles = {
    width: '126px', 
    height: '42px',
    fontSize: '16px',
    padding: '8px',
    margin: '0 auto 0',
    borderWidth: '2px',
}

function Service({service, delay, ...props}) {
    return ( 
        <OnViewTransition 
            timeout={1000} 
            classNames='service' 
            className='service' 
            margin='-80px'
            delay={delay} 
            {...props}>

            <div className={cl.container}>
                <span className={cl.iconWrap}>
                    <FontAwesomeIcon className={cl.icon} icon={service.fasIcon}/>
                </span>
                <h3 className={cl.title}>{service.title}</h3>
                <p className={cl.description}>{service.description}</p>
                <BuyButton 
                    style={serviceButtonStyles}>
                        Learn More
                </BuyButton>
            </div>
        </OnViewTransition>
        
    );
}

export default Service;