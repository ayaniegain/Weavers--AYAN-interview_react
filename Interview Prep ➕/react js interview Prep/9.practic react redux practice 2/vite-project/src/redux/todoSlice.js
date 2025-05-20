import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: [],
  inputValue:'',
  loading:false,
  error:null,
  editId:null,
  toggle:false
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    setInputValue:(state,action)=>{
      state.inputValue=action.payload
    },
    addTodo: (state,action) => {
      state.todo=[...state.todo,{id:Date.now(),task:action.payload,isChecked:false}]
      state.inputValue=''
    },
    deleteTodo: (state,action) => {
      state.todo= state.todo.filter((e)=>e.id!==+action.payload)
    },

    // getEditId:(state, action)=>{

    //   console.log(s.payload)
      
    //   let editTodo= state.todo.find((e)=>e.id===+action.payload)

    //   console.log(editTodo)
      
    //   state.editId=editTodo.id

    //   state.inputValue=editTodo.task


    // },
   getEditId: (state, action) => {
      state.toggle = true;
      let inputvalueText = state.todo.find((e) => e.id == action.payload);

      state.inputValue = inputvalueText.task;
      state.editId = action.payload;
    },


    updateTodo: (state, action) => {
        state.toggle = false;


      state.todo = state.todo.find((e) => e.id == editId? {...e,task:action.payload,isChecked:false}:e)

      state.editId = null;
    },

    checkboxSelected:(state,action)=>{

      state.todo = state.todo.map((e) => e.id == action.payload? {...e,isChecked:!e.isChecked}:e)


    }
  },
})

// Action creators are generated for each case reducer function
export const { setInputValue, addTodo, deleteTodo,updateTodo,getEditId,checkboxSelected } = todoSlice.actions

export default todoSlice.reducer