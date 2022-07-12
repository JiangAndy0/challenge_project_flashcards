import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        //adds a new quiz to the app's state using its ID as a key
        addQuiz(state, action) {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

//adds a quiz object to the app's quizzes state and associates it with its topic
export const setupQuiz = ( quiz ) => {
    return (dispatch) => {
        dispatch( quizzesSlice.actions.addQuiz(quiz) );
        dispatch( addQuizIdToTopic({quizId: quiz.id, topicId: quiz.topicId}) );
    }
}

export default quizzesSlice.reducer;
export const {addQuiz} = quizzesSlice.actions;
export const selectQuizzes = state => state.quizzes.quizzes;
