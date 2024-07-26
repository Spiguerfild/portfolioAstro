import { motion } from 'framer-motion'


export const Projects = () => {
  return (
    <div className='pb-40 px-16'>
      {/* <p className={`text-7xl text-center font-bold text-primary font-dancing-script leading-snug mb-28 mt-28 pt-28`}>Projetos</p> */}


      <div className='flex flex-row gap-10 h-auto'>

        <div className="card  rounded-none  w-1/3   flex flex-col items-start">
          <motion.div
            whileHover={{ scale: .9 }}
          >
            <img src={"/assets/bnr1.png"} alt="Shoes" />
          </motion.div>
        </div>


        <div className="card  rounded-none  w-1/3  flex flex-col items-start">
          <motion.div
            whileHover={{ scale: .9 }}
          >
            <img src={"/assets/bnr2.png"} alt="Shoes" />
          </motion.div>
        </div>


        <div className="card  rounded-none  w-1/3  flex flex-col items-start">
          <motion.div
            whileHover={{ scale: .9 }}
          >
            <img src={"/assets/bnr3.png"} alt="Shoes" />
          </motion.div>
        </div>




      </div>
    </div >

  );
}