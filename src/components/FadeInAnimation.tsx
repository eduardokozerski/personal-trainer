"use client";

import { motion } from "framer-motion";

interface FadeInAnimationProps {
    children: React.ReactNode;
    delay?: number;
}

export const FadeInAnimation = ({ children, delay = 0 }: FadeInAnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};