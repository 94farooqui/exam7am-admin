import React from "react";

const AssessmentTitleCard = ({assessment}) => {
  return (
    <div className="w-full flex justify-between bg-white p-6 rounded-lg items-center shadow-md">
      <div className="w-[70%] flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-sky-700">
          {assessment.title}
        </h2>
        <p>{assessment.description}</p>
      </div>
      <img src={assessment.image} className="w-44 rounded-lg" />
    </div>
  );
};

export default AssessmentTitleCard;
