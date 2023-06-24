import { forwardRef } from 'react';
import cl from './SliderLoad.module.css'
import { motion } from 'framer-motion';

const SliderLoad = forwardRef((props, ref) => {
    return (
        <motion.div className={cl.loading} ref={ref} {...props}>
            <div className={cl.circleWrap}>
                <div className={cl.circle}></div>
            </div>
        </motion.div>
    );
})

export default SliderLoad;