import Paragraph from "./UI/Paragraph/Paragraph";
import historyImg from "../img/img_bg_1.jpg"
import useAppearance from "../hooks/useAppearance";
import { motion } from 'framer-motion';
import { defaultAppearVariants } from "../constants";



function History({texts, ...props}) {
    const [ref, controls] = useAppearance(() => {}, {amount: 0.5});

    return (
        <div {...props}>
            <div className="container">
                
                    <motion.img 
                        src={historyImg} 
                        alt="history" 
                        className="image"
                        ref={ref}
                        initial='hidden'
                        variants={defaultAppearVariants}
                        animate={controls}/>
                    {texts.map((text, i) => <Paragraph data={text} i={i}/>)}
                
            </div>
        </div> 
    );
}

export default History;