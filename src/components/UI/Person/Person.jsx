import { defaultAppearVariants } from '../../../constants';
import useAppearance from '../../../hooks/useAppearance';
import Social from '../Social/Social';
import cl from './Person.module.css'
import { motion } from 'framer-motion';

function Person({user, i = 0, isAnimated}) {
    const [ref, controls] = useAppearance();

    return (
        <motion.div 
            className={cl.container}
            key={user.id} 
            ref={isAnimated && ref}
            variants={isAnimated && defaultAppearVariants}
            initial={isAnimated && 'hidden'}
            animate={isAnimated && controls}
            custom={isAnimated && i}
        >
            {/* within our DragSlader all the images have to be undraggable*/}
            <img className='image' src={user.url} alt='avatar' draggable={false}/>
            <h6 
                className='inscription' //{cl.inscription}>
            >
                {user.name}
                {user.email ? ', via ' : ''}
                <span className={cl.source}>{user.email}</span>
            </h6>
            {user.post && 
                <strong className={cl.role}>{user.post}</strong>}
            <blockquote className={`${cl.text} text`}>{user.review}</blockquote>
            
            {user.socials && 
                <div className={cl.socials}>
                    {user.socials.map(social => <Social data={social}/>)}
                </div>
            }
        </motion.div>
    );
}

export default Person;