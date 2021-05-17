function displayTime() {
    // DOM Element
    const headerTime = document.getElementById('header-time');

    // Time methods
    let today = new Date(),
            hour = today.getHours(),
            minutes = today.getMinutes(),
            seconds = today.getSeconds(),
            day = today.getDay(),
            date = today.getDate(),
            month = today.getMonth() + 1,
            year = today.getFullYear();
    
    // Output week's day    
    const dayNames = ['Domingo', 'Segunda-Feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        
    // Output time
    headerTime.innerHTML = `
        <div class="dayAndDate">
            <div class="day">
                <span>${dayNames[day]}</span>
            </div>

            <div class="date">
                <i class="far fa-calendar-alt"></i>
                <span>${addZeros(date)}/${addZeros(month)}/${year}</span>
            </div>
        </div>

        <div class="hours">
            <i class="far fa-clock"></i>
            <span>${addZeros(hour)}:${addZeros(minutes)}:${addZeros(seconds)}</span>
        </div>
    `
    // Refresh display time
    setTimeout(displayTime, 1000);
}

// Adding zeros for better display of time
function addZeros(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Running functions
displayTime();
addZeros();