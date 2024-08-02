import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

export const Experiences = () => {
  return (
    <div className="px-16 mt-44 mb-20">
       <motion.div
        className="p-4 rounded-lg"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 3 }} 
      >


      <div className='flex flex-row justify-between mb-20 '>

        <p className={`text-4xl font-bold text-accent font-inter leading-snug`}><span  className={'text-primary'}>3+ Anos</span> de experiência <br /> trabalhando</p>

        <div className='flex flex-col '>
          <p className="text-3xl   font-bold text-primary font-inter leading-10"> ─────────── Serviços</p>
          <p className="text-neutral w-10/12">
            Descubra os melhores serviços que eu ofereço aqui para você
          </p>
        </div>

      </div>

      </motion.div>
    </div>
  );
}