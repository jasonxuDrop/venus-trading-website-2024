import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Underline = ({ children }) => {

    const controls = useAnimation();

    return (
        <motion.div
            className='felx flex-col fit-content'
            onHoverStart={() => controls.start({ width: '100%' })}
            onHoverEnd={() => controls.start({ width: '0%' })}
        >
            {children}
            <motion.div
                className='h-0.5 bg-hoverColor'
                initial={{ width: 0 }}
                transition={{ duration: .2 }}
                animate={controls}
            >
            </motion.div>
        </motion.div>
    );
};

export default Underline;