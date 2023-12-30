import React from 'react'

export default function ExperiencePreview() {
  return (
    <div className='px-32'>
        <div className='flex items-start justify-start'>
            <div className='h-60 w-96'>
                <img src='https://img.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg?w=1380&t=st=1703871445~exp=1703872045~hmac=20ffeeacbbf25dc29032a098bf38a2f1372533b83a2da0935bb9743bb270ae68'></img>
            </div>
            <div className='w-4/6 mt-12'>
                <h1 className='font-semibold text-3xl'>Experience</h1>
                <h3 className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h3>
            </div>
        </div>
        <div className='flex gap-3'>
            <div className='w-7/12'>
                <div className='w-full bg-slate-800 '>
                    <img className='w-full h-custom2' src='https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/12215234/Experience-Letter.jpg'></img>
                </div>
                <div className=''>
                    <h4 className='text-pink-500 font-semibold bg-gray-100 h-fit w-fit'>#experince</h4>
                    <h1 className='text-2xl font-semibold'>Academic Institution Status Active Academic Institution Status Active</h1>
                </div>
                <div className='flex justify-end -translate-x-3'>
                    <button className='h-fit w-20 p-3 text-purple-700 font-semibold bg-purple-100 rounded-l'>View</button>
                </div>
            </div>
            <div className='w-5/12 '>
                   <div className='h-48 flex gap-2 rounded-xl overflow-hidden mr-1 mb-2'>
                        <img className='rounded-sm w-72' src='https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=sph'></img>
                     <div className='flex flex-col justify-center bg-purple-100 p-2 '>                   
                        <h4 className='text-pink-500 font-semibold bg-gray-100 h-fit w-fit -translate-y-2'>#experince</h4>
                        <h1 className='text-2xl font-semibold'>Academic Institution Status Active Academic Institution Status Active</h1>
                     </div>
                   </div>

                   <div className='h-48 flex gap-2 rounded-xl overflow-hidden mr-1 mb-1'>
                        <img className='rounded-sm w-72' src='https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367138.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=ais'></img>
                     <div className='flex flex-col justify-center bg-purple-100 p-2 '>                   
                        <h4 className='text-pink-500 font-semibold bg-gray-100 h-fit w-fit -translate-y-2'>#experince</h4>
                        <h1 className='text-2xl font-semibold'>Academic Institution Status Active Academic Institution Status Active</h1>
                     </div>
                   </div>

                   <div className='h-48 flex gap-2 rounded-xl overflow-hidden mr-1 mb-1'>
                        <img className='rounded-sm w-72' src='https://static.wingify.com/gcp/uploads/2022/12/CRO_VWO.png'></img>
                     <div className='flex flex-col justify-center bg-purple-100 p-2 '>                   
                        <h4 className='text-pink-500 font-semibold bg-gray-100 h-fit w-fit -translate-y-2'>#experince</h4>
                        <h1 className='text-2xl font-semibold'>Academic Institution Status Active Academic Institution Status Active</h1>
                     </div>
                   </div>
                   <div className='flex justify-end -translate-x-3 text-white mt-4'>
                      <button className='h-fit w-28 p-3  font-semibold bg-purple-700 rounded-l'>View All</button>
                  </div>
            </div>
        </div>
    </div>
  )
}
