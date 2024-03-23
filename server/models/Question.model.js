import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
    key : {
        type: Number,
        enum: [1,2,3,4]
    },
    value: String
})


export const questionSchema = new mongoose.Schema({
    question : String,
    image: String,
    options : [optionSchema],
    correctAnswer: {
        type: Number,
        enum : ["one","two","three","four"]
    }
})

const Question = mongoose.model("Question", questionSchema)

export default Question;