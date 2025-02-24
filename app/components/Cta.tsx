import React from 'react'
import Image from 'next/image'
import whiteArrow from '../../public/assets/whiteArrow.svg'


export default function Cta() {
    return (
    <div className='w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 py-[56px] px-[32px] lg:my-[60px] lg:px-[32px] lg:py-[89px]'>
        <h1 className='text-white text-[32px] font-medium lg:text-[56px]'>
            Monitor your website like a pro
            </h1>
            <p className='text-white pt-6 lg:pt-[48px] lg:text-[18px]'>
            Join over 800+ happy site owners boosting productivity and efficiency! 
            </p>
            <div className='mt-[40px] flex flex-col w-full items-center lg:mt[56px] lg:flex-row lg:justify-center gap-x-[40px]'>
                <button className='py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit font-medium'>
                Try for free
                </button>
                <button className='flex w-full items-center justify-center font-medium gap-x-3 mt-[32px] text-white lg:w-fit lg:mt-0'>
                Contact Sales{" "} 
                <span>
                    <Image src={whiteArrow} alt='Learn More'/>
                </span>
                </button>
                </div></div>


)

}