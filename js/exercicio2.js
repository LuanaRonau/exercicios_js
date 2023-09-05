function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s

    let horario = new Date()
    let hora = horario.getHours()
    let min = horario.getMinutes()
    let seg  = horario.getSeconds()

    let horarioAtual = "Horário: "
    if (hora == 0) horarioAtual += "12"
    else (horarioAtual += (hora > 12 ? hora -12 + " PM " : hora + " AM "))
    horarioAtual += (min < 10 ? ": 0" : ": ") + min + "m "
    horarioAtual += (seg < 10 ? ": 0" : ": ") + seg + "s"

    console.log(horarioAtual)
}