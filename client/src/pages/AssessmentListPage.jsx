import React from 'react'
import trafficSigns from './../data/assessment/traffics-signs.json'
import safetySigns from './../data/assessment/safety-signs.json'
import studyQuestions from './../data/assessment/study-questions.json'
import AssessmentCategoryCard from '../components/Cards/AssessmentCategoryCard'
import NewAssessmentCategoryCard from '../components/Cards/NewAssessmentCategoryCard'
import { Outlet } from 'react-router-dom'

const AssessmentListPage = () => {
  return (
    <div className='p-8 max-w-[1200px] mx-auto'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <NewAssessmentCategoryCard/>
        <AssessmentCategoryCard category={trafficSigns} />
        <AssessmentCategoryCard category={safetySigns} />
        <AssessmentCategoryCard category={studyQuestions} />
        <AssessmentCategoryCard category={trafficSigns} />
        <AssessmentCategoryCard category={safetySigns} />
        <AssessmentCategoryCard category={studyQuestions} />
      </div>
    </div>
  )
}

export default AssessmentListPage