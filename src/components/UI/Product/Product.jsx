import { redirect, useNavigate } from 'react-router-dom';
import OnViewTransition from '../../OnViewTransition';
import MiniRef from '../MiniRef/MiniRef';
import cl from './Product.module.css'
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import useAppearance from '../../../hooks/useAppearance';
import { useContext, useMemo } from 'react';
import { DisplayContext } from '../../../context';
import useLeftView from '../../../hooks/useLeftView';
import { useEffect } from 'react';
/*
const productAppearVariants = {
    visible: (i = 0) => ({opacity: 1, y: 0, transition: {duration: .5, delay: .2 * i, ease: 'easeIn'}}),
    hidden: {opacity: 0, y: 50},     
}
*/

function Product({product, animationDuration, animationIndex, setShownItem}) {
    const {mobileView} = useContext(DisplayContext);

    const navigate = useNavigate();
    const [ref, controls] = useAppearance();
    const leftView = useLeftView(ref);

    const variants = useMemo(() => {
        return ({
            visible: (i = 0) => ({opacity: 1, y: 0, transition: {duration: animationDuration, delay: .2 * i, ease: 'easeIn'}}),
            hidden: {opacity: 0, y: 50},     
        })
    }, [animationDuration])

    useEffect(() => {
        if(leftView){
            setShownItem();
        }
    }, [leftView])

    return (
        <motion.div
            className='product'
            key={product.id} 
            ref={ref}
            variants={variants}
            initial={'hidden'}
            animate={controls}
            custom={mobileView ? 0 : animationIndex}
            onAnimationComplete={setShownItem}
        >
            <div className={cl.wrapper}>
                <div className={cl.image} style={{backgroundImage: `url(${product.image})`}}>
                    <div className={cl.imageFilter}></div>
                    <div className={cl.hoverFilter}></div>
                    <div className={cl.refsWrapper}>
                        <MiniRef 
                            icon={faCartShopping} 
                            href={'/cart'}/>
                        <MiniRef 
                            icon={faEye} 
                            href={'/single'}
                            onClick={e => {
                                e.preventDefault();
                                //console.log(`/single/${product.id}`);
                                navigate(`/single/${product.id}`)
                            }}/>
                    </div>
                </div>
                <h3 className={cl.titleWrapper}>
                    <a href='/' className={cl.title}>{product.title}</a>
                </h3>
                <div className={cl.body}>${product.price}</div>
            </div>
        </motion.div>
    );
}

export default Product;