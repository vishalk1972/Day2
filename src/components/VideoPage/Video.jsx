import React from 'react'

export const Video = () => {
  return (
    <div className='px-20 my-10'>
        <div>
            <h1 className='bg-purple-50 border-l-8 rounded-l p-2 text-2xl text-purple-700 font-semibold border-purple-500 w-fit '>Video</h1>
        </div>
        <div className='flex mt-3'>
            <div className='w-9/12 h-custom2'>
                <div className='w-full h-custom2 mb-36'>
                    <img className='w-full h-full rounded-lg' src='https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?cs=srgb&dl=pexels-fauxels-3184639.jpg&fm=jpg'></img>
                    <h1 className='text-2xl mt-2 font-semibold'>Acedamic Institution State Acedamic Institution State Acedamic Institution State Acedamic Institution State </h1>
                    <div className='rounded-xl bg-slate-100 w-fit p-3 flex items-center gap-2 my-1'>
                        <h1 className='text-xl mr-1'>Share</h1>
                        <img className='h-5 w-5' src='https://static-00.iconduck.com/assets.00/whatsapp-icon-2038x2048-5zk5gj1j.png'></img>
                        <img className='h-5 w-5' src='https://cdn-icons-png.flaticon.com/256/60/60580.png'></img>
                        <img className='h-5 w-5' src='https://w7.pngwing.com/pngs/798/799/png-transparent-web-development-logo-world-wide-web-website-web-symbol-s-web-design-symmetry-monochrome.png'></img>
                    </div>
                </div>
                <div className='flex w-full gap-12 mt-5 '>
                    {/* card 1 horizontL */}
                    <div className='w-1/3  h-80'>
                        <img className='rounded-xl h-60 w-full' src='https://i.ytimg.com/vi/MGhjvist4gk/maxresdefault.jpg'></img>
                        <div className='flex justify-between mt-1'>
                            <h1 className='text-purple-500 font-semibold text-l'>#videos</h1>
                            <h1 className='text-gray-500 text-l'>17 hours ago</h1>
                        </div>
                        <h1 className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                    </div>
                    {/* card 2 */}
                    <div className='w-1/3  h-80'>
                        <img className='rounded-xl h-60 w-full' src='https://cdn.wealthygorilla.com/wp-content/uploads/2016/08/Top-10-Inspiring-Travel-Videos-Thatll-Show-You-the-Beauty-of-the-World.jpg'></img>
                        <div className='flex justify-between mt-1'>
                            <h1 className='text-purple-500 font-semibold text-l'>#videos</h1>
                            <h1 className='text-gray-500 text-l'>17 hours ago</h1>
                        </div>
                        <h1 className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                    </div>
                    {/* card 3 */}
                    <div className='w-1/3  h-80'>
                        <img className='rounded-xl h-60 w-full' src='https://sb.ecobnb.net/app/uploads/sites/3/2020/03/viaggiare-e1544450281293-1170x490.jpg'></img>
                        <div className='flex justify-between mt-1'>
                            <h1 className='text-purple-500 font-semibold text-l'>#videos</h1>
                            <h1 className='text-gray-500 text-l'>17 hours ago</h1>
                        </div>
                        <h1 className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>                   
                    </div>
                </div>
            </div>
            <div className='w-3/12 ml-6'>
                <h1 className='font-semibold text-3xl mx-2 mb-2'>More Read</h1>
                {/* 1 card */}
                <div className='h-96 mb-5'>
                    <div className=''>
                        <h1 className='bg-white rounded-xl w-fit p-1 translate-y-10'>#video</h1>
                        <img className='h-72 realtive' src='https://www.everysteph.com/wp-content/uploads/2019/05/how-to-make-a-travel-video-filmora.jpg'></img>
                    </div>
                    <div className='flex justify-between px-1'>
                            <p className='text-xl text-gray-400 mt-1'>17 hours ago</p>
                            <div className='flex text-xl  text-gray-400 mt-1 items-center'>
                                <div className='cursor-pointer h-3 '>
                                    <img className='h-full rounded-3xl' src='data:image/png;base64,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'></img>
                                </div>
                                <h6>100</h6>
                            </div>
                    </div>
                    <div>
                        <h1 className='text-2xl '>Dummy Text to be placed Here with image</h1>
                    </div>
                </div>
                {/* 2 card */}
                <div className='h-96 mb-5'>
                    <div className=''>
                        <h1 className='bg-white rounded-xl w-fit p-1 translate-y-10'>#video</h1>
                        <img className='h-72 realtive' src='https://www.everysteph.com/wp-content/uploads/2019/05/how-to-make-a-travel-video-filmora.jpg'></img>
                    </div>
                    <div className='flex justify-between px-1'>
                            <p className='text-xl text-gray-400 mt-1'>17 hours ago</p>
                            <div className='flex text-xl  text-gray-400 mt-1 items-center'>
                                <div className='cursor-pointer h-3 '>
                                    <img className='h-full rounded-3xl' src='data:image/png;base64,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'></img>
                                </div>
                                <h6>100</h6>
                            </div>
                    </div>
                    <div>
                        <h1 className='text-2xl '>Dummy Text to be placed Here with image</h1>
                    </div>
                </div>
                {/* 3 card */}
                <div className='h-96 mb-9'>
                    <div className=''>
                        <h1 className='bg-white rounded-xl w-fit p-1 translate-y-10'>#video</h1>
                        <img className='h-72 realtive' src='https://www.everysteph.com/wp-content/uploads/2019/05/how-to-make-a-travel-video-filmora.jpg'></img>
                    </div>
                    <div className='flex justify-between px-1'>
                            <p className='text-xl text-gray-400 mt-1'>17 hours ago</p>
                            <div className='flex text-xl  text-gray-400 mt-1 items-center'>
                                <div className='cursor-pointer h-3 '>
                                    <img className='h-full rounded-3xl' src='data:image/png;base64,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'></img>
                                </div>
                                <h6>100</h6>
                            </div>
                    </div>
                    <div>
                        <h1 className='text-2xl '>Dummy Text to be placed Here with image</h1>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

// https://i.ytimg.com/vi/X-cJCTTf8_0/maxresdefault.jpg
// https://www.everysteph.com/wp-content/uploads/2019/05/how-to-make-a-travel-video-filmora.jpg