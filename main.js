var arar = [];
do {
    var x = prompt('Введите команду: add/del/stop', "add Иван");
    
    var y = x.split(" ")
      
    if (y[0] == "add") {
        arar.push(y[1])
    } else if (y[0] == "del") {
        for (let key in arar) {
            console.log(key);
            if (arar[key] == y[1]) {
                arar.splice(key, 1)
            }
        }
    }
    
    console.log(arar);
} while ( y[0] != "stop");