import React from 'react'
import drivingQuestions from './../data/assessment/questions.json'
import AssessmentCategoryCard from '../components/Cards/AssessmentCategoryCard'
import NewAssessmentCategoryCard from '../components/Cards/NewAssessmentCategoryCard'
import { Outlet } from 'react-router-dom'

const AssessmentListPage = () => {
  return (
    <div className='p-8 max-w-[1200px] mx-auto'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <NewAssessmentCategoryCard/>
        <AssessmentCategoryCard category={drivingQuestions} />
        <AssessmentCategoryCard category={drivingQuestions} />
        <AssessmentCategoryCard category={drivingQuestions} />
        <AssessmentCategoryCard category={drivingQuestions} />
        <AssessmentCategoryCard category={drivingQuestions} />
        <AssessmentCategoryCard category={drivingQuestions} />
      </div>
    </div>
  )
}

export default AssessmentListPage