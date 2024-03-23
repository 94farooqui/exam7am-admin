import React, { useState } from 'react'

const initialValues = {
    question : "",
    options : []
}

const AssessmentNewQuestion = () => {
    const [newQuestion,setNewQuestion] = useState(initialValues)

    const onInputChange = (e) => {
        setNewQuestion({...newQuestion, [e.target.name]: e.target.value})
    }

    const onOptionChnge = (e) => {
        const newOption = {option:e.target.name,value:e.target.value}
        setNewQuestion({...newQuestion, options : [...newQuestion.options,newOption]})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(newQuestion)
    }
  return (
    <div className='max-w-[1200px] mx-auto py-8'>
        <div className='w-full flex flex-col gap-4'>
            <h2 className='text-2xl font-bold text-slate-600'>Add Question</h2>
            <form onSubmit={(e)=>handleFormSubmit(e)} className='flex flex-col gap-6 bg-white p-8 rounded-md'>
                <div className='flex flex-col gap-1'>
                    <label className='text-lg font-semibold text-slate-600'>Question</label>
                    <textarea name='question' onChange={(e)=>onInputChange(e)} className='p-2 resize-none border border-slate-300 rounded-md' rows={3} placeholder='Add a new question' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label>Option 01</label>
                    <input type='text' name='one' onChange={(e)=>onOptionChnge(e)} className='flex-1 border border-slate-200 p-2 rounded-md' placeholder='Enter option text' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label>Option 02</label>
                    <input type='text' name='two' onChange={(e)=>onOptionChnge(e)} className='flex-1 border border-slate-200 p-2 rounded-md' placeholder='Enter option text' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label>Option 03</label>
                    <input type='text' name='three' onChange={(e)=>onOptionChnge(e)} className='flex-1 border border-slate-200 p-2 rounded-md' placeholder='Enter option text' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label>Option 04</label>
                    <input type='text' name='four' onChange={(e)=>onOptionChnge(e)} className='flex-1 border border-slate-200 p-2 rounded-md' placeholder='Enter option text' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label>Correct Option</label>
                    <select name='correctAnswer' onChange={(e)=>onInputChange(e)} className='border border-slate-200 p-2 rounded-md '>
                        <option value='one'>Option 01</option>
                        <option value='two'>Option 02</option>
                        <option value='three'>Option 03</option>
                        <option value='four'>Option 04</option>
                    </select>
                </div>
                <div className='flex justify-end gap-2'>
                    <button type='reset' className=" w-16 bg-red-900 rounded-md p-2 text-sm text-white" >Cancel</button>
                    <button type='submit' className=" w-16 bg-green-900 rounded-md p-2 text-sm text-white" >Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AssessmentNewQuestion