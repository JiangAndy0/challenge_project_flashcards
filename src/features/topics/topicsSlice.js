import {createSlice} from '@reduxjs/toolkit';


const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        //adds a new topic to the App's state
        addTopic (state, action) { 
            const {id, name, icon} = action.payload; 
            state.topics[id] = { //add a new topic object to state.topics
                id, name, icon,
                quizIds: []
            }
        },
        //adds a quiz's id to the quizIds array of its topic
        addQuizIdToTopic (state, action) {
            const {quizId, topicId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export default topicsSlice.reducer;
export const {addTopic, addQuizIdToTopic} = topicsSlice.actions;
export const selectTopics = state => state.topics.topics;
