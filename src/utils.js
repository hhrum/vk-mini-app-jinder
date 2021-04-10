const goBack = () => {
  if( history.length === 1 ) {  // Если в массиве одно значение:
    bridge.send("VKWebAppClose", {"status": "success"}); // Отправляем bridge на закрытие сервиса.
  } else if( history.length > 1 ) { // Если в массиве больше одного значения:
    history.pop() // удаляем последний элемент в массиве.
    setActivePanel( history[history.length - 1] ) // Изменяем массив с иторией и меняем активную панель.
  }
}