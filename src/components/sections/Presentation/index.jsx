import React from 'react';
import { motion } from 'framer-motion'
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

import './styles.css';

export const Presentation = () => {

  return (
    <div className="px-16">
      <motion.div
        className="p-4 rounded-lg"
        initial={{ opacity: 0 }} // Define a opacidade inicial da div como 0
        animate={{ opacity: 1 }} // Define a opacidade final da div como 1
        transition={{ duration: 2 }} // Define a duração da animação em segundos
      >
        <div className="card flex flex-row mt-20 ">
          <div className="w-2/3 text-left">
            <p className="text-4xl font-bold text-primary font-dancing-script leading-10">Olá, eu sou o Luis Henrique</p>
            <p className={`text-6xl font-bold text-accent font-inter leading-snug`}>Front-end Developer <span>|</span></p>
            <p className="text-neutral w-6/12">Um amante do Front-End, sempre a navegar,
              Nas ondas do código, no mar da web a criar.<br />
              Com paixão e dedicação, mergulho no universo digital,
              Transformando pixels em arte, num processo fenomenal. <br />
              Exploro cores e formas, como um artista da tela,
              Com HTML e CSS, minha paleta é tão bela. <br />
              JavaScript é minha música, que embala a interação,
              Com ele, dou vida ao layout, numa dança de emoção.</p>
          </div>
        </div>

        <div className="flex mt-12 gap-6 w-6/12 justify-end">
          <motion.div
            whileHover={{ scale: .9 }}
          >
            <a href="https://www.instagram.com/luis_s_tt/" target="_blank" rel="noopener noreferrer" >
              <button className="   btn btn-active btn-ghost">
                <InstagramLogo size={36} />
              </button>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: .9 }}
          >

            <a href="https://www.linkedin.com/in/luisscanavacca/" target="_blank" rel="noopener noreferrer" >
              <button className="   btn btn-active btn-ghost ">
                <LinkedinLogo size={36} />
              </button>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: .9 }}
          >

            <a href="https://github.com/Spiguerfild" target="_blank" rel="noopener noreferrer" >
              <button className="   btn btn-active btn-ghost">
                <GithubLogo size={36} />
              </button>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
          >
            <button className="  btn btn-active  btn-primary">Download CV</button>
          </motion.div>
        </div>
      </motion.div >

    </div >
  );
}
