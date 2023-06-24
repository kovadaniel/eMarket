import { useState } from "react";
import Tab from "./Tab";
import { AnimatePresence, motion } from "framer-motion";

import useHeightAnimation from "../hooks/useHeightAnimation";
import TabPage from "./TabPage";
import useAppearance from "../hooks/useAppearance";
import { defaultAppearVariants } from "../constants";

/**
 * 
 * @param { pages = [{title: '...', data: '...'}, ...], makeTab, makePage,} 
 * @returns
 */

function Tabs({pages, makeTab}) {
    const [index, setIndex] = useState(0);
    const [MVheight, setHeight] = useHeightAnimation(400, 400);

    const [ref, controls] = useAppearance();

   
    return (
        <motion.div
            className="tabs"
            variants={defaultAppearVariants}
            initial='hidden'
            animate={controls}
            ref={ref}
        >
            <div className="tab-navs">
                {pages.map((page, i) => 
                    <Tab 
                        key={i} 
                        page = {page} 
                        i = {i} 
                        makeTab={makeTab} 
                        index={index}
                        setIndex={setIndex}/> )}
            </div>
            
            <motion.div 
                className="tab-body"
                style={{height: MVheight}}
            >
                <AnimatePresence>
                    {pages.map((p, i) => (
                            i === index ? 
                            <TabPage 
                                key={i}
                                i={i}
                                currentIndex={index}
                                setHeight={setHeight}
                            >
                                {p.page}
                            </TabPage>
                        : ''
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export default Tabs;