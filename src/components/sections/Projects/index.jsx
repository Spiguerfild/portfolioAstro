import { motion } from 'framer-motion'


export const Projects = () => {
  return (
    <div className='pb-40 px-16'>
     <motion.div
        className="p-4 rounded-lg"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 5 }} 
      >


      <div className='flex flex-row gap-10 h-auto'>

        <div className="card rounded-none w-1/3 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: .9 }}
            >
            <img className="object-cover w-full h-72" src="/assets/bnr1.png" alt="Project 1" />
          </motion.div>
        </div>

        <div className="card rounded-none w-1/3 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: .9 }}
            >
            <img className="object-cover w-full h-72" src="/assets/bnr2.png" alt="Project 2" />
          </motion.div>
        </div>

        <div className="card rounded-none w-1/3 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: .9 }}
            >
            <img className="object-cover w-full h-72" src="/assets/bnr3.png" alt="Project 3" />
          </motion.div>
        </div>

       </div>
      </motion.div>
    </div>
  );
}