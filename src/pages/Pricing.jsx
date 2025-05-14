import React from 'react'
import Offer from '../components/Offer'
import CustomPlan from '../components/CustomPlan'

const Pricing = () => {
  return (
    <div className='py-24'>
      <div className='w-[850px] m-auto'>
        <h1 className='text-[72px] font-[700] text-center leading-[72px] font-bebas'>Get Fixed-Price Plan For Every Size Business</h1>
        <p className='text-[20px] text-center pt-6'>Invite as many reviewers as you like, no extra costs.</p>
      </div>
      <div className='flex items-center justify-center gap-4 pt-30'>
      </div>
      <Offer/>
      <CustomPlan/>
    </div>
  )
}

export default Pricing