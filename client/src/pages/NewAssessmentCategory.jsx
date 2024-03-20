import React from 'react'

const NewAssessmentCategory = () => {
  return (
    <div className='max-w-[1200px] mx-auto font-poppins py-12'>
        <div className='w-full bg-white shadow-md p-12'>
            <h2 className='text-slate-500 text-2xl font-bold mb-6'>Add Assessment Category</h2>
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label>Title</label>
                    <input className='p-2 border rounded-md' type='text' placeholder='Eg: Marketing' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Description</label>
                    <textarea className='p-2 border rounded-md resize-none' rows={3} placeholder='Eg: Get all the essential assessments to master in marketing' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Image</label>
                    <input className='p-2 border rounded-md' type='file' placeholder='Eg: Marketing' />
                </div>
                <button type='submit' className='bg-[#0E416D] text-white px-8 py-2 rounded-md self-center mt-4'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default NewAssessmentCategory