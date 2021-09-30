import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type:String,
  }    
}, { timestamps: true });
const Todo = mongoose.model('Todo', todoSchema)
export default Todo;

// const Schema = mongoose.Schema;
// const todoSchema = new Schema({
//   title:  String,
//   content: String,   
// }, { timestamps: true });
// const Todo = mongoose.model('Todo', todoSchema)
// export default Todo;