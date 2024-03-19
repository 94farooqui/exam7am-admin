import React from "react";
import { Link } from "react-router-dom";

const AssessmentCategoryCard = ({category}) => {
  return (
    <Link to={`${category.id}`}>
    <div className=" w-full border-2 border-slate-400 p-4 rounded-lg flex flex-col gap-4 items-center font-poppins">
      <h2 className="text-slate-600  font-bold">{category.title}</h2>
      <h3>{category.questions.length}</h3>
    </div>
    </Link>
  );
};

export default AssessmentCategoryCard;
