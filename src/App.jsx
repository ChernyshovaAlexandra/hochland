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
import Loader, { Message } from "./components/Loader";
import Rules from "./screens/Rules";





const App = () => {
  const [page, setPage] = useState('main')
  const [vk_id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [points, setPoints] = useState('0');
  const [reciever, setReciever] = useState();
  const [matter, setMatter] = useState();
  const [loading, setLoading] = useState(false)
  const [imgGen, generateImg] = useState(null);
  const [messageWin, showMessage] = useState(false)
  const [messageAdditional, showMessageAdditional] = useState(false)

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

  const prepareImage = (matter) => {
    setLoading('Ура! Мы готовим<br/>поздравление 😊')
    // send()
    API.post('/generate', {
      vk_id: vk_id,
      who: reciever,
      how: matter
    }).then(
      response => {
        if (response.data.success) {
          generateImg(response.data.image_url);
          setLoading(false)
        }
        else {
          setLoading(false);
          showMessage('Не получилось подготовить поздравление');
          showMessageAdditional('Возможно, это ошибка сервера. Мы уже работаем над этим')
        }

      }
    )
      .catch(error => {
        console.log(error.data);
        setLoading(false);
        showMessage('Не получилось подготовить поздравление');
        showMessageAdditional('Возможно, это ошибка сервера. Мы уже работаем над этим')
      })
  }



  return (
    <div className="content-main">
      {page === 'main' ? null : page === 'rules' ? null :
        <>
          <div className="my-4 bg-red text-white px-4 py-2 rounded-full absolute top-2 right-0 left-0 mx-auto w-fit">Баллы {points}</div>
          {/* <Button classes='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 absolute' text="Назад" onClick={() => setPage('main')} /> */}
        </>
      }
      {page === 'main' ? <Main setPage={setPage} />
        : page === 'cardgen' ? <CardGeneration setPage={setPage} setReciever={setReciever} setMatter={setMatter} prepareImage={prepareImage} />
          : page === 'result' ?
            <Result setPage={setPage} reciever={reciever} matter={matter} vk_id={vk_id} setLoading={setLoading} showMessage={showMessage}
              showMessageAdditional={showMessageAdditional}
              setPoints={setPoints}
              /> :
            page === 'task' ?
              <Task vk_id={vk_id}
                setLoading={setLoading}
                setPoints={setPoints}
                messageWin={messageWin}
                showMessage={showMessage}
                showMessageAdditional={showMessageAdditional} /> :
              page === 'rules' ? <Rules setPage={setPage} /> :
                <MyPropose
                  vk_id={vk_id}
                  setPoints={setPoints}
                  setLoading={setLoading}
                  showMessage={showMessage}
                  showMessageAdditional={showMessageAdditional} />}
      {loading ? <Loader loading={loading} /> : null}
      {messageWin ? <Message
        message={messageWin}
        showMessage={showMessage}
        showMessageAdditional={showMessageAdditional}
        messageAdditional={messageAdditional} /> : null}
    </div>
  );
}

export default App;
