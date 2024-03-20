import React from "react";
import { Link } from "react-router-dom";
import driving from "./../../assets/car-icon.svg";

const AssessmentCategoryCard = ({ category }) => {
  return (
    <Link to={`${category.id}`}>
      <div className=" w-full border-2 border-slate-100  bg-white shadow-sm rounded-sm flex gap-2 items-center font-poppins p-2">
        <div className="flex flex-col gap-2 pl-2 py-8">
          <div className="flex gap-2 items-center">
          <img className="w-12" src={driving} />
          <h2 className="text-slate-600  font-bold">{category.title}</h2>
          </div>
            <h2 className="text-slate-500 text-xs ">{category.description}</h2>
          
        </div>
        <div className="pr-2 py-8">
        <h3 className="text-2xl font-semibold bg-slate-700 text-whit p-2 text-white rounded-full">{category.questions.length}</h3>
        </div>
       
      </div>
    </Link>
  );
};

export default AssessmentCategoryCard;
