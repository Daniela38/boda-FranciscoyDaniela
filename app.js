let btn_ubicacion = document.getElementById('btn-ubicacion');
let mapa = document.getElementById('mapa');

btn_ubicacion.addEventListener('click', function () {
    mapa.style.display = "block";
});

let btn_regalo = document.getElementById('btn-regalo');
let datos_bancarios = document.getElementById('datos-bancarios');

btn_regalo.addEventListener('click', function () {
    datos_bancarios.style.display = "block";
});

const weddingDate = new Date("2023-11-04 20:45:00").getTime();
const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = weddingDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = `<p>${days}</p>
                                                    <p>días</p>`;
        document.getElementById("hours").innerHTML = `<p>${hours}</p>
                                                    <p>hs</p>`;
        document.getElementById("minutes").innerHTML = `<p>${minutes}</p>
                                                    <p>min</p>`;
        document.getElementById("seconds").innerHTML = `<p>${seconds}</p>
                                                    <p>seg</p>`;
    } else {
        document.getElementById("faltan").innerText = "¡Llegó el día!";
    }
}

setInterval(updateCountdown, 1000);


/*document.addEventListener("DOMContentLoaded", function () {
    // Fecha objetivo para la cuenta regresiva (puedes cambiarla según tus necesidades)
    const targetDate = new Date("2023-12-31 23:59:59").getTime();
  
    function updateCountdown() {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining > 0) {
        // Cálculo del tiempo restante
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        // Actualizar los elementos HTML con el tiempo restante
        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
      } else {
        // Si el tiempo ha expirado, mostrar un mensaje (puedes personalizarlo)
        document.querySelector(".countdown").innerText = "¡Tiempo expirado!";
      }
    }
  
    // Actualizar la cuenta regresiva cada segundo
    setInterval(updateCountdown, 1000);
  });
  */