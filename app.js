let btn_ubicacion = document.getElementById('btn-ubicacion');
let mapa = document.getElementById('mapa');

btn_ubicacion.addEventListener('click', function () {
  if (mapa.style.display === "block") {
    mapa.style.display = "none";
  } else {
    mapa.style.display = "block";
  }
});

let btn_regalo = document.getElementById('btn-regalo');
let datos_bancarios = document.getElementById('datos-bancarios');

btn_regalo.addEventListener('click', function () {
  if (datos_bancarios.style.display === "block") {
    datos_bancarios.style.display = "none";
  } else {
    datos_bancarios.style.display = "block";
  }
});

const weddingDate = new Date("2023-11-04 20:55:00").getTime();
const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = weddingDate - now;
    const day = document.getElementById("days");
    const hour = document.getElementById("hours");
    const minute = document.getElementById("minutes");
    const second = document.getElementById("seconds");

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        day.innerHTML = `<p>${days}</p>
                        <p>días</p>`;
        hour.innerHTML = `<p>${hours}</p>
                          <p>hs</p>`;
        minute.innerHTML = `<p>${minutes}</p>
                            <p>min</p>`;
        second.innerHTML = `<p>${seconds}</p>
                            <p>seg</p>`;
    } else {
        document.getElementById("faltan").style.textDecoration = "line-through";
        document.getElementById('llego').style.display = "block";
        day.innerHTML = `<p>0</p>
                          <p>días</p>`;
        hour.innerHTML = `<p>0</p>
                          <p>hs</p>`;
        minute.innerHTML = `<p>0</p>
                            <p>min</p>`;
        second.innerHTML = `<p>0</p>
                            <p>seg</p>`;
    }
}

setInterval(updateCountdown, 1000);