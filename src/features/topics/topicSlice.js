import {createSlice} from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        //adds a new topic to the App's state
        addTopic (state, action) { 
            const {id, name, icon} = action.payload; //destructuring the action's payload
            state.topics[id] = { //add a new topic object to state.topics
                id, name, icon,
                quizIds: []
            }
        }
    }
});

export default topicsSlice.reducer;
export const {addTopic} = topicsSlice.actions;
export const selectTopics = state => state.topics.topics;
