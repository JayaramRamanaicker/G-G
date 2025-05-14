import React from 'react'

const Offer = () => {
    return (
        <div className='w-[1328px] m-auto flex gap-8 pb-16'>
            <div className='w-[422px] border-2 border-[#1E64FA] rounded-lg px-10 py-5 relative'>
                <div>
                    <p className='text-[24px] font-[700] text-[#08d699]'>FREE</p>
                    <p className='text-[62px] font-[700] text-[#f5f8ff]'>₹0</p>
                </div>
                <div className='pb-10'>
                    <p className='text-[20px]'>1 user</p>
                    <p className='text-[20px]'>2 GB storage</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='py-[13px] px-[125px] text-[17px] font-[700] border-2 border-white text-center rounded-lg mb-10'>Start Free</button>
                </div>
                <div>
                    <p className='text-white text-[20px] mb-5'>No card required</p>
                    <ul className='mb-14'>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Unlimited reviewers
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            1 Workspace
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            2 Projects
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            50 AI Tokens
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Media review
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Storyboard tool
                        </li>
                    </ul>
                </div>
                    <p className='text-[17px] font-[700] absolute bottom-[25px]'>→ Check our full list of features</p>
            </div>


            <div className='w-[422px] bg-linear-60 from-[#0FB1B9] to-[#0FB1B9] rounded-lg px-10 py-5 relative'>
                <div>
                    <p className='text-[24px] font-[700] text-black'>PRO</p>
                    <p className='text-[62px] font-[700] text-[#f5f8ff]'>₹999<span className='text-[25px] font-[700]'>/ per user</span></p>
                </div>
                <div className='pb-10'>
                    <p className='text-[20px]'>Up to 15 users</p>
                    <p className='text-[20px]'>2 TB storage</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='py-[13px] px-[125px] text-[17px] font-[700] border-2 border-white text-center rounded-lg mb-10'>Start Free</button>
                </div>
                <div>
                    <p className='text-white text-[20px] mb-5'>Everything in Free, plus</p>
                    <ul className='mb-14'>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Unlimited reviewers
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Unlimited Projects
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            4K Playback
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Custom branding
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Storage add-ons
                        </li>
                        
                    </ul>
                </div>
                    <p className='text-[17px] font-[700] absolute bottom-[25px]'>→ Check our full list of features</p>
            </div>

            <div className='w-[422px] border-2 border-[#1E64FA] rounded-lg px-10 py-5 relative'>
                <div>
                    <p className='text-[24px] font-[700] text-[#08d699]'>UNLIMITED</p>
                    <p className='text-[62px] font-[700] text-[#f5f8ff]'>₹29999</p>
                </div>
                <div className='pb-10'>
                    <p className='text-[20px]'>1 user</p>
                    <p className='text-[20px]'>2 GB storage</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='py-[13px] px-[125px] text-[17px] font-[700] border-2 border-white text-center rounded-lg mb-10'>Start Free</button>
                </div>
                <div>
                    <p className='text-white text-[20px] mb-5'>Everything in Pro, plus</p>
                    <ul className='mb-14'>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Unlimited Collaborators & Reviewers
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Unlimited Projects
                        </li>
                        <li class="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-[#ffffffb2] mb-3">
                            Unlimited Workspaces
                        </li>
                    </ul>
                </div>
                    <p className='text-[17px] font-[700] absolute bottom-[25px]'>→ Check our full list of features</p>
            </div>
        </div>
    )
}

export default Offer