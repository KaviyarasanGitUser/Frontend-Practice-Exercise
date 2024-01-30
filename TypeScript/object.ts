
interface task {
    id: number;
    todo: string;
    isCompleted: boolean
}

const todoList: task[] = [{id: 1,todo: 'Hello',isCompleted: false}]

const value: string = Math.random().toString(16).slice(2)
console.log(value);

