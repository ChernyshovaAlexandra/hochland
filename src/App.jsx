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
import CardReady from "./screens/CardReady";
import Winners from "./screens/Winners";





const App = () => {
  const [page, setPage] = useState('main')
  const [vk_id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [points, setPoints] = useState('0');
  const [reciever, setReciever] = useState();
  const [matter, setMatter] = useState();
  const [loading, setLoading] = useState(false)
  const [card_url, generateImg] = useState('');
  const [messageWin, showMessage] = useState(false);
  const [limit, showLimit] = useState(false)
  const [messageAdditional, showMessageAdditional] = useState(false);
  const [greeting, setGreeting] = useState('...это порадовать родителей после работы домашними бургерами с плавленым сыром Hochland')
  const [hash, setHash] = useState('')
  const [zoomedCard, setBigCard] = useState(false)
  const [notification, sendNotification] = useState(false)
  const [showAgain, sendNotificationAgain] = useState(localStorage.getItem('allow_vk'))

  const allowNotifications = () => {
    showMessage(false);
    showMessageAdditional(false)
    bridge.send('VKWebAppAllowNotifications')
      .then((data) => {
        if (data.result) {
          sendNotificationAgain(false)

        } else {
          // Ошибка
        }
      })
      .catch((error) => {
        // Ошибка
        console.log(error);
      });
  }


  useEffect(() => {
    

    if (points >= 50 && !showAgain) {
      sendNotification(true);
      localStorage.setItem('allow_vk', true)
      showMessage('Отлично, вы набрали 50 баллов за неделю')
      showMessageAdditional(` и участвуете в розыгрыше сертификатов OZON номиналом 500 рублей! 
      Наберите 100 баллов и участвуйте в розыгрыше тостеров и сертификатов OZON номиналом 1000 рублей.
      В случае победы мы свяжемся с вами в личных сообщения`)
    }
  }, [points])


  const vkLogin = () => {
    bridge.subscribe((e) => {
      if (e.detail.type === "VKWebAppGetUserInfoResult") {
        if (!vk_id) {
          if (!e.detail.data.id) {
            showMessage('Не удалось получить данные от ВКонтакте');
            showMessageAdditional('Пожалуйста, попробуйте обновить страницу')
          } else {
            setId(e.detail.data.id);
          }
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
    getHash();
  }, []);
  useEffect(() => {
    if (vk_id) {
      loginUser();

    }
  }, [vk_id])

  const prepareImage = (matter) => {
    setLoading('Ура! Мы готовим<br/>поздравление 😊')
    API.post('/generate', {
      vk_id: vk_id,
      person: reciever,
      category: matter
    }).then(
      response => {
        if (response.data.success && response.data.id) {
          generateImg(response.data.id);
          showLimit(response.data.limit)
          setGreeting(response.data.text)

          setPoints(response.data.points);
          setTimeout(() => {
            setLoading(false)
            showMessage('Поздравление готово!');
            setPage('result')
          }, 800);
          if (response.data.points - points && !response.data.limit) {
            showMessageAdditional(`Вы заработали ${response.data.points - points} баллов! Осталось выбрать оформление. Используйте кнопки для переключения цвета`)
          } else {
            showMessageAdditional(`Осталось выбрать оформление. Используйте кнопки для переключения цвета`)
          }
        }
        else {
          setLoading(false);
          showMessage('Не получилось подготовить поздравление');
          showMessageAdditional('Возможно, это ошибка сервера. Мы уже работаем над этим');
          setTimeout(() => {
            setPage('main')
          }, 800);
        }

      }
    )
      .catch(error => {
        setLoading(false);
        showMessage('Не получилось подготовить поздравление');
        showMessageAdditional('Возможно, это ошибка сервера. Мы уже работаем над этим');
        setTimeout(() => {
          setPage('main')
        }, 800);
      })
  }

  const getHash = () => {
    var params = window.location.href.split('#');
    params.shift()
    if (params[0]) {
      let hash = params[0].split('&');
      let img = hash.filter(i => i.indexOf('image=') !== -1)[0].replace('image=', '')
      let color = hash.filter(i => i.indexOf('color=') !== -1)[0].replace('color=', '')

      setHash({ image: img, color: color })

    }
  }






  return (
    <div className={`${loading || messageWin || zoomedCard ? 'fixed-body' : ''} content-main`}>
      <>
        {hash ?
          <CardReady image={hash['image']} color={hash['color']} setHash={setHash} /> :
          <>
            {page === 'main' ? null : page === 'rules' ? null :
              <>
                <div className="my-4 bg-red text-white px-4 py-2 rounded-full absolute top-2 right-0 left-0 mx-auto w-fit">Баллы {points}</div>
              </>
            }
            {
              page === 'result' || page === 'rules' || page === 'Winners' ?
                <Button
                  classes='absolute top-2 left-2 text-blue bg-lightBlue rounded-lg p-2 z-30'
                  text={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" /></svg>`}
                  onClick={() => setPage('main')} /> : null
            }
            {
              page === 'task' || page === 'propose' ?
                <Button
                  classes='absolute top-2 left-2 text-blue bg-lightBlue rounded-lg p-2 z-30'
                  text={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" /></svg>`}
                  onClick={() => setPage('result')} /> : null
            }

            {page === 'main' ?
              <Main setPage={setPage} generateImg={generateImg} />
              : page === 'Winners' ?
                <Winners />
                : page === 'cardgen' ?
                  <CardGeneration
                    setPage={setPage}
                    setReciever={setReciever}
                    setMatter={setMatter}
                    prepareImage={prepareImage}
                    setGreeting={setGreeting} />
                  : page === 'result' ?
                    <Result
                      greeting={greeting}
                      setPage={setPage}
                      reciever={reciever}
                      matter={matter}
                      vk_id={vk_id}
                      setLoading={setLoading}
                      showMessage={showMessage}
                      showMessageAdditional={showMessageAdditional}
                      setPoints={setPoints}
                      points={points}
                      limit={limit}
                      card_url={card_url}
                      setBigCard={setBigCard}
                      zoomedCard={zoomedCard}
                    /> :
                    page === 'task' ?
                      <Task vk_id={vk_id}
                        setLoading={setLoading}
                        setPoints={setPoints}
                        messageWin={messageWin}
                        showMessage={showMessage}
                        setPage={setPage}
                        points={points}
                        showMessageAdditional={showMessageAdditional} /> :
                      page === 'rules' ?
                        <Rules setPage={setPage} /> :
                        page === 'propose' ?
                          <MyPropose
                            setPage={setPage}
                            vk_id={vk_id}
                            setPoints={setPoints}
                            points={points}
                            setLoading={setLoading}
                            showMessage={showMessage}
                            showMessageAdditional={showMessageAdditional} /> : null}
            {loading ? <Loader loading={loading} /> : null}
            {messageWin ?
              <Message
                onClick={allowNotifications}
                button={notification}
                message={messageWin}
                showMessage={showMessage}
                showMessageAdditional={showMessageAdditional}
                messageAdditional={messageAdditional} /> : null}
          </>
        }

      </>
    </div>
  );
}

export default App;
