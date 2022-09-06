export type TodoType = {
     text: string | undefined,
     completed: boolean,
     id:number,
};

export interface TodosProps {
     todos: TodoType[] | undefined,
     onCompleted: (id:number) => void,
     onClose: (id:number) => void,
};