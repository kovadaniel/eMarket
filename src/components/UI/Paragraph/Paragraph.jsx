import { defaultAppearVariants } from '../../../constants';
import useAppearance from '../../../hooks/useAppearance';
import cl from './Paragraph.module.css'
import { motion } from 'framer-motion';

function Paragraph({data, i, ...props}) {
    const [ref, controls] = useAppearance(() => {}, {amount: 0.5});

    return (
        <motion.div
            ref={ref}
            variants={defaultAppearVariants}
            initial='hidden'
            animate={controls}
            custom={i}
        >
            <h3 className={cl.title}>{data.title}</h3>
            {data.text.split('\n').map(p => <p className={cl.paragraph}>{p}</p>)}
        </motion.div>
    );
}

export default Paragraph;