import React, { useRef, useCallback, useState } from 'react';
import produce from  'immer';

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(e =>{
    const { name, value } = e.target;

    // setForm({
    //   ...form,
    //   [name]: [value],
    // });
    setForm(
      // produce(form, draft => {
      //   draft[name] = value
      // })
      produce(draft => {
        draft[name] = value
      })
    )

    console.log(produce(form, draft => {
      draft[name] = value
    }))

    console.log(produce(draft => {
      draft[name] = value
    }))

  }, [form]);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username
    };

    // setData({
    //   ...data,
    //   array: data.array.concat(info)
    // });
    setData(
      // produce(data, draft => {
      //   draft.array.push(info)
      // }
      produce(draft => {
        draft.array.push(info)
      }
    ))

    // setForm({
    //   name: '', username: ''
    // });
    setForm(
      // produce(form, draft => {
      //   draft.name = '';
      //     draft.username = '';
      //   }
      // )
      produce(draft => {
        draft.name = '';
          draft.username = '';
        }
      )
    )

    nextId.current += 1;
  }, [form]);

  const onRemove = useCallback(id => {
    // setData({
    //   ...data,
    //   array: data.array.filter(info => info.id !== id)
    // });
    setData(
      // produce(data, draft => {
      //   draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
      // })
      produce(draft => {
        draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
      })
    )
  }, []);


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
