import React from 'react';
import { TodosProps } from '../../models';


const CompletedTasks:React.FC<TodosProps> = ({todos, onCompleted, onClose}) => {

     return (
          <div className='pb-10'>
               <h2 className='font-bold text-xl text-purple-900 text-center mb-3'>CompletedTasks</h2>
               <div className="flex justify-center gap-5 flex-wrap">
                    {todos && todos.map(item => {
                         if(item.completed === true) {
                              return (
                                   <div key={item.id} className="flex justify-center items-center gap-x-3 bg-slate-500 py-1 px-5 rounded-lg">
                                        <input onClick={() => onCompleted(item.id)} className='cursor-pointer' defaultChecked={true} type="checkbox" />
                                        <p className='text-white font-bold line-through'>{item.text}</p>
                                        <img onClick={() => onClose(item.id)} className='w-6 cursor-pointer ' src="closeIcon.png" alt="closeIcon" />
                                   </div>
                         )}
                    })}
               </div>
          </div>
     )
}

export default CompletedTasks;