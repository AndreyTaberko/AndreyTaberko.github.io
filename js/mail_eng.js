// Отправка данных на сервер
function send(event, php){
    console.log("Send request");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Message sent");
            } else {
                // Если произошла ошибка
                alert("Mistake. Message not sent");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Server error. Room: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Error sending request");};
    req.send(new FormData(event.target));
    }
