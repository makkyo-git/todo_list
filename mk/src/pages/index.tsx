import { useState } from "react";

export default function Home() {
  const [text,setText] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text)
  };

  const addTodos = () => {
    // formの内容が空白の場合はメッセージが出る
    if (text === "") {
      alert("文字を入力してください");
      return;
    }
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>TO DO リスト</h1>
      <div className="form">
           <input 
             type="text"  
             name="todo" 
             onChange={e => setText(e.target.value)} 
             value={text}
           />
           <button onClick={addTodos}>追加</button>
        </div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>削除</button>
              </li>
            );          
          })}
        </ul>
        <style>{`
          h1 {
            text-align: center;
          }
          .form {
            display: flex;
            justify-content: center;
          }
          ul {
            width: 200px;
            margin: 10px auto;
          }
        `}</style>
    </>
  );
}