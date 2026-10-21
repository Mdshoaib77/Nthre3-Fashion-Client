// // import React from 'react'
// // import { motion } from 'framer-motion'
// // import heroImg from '../assets/hero.png'
// // import { BsFire } from "react-icons/bs"
// // import { FaArrowRight } from "react-icons/fa6"
// // import { Link } from 'react-router-dom'
// // import { FaPlay } from 'react-icons/fa'

// // const EASE = [0.22, 1, 0.36, 1]

// // const rise = (delay = 0, y = 26) => ({
// //     initial: { opacity: 0, y },
// //     animate: { opacity: 1, y: 0 },
// //     transition: { duration: 0.95, ease: EASE, delay },
// // })

// // const Hero = () => {
// //     return (
// //         <section className='relative w-full mb-10 overflow-hidden isolate'>

// //             {/* Desktop / tablet photo + ivory wash */}
// //             <motion.div
// //                 aria-hidden
// //                 initial={{ scale: 1.08 }}
// //                 animate={{ scale: 1 }}
// //                 transition={{ duration: 2.2, ease: EASE }}
// //                 className='absolute inset-0 hidden bg-no-repeat bg-cover -z-20 md:block bg-hero bg-[position:78%_18%] lg:bg-[position:right_20%]'
// //             />
// //             <div aria-hidden className='absolute inset-0 hidden -z-10 md:block hero-fade' />

// //             <div className='relative max-padd-container'>
// //                 <div className='flex flex-col justify-center pt-12 pb-10 md:min-h-[600px] lg:min-h-[700px] md:py-20 max-w-[660px] lg:max-w-[720px]'>

// //                     {/* Eyebrow */}
// //                     <motion.h5
// //                         {...rise(0.1, 14)}
// //                         className='flex items-center uppercase gap-x-3 text-secondary dark:text-[#E58A57] text-[12px] sm:text-[13px] font-semibold tracking-[0.3em] mb-5'
// //                     >
// //                         <span className='w-10 h-px bg-current' />
// //                         MODERN COLLECTION <BsFire />
// //                     </motion.h5>

// //                     {/* Headline */}
// //                     <motion.h1
// //                         {...rise(0.22, 34)}
// //                         className='h1 hero-title font-[500] max-w-[680px] text-tertiary dark:text-white'
// //                     >
// //                         Every click brings you closer to <em>perfection</em> shop now!
// //                     </motion.h1>

// //                     {/* CTA */}
// //                     <motion.div {...rise(0.42, 20)} className='flex mt-8'>
// //                         <Link
// //                             to="/collection"
// //                             className='pl-6 text-[12px] font-semibold tracking-[0.16em] uppercase bg-white rounded-full ring-1 ring-[color:var(--line)] shadow-soft transition-shadow duration-500 hover:shadow-lift dark:bg-[var(--surface)] dark:text-white flexCenter gap-x-4 group'
// //                         >
// //                             Check our modern Collection
// //                             <motion.div
// //                                 whileHover={{ rotate: -20 }}
// //                                 transition={{ type: "spring", stiffness: 200 }}
// //                             >
// //                                 <FaArrowRight className='bg-secondary text-white rounded-full h-12 w-12 p-4 m-[3px] transition-colors duration-300 group-hover:bg-[#96431f]' />
// //                             </motion.div>
// //                         </Link>
// //                     </motion.div>

// //                     {/* Intro card */}
// //                     <motion.div
// //                         {...rise(0.6, 20)}
// //                         className='flex items-center gap-4 p-2.5 pr-5 mt-10 max-w-[430px] rounded-2xl bg-white/80 dark:bg-[rgb(var(--c-surface)/0.8)] backdrop-blur-md ring-1 ring-[color:var(--line)] shadow-lift'
// //                     >
// //                         <div className='relative shrink-0 w-[96px] sm:w-[110px] overflow-hidden rounded-xl'>
// //                             <motion.img
// //                                 src={heroImg}
// //                                 alt=""
// //                                 height={171}
// //                                 width={220}
// //                                 className='w-full h-auto'
// //                                 initial={{ scale: 1.15 }}
// //                                 animate={{ scale: 1 }}
// //                                 transition={{ duration: 1.4, ease: EASE, delay: 0.6 }}
// //                             />
// //                             <motion.span
// //                                 initial={{ scale: 0 }}
// //                                 animate={{ scale: 1 }}
// //                                 transition={{ delay: 1.1, type: "spring", stiffness: 140, damping: 14 }}
// //                                 className='absolute w-8 h-8 transition-transform duration-300 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer top-1/2 left-1/2 flexCenter bg-secondary shadow-brand hover:scale-110'
// //                             >
// //                                 <span className='absolute w-full h-full bg-white rounded-full opacity-40 animate-ping'></span>
// //                                 <FaPlay className='text-[11px] relative left-[1px] text-white' />
// //                             </motion.span>
// //                         </div>

// //                         <p className='text-[12.5px] sm:text-[13px] leading-[1.55] dark:text-gray-200'>
// //                             <b className='uppercase tracking-[0.1em] text-tertiary dark:text-white'>Unlock</b> your best look, one click at a time, Your style upgrade starts here, shop today!
// //                         </p>
// //                     </motion.div>
// //                 </div>
// //             </div>

// //             {/* Mobile photo block (model fully visible, fades into the page) */}
// //             <motion.div
// //                 aria-hidden
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 1.2, delay: 0.3 }}
// //                 className='relative md:hidden h-[340px] xs:h-[400px] bg-hero bg-cover bg-no-repeat bg-[position:82%_14%]'
// //             >
// //                 <div className='absolute inset-x-0 top-0 h-28 hero-mobile-fade' />
// //             </motion.div>
// //         </section>
// //     )
// // }

// // export default Hero



// import React from 'react'
// import { motion } from 'framer-motion'
// import heroImg from '../assets/hero.png'
// import { BsFire } from "react-icons/bs"
// import { FaArrowRight } from "react-icons/fa6"
// import { Link } from 'react-router-dom'
// import { FaPlay } from 'react-icons/fa'

// const EASE = [0.22, 1, 0.36, 1]

// const rise = (delay = 0, y = 26) => ({
//     initial: { opacity: 0, y },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.95, ease: EASE, delay },
// })

// const Hero = () => {
//     return (
//         <section className='relative w-full mb-10 overflow-hidden isolate'>

//             {/* Desktop / tablet photo + ivory wash */}
//             <motion.div
//                 aria-hidden
//                 initial={{ scale: 1.08 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 2.2, ease: EASE }}
//                 className='absolute inset-0 hidden bg-no-repeat bg-cover -z-20 md:block bg-hero bg-[position:78%_18%] lg:bg-[position:right_20%]'
//             />
//             <div aria-hidden className='absolute inset-0 hidden -z-10 md:block hero-fade' />

//             <div className='relative max-padd-container'>
//                 <div className='flex flex-col justify-center pt-10 pb-9 md:min-h-[600px] lg:min-h-[700px] md:py-20 max-w-[660px] lg:max-w-[720px]'>

//                     {/* Eyebrow */}
//                     <motion.h5
//                         {...rise(0.1, 14)}
//                         className='flex items-center uppercase gap-x-3 text-secondary dark:text-[#E58A57] text-[12px] sm:text-[13px] font-semibold tracking-[0.3em] mb-5'
//                     >
//                         <span className='w-10 h-px bg-current' />
//                         MODERN COLLECTION <BsFire />
//                     </motion.h5>

//                     {/* Headline */}
//                     <motion.h1
//                         {...rise(0.22, 34)}
//                         className='h1 hero-title font-[500] max-w-[680px] text-tertiary dark:text-white'
//                     >
//                         Every click brings you closer to <em>perfection</em> shop now!
//                     </motion.h1>

//                     {/* CTA */}
//                     <motion.div {...rise(0.42, 20)} className='flex mt-8 md:mt-9'>
//                         <Link
//                             to="/collection"
//                             className='w-full sm:w-auto justify-between sm:justify-center pl-6 text-[11.5px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase bg-white rounded-full ring-1 ring-[color:var(--line)] shadow-soft transition-shadow duration-500 hover:shadow-lift dark:bg-[var(--surface)] dark:text-white flexCenter gap-x-4 group'
//                         >
//                             Check our modern Collection
//                             <motion.div
//                                 whileHover={{ rotate: -20 }}
//                                 transition={{ type: "spring", stiffness: 200 }}
//                             >
//                                 <FaArrowRight className='bg-secondary text-white rounded-full h-12 w-12 p-4 m-[3px] transition-colors duration-300 group-hover:bg-[#96431f]' />
//                             </motion.div>
//                         </Link>
//                     </motion.div>

//                     {/* Intro card (hidden on phones, visible on tablet + desktop) */}
//                     <motion.div
//                         {...rise(0.6, 20)}
//                         className='items-center hidden gap-4 p-2.5 pr-5 mt-10 md:flex max-w-[430px] rounded-2xl bg-white/80 dark:bg-[rgb(var(--c-surface)/0.8)] backdrop-blur-md ring-1 ring-[color:var(--line)] shadow-lift'
//                     >
//                         <div className='relative shrink-0 w-[96px] sm:w-[110px] overflow-hidden rounded-xl'>
//                             <motion.img
//                                 src={heroImg}
//                                 alt=""
//                                 height={171}
//                                 width={220}
//                                 className='w-full h-auto'
//                                 initial={{ scale: 1.15 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ duration: 1.4, ease: EASE, delay: 0.6 }}
//                             />
//                             <motion.span
//                                 initial={{ scale: 0 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ delay: 1.1, type: "spring", stiffness: 140, damping: 14 }}
//                                 className='absolute w-8 h-8 transition-transform duration-300 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer top-1/2 left-1/2 flexCenter bg-secondary shadow-brand hover:scale-110'
//                             >
//                                 <span className='absolute w-full h-full bg-white rounded-full opacity-40 animate-ping'></span>
//                                 <FaPlay className='text-[11px] relative left-[1px] text-white' />
//                             </motion.span>
//                         </div>

//                         <p className='text-[12.5px] sm:text-[13px] leading-[1.55] dark:text-gray-200'>
//                             <b className='uppercase tracking-[0.1em] text-tertiary dark:text-white'>Unlock</b> your best look, one click at a time, Your style upgrade starts here, shop today!
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Mobile photo block (only on phones): model image fades into the page at top and bottom */}
//             <motion.div
//                 aria-hidden
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
//                 className='relative md:hidden h-[420px] xs:h-[480px] bg-hero bg-cover bg-no-repeat bg-[position:82%_14%]'
//             >
//                 <div className='absolute inset-x-0 top-0 h-32 hero-mobile-fade' />
//                 <div
//                     className='absolute inset-x-0 bottom-0 h-20'
//                     style={{ background: 'linear-gradient(0deg, rgb(var(--c-paper)) 0%, rgb(var(--c-paper) / 0) 100%)' }}
//                 />
//             </motion.div>
//         </section>
//     )
// }

// export default Hero


import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'
import { BsFire } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const EASE = [0.22, 1, 0.36, 1]

const rise = (delay = 0, y = 26) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.95, ease: EASE, delay },
})

const Hero = () => {
    return (
        <section className='relative w-full mb-10 overflow-hidden isolate'>

            {/* Desktop / tablet photo + ivory wash */}
            <motion.div
                aria-hidden
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: EASE }}
                className='absolute inset-0 hidden bg-no-repeat bg-cover -z-20 md:block bg-hero bg-[position:78%_top] lg:bg-[position:right_top]'
            />
            <div aria-hidden className='absolute inset-0 hidden -z-10 md:block hero-fade' />

            <div className='relative max-padd-container'>
                <div className='flex flex-col justify-center pt-10 pb-9 md:min-h-[620px] lg:min-h-[780px] md:py-20 max-w-[660px] lg:max-w-[720px]'>

                    {/* Eyebrow */}
                    <motion.h5
                        {...rise(0.1, 14)}
                        className='flex items-center uppercase gap-x-3 text-secondary dark:text-[#E58A57] text-[12px] sm:text-[13px] font-semibold tracking-[0.3em] mb-5'
                    >
                        <span className='w-10 h-px bg-current' />
                        MODERN COLLECTION <BsFire />
                    </motion.h5>

                    {/* Headline */}
                    <motion.h1
                        {...rise(0.22, 34)}
                        className='h1 hero-title font-[500] max-w-[680px] text-tertiary dark:text-white'
                    >
                        Every click brings you closer to <em>perfection</em> shop now!
                    </motion.h1>

                    {/* CTA */}
                    <motion.div {...rise(0.42, 20)} className='flex mt-8 md:mt-9'>
                        <Link
                            to="/collection"
                            className='w-full sm:w-auto justify-between sm:justify-center pl-6 text-[11.5px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase bg-white rounded-full ring-1 ring-[color:var(--line)] shadow-soft transition-shadow duration-500 hover:shadow-lift dark:bg-[var(--surface)] dark:text-white flexCenter gap-x-4 group'
                        >
                            Check our modern Collection
                            <motion.div
                                whileHover={{ rotate: -20 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <FaArrowRight className='bg-secondary text-white rounded-full h-12 w-12 p-4 m-[3px] transition-colors duration-300 group-hover:bg-[#96431f]' />
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Intro card */}
                    <motion.div
                        {...rise(0.6, 20)}
                        className='items-center hidden gap-4 p-2.5 pr-5 mt-10 md:flex max-w-[430px] rounded-2xl bg-white/80 dark:bg-[rgb(var(--c-surface)/0.8)] backdrop-blur-md ring-1 ring-[color:var(--line)] shadow-lift'
                    >
                        <div className='relative shrink-0 w-[96px] sm:w-[110px] overflow-hidden rounded-xl'>
                            <motion.img
                                src={heroImg}
                                alt=""
                                height={171}
                                width={220}
                                className='w-full h-auto'
                                initial={{ scale: 1.15 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.4, ease: EASE, delay: 0.6 }}
                            />
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.1, type: "spring", stiffness: 140, damping: 14 }}
                                className='absolute w-8 h-8 transition-transform duration-300 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer top-1/2 left-1/2 flexCenter bg-secondary shadow-brand hover:scale-110'
                            >
                                <span className='absolute w-full h-full bg-white rounded-full opacity-40 animate-ping'></span>
                                <FaPlay className='text-[11px] relative left-[1px] text-white' />
                            </motion.span>
                        </div>

                        <p className='text-[12.5px] sm:text-[13px] leading-[1.55] dark:text-gray-200'>
                            <b className='uppercase tracking-[0.1em] text-tertiary dark:text-white'>Unlock</b> your best look, one click at a time, Your style upgrade starts here, shop today!
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mobile photo card (phones only) */}
            <div className='pb-6 md:hidden max-padd-container'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
                    className='relative overflow-hidden rounded-[28px] h-[460px] xs:h-[520px] ring-1 ring-[color:var(--line)] shadow-lift'
                >
                    <motion.div
                        aria-hidden
                        initial={{ scale: 1.12 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: EASE }}
                        className='absolute inset-0 bg-hero bg-cover bg-no-repeat bg-[position:80%_top]'
                    />
                    {/* soft dark vignette at the bottom for depth */}
                    <div
                        aria-hidden
                        className='absolute inset-x-0 bottom-0 h-1/2'
                        style={{ background: 'linear-gradient(0deg, rgb(33 28 25 / 0.55) 0%, rgb(33 28 25 / 0) 100%)' }}
                    />
                    {/* glass label */}
                    <Link
                        to="/collection"
                        className='absolute left-4 right-4 bottom-4 flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/30 text-white'
                    >
                        <span className='text-[11px] font-semibold tracking-[0.24em] uppercase'>New Season Collection</span>
                        <FaArrowRight className='text-sm' />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero