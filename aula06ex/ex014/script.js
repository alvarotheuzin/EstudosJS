function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){

        img.src = 'img/sol.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são <strong>${hora} horas</strong> da manhã.`
    }
    else if (hora >= 12 && hora < 18){

        img.src = 'img/sol.png'
        document.body.style.background = '#B9846f'
        msg.innerHTML = `Agora são <strong>${hora} horas</strong> da tarde.`
    }
    else{
        img.src = 'img/lua.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são <strong>${hora} horas</strong> da noite.`

    }
}