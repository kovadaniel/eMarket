import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cl from './Counter.module.css'
import { animate, motion, useAnimation, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import useAppearance from '../../../hooks/useAppearance';
import { defaultAppearVariants } from '../../../constants';

function Counter({counter, i}) {
    const count = useMotionValue(0);
    const countRef = useRef(null);

    /*
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        let ctrls;
        if(inView){
            // start an animation of appearance of the current element 
            controls.start("visible");
            // animate counts from 0 to their values for 5 seconds
            ctrls = animate(
                count, 
                counter.count, 
                {onUpdate: latest => countRef.current.textContent = latest.toFixed(0), 
                 type: 'tween', 
                 ease: 'easeOut', 
                 duration: 5,
                }
            )
        
        }
        return ctrls ? ctrls.stop : () => {};
    }, [controls, inView])
    // */

    const [ref, controls] = useAppearance(() => {
        const ctrls = animate(
            count, 
            counter.count, 
            {onUpdate: latest => countRef.current.textContent = latest.toFixed(0), 
             type: 'tween', 
             ease: 'easeOut', 
             duration: 5,
            }
        )
        return ctrls.stop;
    })

    return (
        <motion.div 
            className={cl.counter} 
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={defaultAppearVariants}
            custom={i}
        >
            <span className={cl.iconWrap}>
                <FontAwesomeIcon className={cl.icon} icon={counter.fasIcon}/>
            </span>
            <span className={cl.count} ref={countRef}></span>
            <span className={cl.label}>{counter.label}</span>
        </motion.div>
    );
}

export default Counter;