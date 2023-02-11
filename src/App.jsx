import React, { useEffect, useState } from "react";
import Main from "./screens/Main";
import bridge from '@vkontakte/vk-bridge';
import CardGeneration from "./screens/CardGeneration";
import Result from "./screens/Result";
import Task from "./screens/Task";
import MyPropose from "./screens/MyPropose";
import Button from "./components/Button";
import './assets/scss/styles.scss'
import API from "./utils/API";
import Header from "./components/Header";





const App = () => {
  const [page, setPage] = useState('main')
  const [vk_id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [points, setPoints] = useState('0');
  const [reciever, setReciever] = useState();
  const [matter, setMatter] = useState();
  const [loading, setLoading] = useState(false)

  const vkLogin = () => {
    bridge.subscribe((e) => {
      if (e.detail.type === "VKWebAppGetUserInfoResult") {
        if (!vk_id) {
          setId(e.detail.data.id);
        }
        if (!name) {
          setName(e.detail.data.first_name + ' ' + e.detail.data.last_name);
        }
      }
    });
    bridge.send("VKWebAppGetUserInfo");
  };
  const loginUser = async () => {
    await API.post('/login', {
      vk_id: vk_id,
      name: name
    }).then(res => {
      if (res.data.success) {
        setPoints(res.data.points)
      }
    })
  };

  useEffect(() => {
    bridge.send("VKWebAppInit");
    vkLogin();
  }, []);
  useEffect(() => {
    if (vk_id) { loginUser(); }
  }, [vk_id])



  return (
    <div className="content-main">
      {page === 'main' ? null :
        <>
          <div className="my-4 bg-red text-white px-4 py-2 rounded-full absolute top-2 right-0 left-0 mx-auto w-fit">Баллы {points}</div>
          {/* <Button classes='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 absolute' text="Назад" onClick={() => setPage('main')} /> */}
        </>
      }
      {page === 'main' ? <Main setPage={setPage} />
        : page === 'cardgen' ? <CardGeneration setPage={setPage} setReciever={setReciever} setMatter={setMatter} />
          : page === 'result' ? <Result setPage={setPage} reciever={reciever} matter={matter} vk_id={vk_id} setLoading={setLoading} /> :
            page === 'task' ? <Task /> :
              <MyPropose vk_id={vk_id} />}
      {loading ? <div className="loader">
        <div className="grid gap-4 items-center">
          <Header text={loading} size="text-blue text-3xl mb-4 text-center" />
          <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
          </svg>
        </div>

      </div> : null}
    </div>
  );
}

export default App;
