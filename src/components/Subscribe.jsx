import { motion } from "framer-motion";

import BlackButton from "./UI/BlackButton/BlackButton";
import LightInput from "./UI/LightInput/LightInput";
import useAppearance from "../hooks/useAppearance";
import { defaultAppearVariants } from "../constants";

function Subscribe(props) {
    const [ref, controls] = useAppearance();
    const [inputRef, inputControls] = useAppearance();


    return (
        <div id='subscribe'>
        
            <div className="container">
                {/*<OnViewTransition timeout={1500} classNames='subscribez' className="subscribe-header" delay={0} margin='-150px'>*/}
                <motion.div 
                    className="subscribe-header"
                    variants={defaultAppearVariants}
                    initial='hidden'
                    animate={controls}
                    custom={0}
                    ref={ref}
                >
                    <h2>Newsletter</h2>
                    <span>Just stay tune for our latest Product. Now you can subscribe</span>
                </motion.div>
                {/*</OnViewTransition>*/}
                
                <motion.form 
                    action="/" 
                    className="subscribe-from"
                    variants={defaultAppearVariants}
                    initial='hidden'
                    animate={inputControls}
                    custom={1}
                    ref={inputRef}
                >
                    <LightInput className='subscribe-button' type={'email'} placeholder={'Email'}/>
                    <BlackButton>Subscribe</BlackButton>
                </motion.form>
            </div>
        </div>
    );
}

export default Subscribe;