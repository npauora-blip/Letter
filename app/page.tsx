import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoveProposal = () => {
    const [isProposed, setIsProposed] = useState(false);

    const handleProposal = () => {
        setIsProposed(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>{isProposed ? 'She said yes!' : 'Will you marry me?'}</h1>
            <motion.button
                onClick={handleProposal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Propose
            </motion.button>
        </motion.div>
    );
};

export default LoveProposal;