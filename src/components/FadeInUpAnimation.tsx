"use client";

import { motion } from "framer-motion";

interface FadeInUpAnimationProps {
    children: React.ReactNode;
    delay?: number;
}

export const FadeInUpAnimation = ({ children, delay = 0 }: FadeInUpAnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};