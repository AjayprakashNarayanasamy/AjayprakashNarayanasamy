import React from "react";
import DoneList from "../DoneList";
import TodosList from "../TodosList";

let todos = [
  {
    userId: 1,
    id: 1,
    title: "1. Can you me about Your self? Answer - Your interviewers will likely start out with a question about you and your background to get to know you. Start by giving them an overview about your current position or activities then provide the most important and relevant highlights from your background that make you the most qualified for the role. If you’d like, it is generally acceptable to include some light personal details about things like your pets, hobbies or family. Doing so can help you be more memorable and personable to the interviewer.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 2,
    title: "2. How would you describe yourself? Answer - When interviewers ask you to talk about yourself, they’re looking for information about how your qualities and characteristics align with the skills they believe is required to succeed in the role. If possible, include quantifiable results to demonstrate how you use your best attributes to drive success.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 3,
    title: "3. What makes you unique? Answer - Employers often ask this question to identify why you might be more qualified than other candidates they’re interviewing. To answer, focus on why hiring you would benefit the employer. As you don’t know the other applicants, it can be challenging to think about your answer in relation to theirs. Addressing why your background makes you a good fit will let employers know why your traits and qualifications make you well prepared.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 4,
    title: "4. Why do you want to work here? Answer - Interviewers often ask this question as a way to determine whether or not you took time to research the company and to learn why you see yourself as a good fit. The best way to prepare for this question is to do your homework and learn about the products, services, mission, history and culture of this workplace. In your answer, mention the aspects of the company that appeal to you and align with your career goals. Explain why you’re looking for these things in an employer.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 5,
    title: "5. What interests you about this role? Answer - Like the previous question, hiring managers often include this question to make sure you understand the role and to give you the opportunity to highlight your relevant skills. In addition to thoroughly reading the job description, it can be helpful to compare the role requirements against your skills and experience. Choose a few things you particularly enjoy or excel at and focus on those in your answer.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 6,
    title: "6. What motivates you? Answer - Employers ask this question to gauge your level of self-awareness and ensure your sources of motivation align with the role. To answer, be as specific as possible, provide real-life examples and tie your answer back to the job role.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 7,
    title: "7. What are you passionate about? Answer - Much like the previous question about motivation, employers might ask what you are passionate about to better understand what drives you and what you care most deeply about. This can help them understand whether you are a good fit for the role and if it fits into your larger goals. To answer, select something you are genuinely passionate about, explain why you’re passionate about it, give examples of how you’ve pursued this passion and relate it back to the job.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 8,
    title: "8. Why are you leaving your current job? Answer - There are many reasons for leaving a job. Prepare a thoughtful answer that will give your interviewer confidence that you’re being deliberate about this job change. Instead of focusing on the negative aspects of your current or previous role, focus on the future and what you hope to gain in your next position.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 9,
    title: "9. What are your greatest strengths? Answer - This question gives you an opportunity to talk about your technical and soft skills. To answer, share qualities and personal attributes and then relate them back to the role for which you’re interviewing.",
    completed: false,
    deleted: false,
  },
  {
    userId: 1,
    id: 10,
    title: "10. What are your greatest weaknesses? Answer - It can feel awkward to discuss your weaknesses in an environment where you’re expected to focus on your accomplishments. However, when answered correctly, sharing your weaknesses can show that you are self-aware and want to continuously get better at your job—traits that are extremely attractive to many employers. Remember to start with the weakness and then discuss the measures you’ve taken to improve. This way, you’re finishing your answer on a positive note.", 
    completed: false,
    deleted: false,
  },
];

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
    
  }

  getTodoItems = () => this.state.todos.filter((todo) => !todo.completed);
  getDoneItems = () => this.state.todos.filter((todo) => todo.completed);

  toggleTodoCompleted = (todoId) => {
    const tempTodos = [...this.state.todos];
    const todo = tempTodos.find((todo) => todo.id === todoId);
    todo.completed = !todo.completed;
    this.setState({ todos: tempTodos });
  };

  deleteTodo = (todoId) => {
    const tempTodos = [...this.state.todos];
    const todo = tempTodos.find((todo) => todo.id === todoId);
    todo.deleted = true;
    this.setState({ todos: tempTodos });
  };

  render() {
    return (
      <div className="container">
        <h4>Quora</h4>
        <div className="row">
          <div className="col-md-6">
            <TodosList>
              deleteTodo={this.deleteTodo}
              toggleTodoCompleted={this.toggleTodoCompleted}
              items={this.getTodoItems()}
            </TodosList>
          </div>
          <div className="col-md-6">
            <DoneList items={this.getDoneItems()}></DoneList>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;