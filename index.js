let newHours = 0;
let newMinutes = 0;
let intervalID;
let backgroundImage = '/Images/IST1.png';

//Preloading the images before loading the website
const images = [
    '/Images/IST1.png',
    '/Images/UTC3.png',
    '/Images/EST2.png',
    '/Images/PST1.png',
    '/Images/CET1.png',
    '/Images/AEST1.jpg',
    '/Images/JST1.png',
];

images.forEach((image) => {
    const img = new Image();
    img.src = image;
});

// Function to Update the current city the user has selected.
function updateCity() {
    let currentCity = document.getElementById("citySelect");
    let newBackgroundImage = '/Images/IST1.png';

    switch (currentCity.value) {
        case "IST": newHours = 0; newMinutes = 0;
        newBackgroundImage = '/Images/IST1.png';
            break;
        case "UTC": newHours = -5; newMinutes = -30;
        newBackgroundImage = '/Images/UTC3.png';
            break;
        case "EST": newHours = -10; newMinutes = -30;
        newBackgroundImage = '/Images/EST2.png';
            break;
        case "PST": newHours = -13; newMinutes = -30;
        newBackgroundImage = '/Images/PST1.png';
            break;
        case "CET": newHours = -4; newMinutes = 30;
        newBackgroundImage = '/Images/CET1.png';
            break;
        case "AEST": newHours = 4; newMinutes = 30;
        newBackgroundImage = '/Images/AEST1.jpg';
            break;
        case "JST": newHours = 3; newMinutes = 30;
        newBackgroundImage = '/Images/JST1.png';
            break;

        default: newHours = 0; newMinutes = 0;
        newBackgroundImage = '/Images/IST1.png';
            break;
    }

    console.log(backgroundImage);

    document.body.style.opacity = '0';

    setTimeout (() => {
        document.body.style.backgroundImage = `url('${newBackgroundImage}')`;

        document.body.style.opacity = '1';
    }, 450);

    // console.log(currentCity.value);

    updateClock();
    updateDate();

}
// Function To Update the realtime clock
function updateClock() {
    const currenTime = new Date();

    let hours = currenTime.getHours() + newHours;
    let minutes = currenTime.getMinutes() + newMinutes;

    // Edge case to adjust minute overflow
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }
    else if (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }

    let meridiem = hours >= 12 ? "PM" : "AM";

    // Edge case to adjust merdidiem if hours overflow is true()
    if (hours >= 24) {
        hours -= 24;
        meridiem = "AM";
    }
    else if (hours < 0) {
        hours += 24;
        meridiem = "PM";
    }

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const formattedHours = hours.toString().padStart(2, 0);
    const formattedMinutes = minutes.toString().padStart(2, 0);
    const seconds = currenTime.getSeconds().toString().padStart(2, 0);
    const nowTime = `${formattedHours}:${formattedMinutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = nowTime;
}
// Function To Update the realtime date
function updateDate() {
    const currentDate = new Date();

    let hours = currentDate.getHours() + newHours;
    let minutes = currentDate.getMinutes() + newMinutes;

    let date = currentDate.getDate().toString().padStart(2, 0);
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    date = Number(date);

     // Edge case to adjust minute overflow
     if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }
    else if (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }

    // Edge case to adjust hours overflow
    if (hours >= 24) {
        hours -= 24;
        date += 1;
    }
    else if (hours < 0) {
        hours += 24;
        date -= 1;
    }

    // Edge case to adjust months overflow
    switch (month) {
        case 0:
            if (date > 31) {
                date -= 31;
                month += 1;
            }
            else if (date < 0) {
                date += 31;
                month -= 1;
            }
            break;
        case 1:
            if (date > 28) {
                date -= 28;
                month += 1;
            }
            else if (date < 0) {
                date += 28;
                month -= 1;
            }
            break;
        case 2:
            if (date > 31) {
                date -= 31;
                month += 1;
            }
            else if (date < 0) {
                date += 31;
                month -= 1;
            }
            break;
        case 3:
            if (date > 30) {
                date -= 30;
                month += 1;
            }
            else if (date < 0) {
                date += 30;
                month -= 1;
            }
            break;
        case 4:
            if (date > 31) {
                date -= 31;
                month += 1;
            }
            else if (date < 0) {
                date += 31;
                month -= 1;
            }
            break;
        case 5:
            if (date > 30) {
                date -= 30;
                month += 1;
            }
            else if (date < 0) {
                date += 30;
                month -= 1;
            }
            break;
        case 6:
            if (date > 31) {
                date -= 31;
                month += 1;
            }
            else if (date < 0) {
                date += 31;
                month -= 1;
            }
            break;
        case 7:
            if (date > 31) {
                date -= 31;
                month += 1;
            }
            else if (date < 0) {
                date += 31;
                month -= 1;
            }
            break;
        case 8:
            if (date > 30) {
                date -= 30;
                month += 1;
            }
            else if (date < 0) {
                date += 30;
                month -= 1;
            }
            break;
        case 9:
            if (date > 31) {
                date -= 31;
                month += 1;
            }
            else if (date < 0) {
                date += 31;
                month -= 1;
            }
            break;
        case 10:
            if (date > 30) {
                date -= 30;
                month += 1;
            }
            else if (date < 0) {
                date += 30;
                month -= 1;
            }
            break;
        case 11:
            if (date > 31) {
                date -= 31;
                month += 1;
            }
            else if (date < 0) {
                date += 31;
                month -= 1;
            }
            break;

        default: if (date > 31) {
            date -= 31;
            month += 1;
        }
        else if (date < 0) {
            date += 31;
            month -= 1;
        }
            break;
    }

    // Edge case to handle years overwflow
    if (month > 11) {
        month -= 12;
        year += 1;
    }
    else if (month < 0) {
        month += 12;
        year -= 1;
    }

    const nowDate = `${date} ${monthConverter(month)}, ${year}`;
    function monthConverter(month) {
        let displayMonth = "";
        switch (month) {
            case 0:
                displayMonth = "January";
                break;
            case 1:
                displayMonth = "February";
                break;
            case 2:
                displayMonth = "March";
                break;
            case 3:
                displayMonth = "April";
                break;
            case 4:
                displayMonth = "May";
                break;
            case 5:
                displayMonth = "June";
                break;
            case 6:
                displayMonth = "July";
                break;
            case 7:
                displayMonth = "August";
                break;
            case 8:
                displayMonth = "September";
                break;
            case 9:
                displayMonth = "October";
                break;
            case 10:
                displayMonth = "November";
                break;
            case 11:
                displayMonth = "December";
                break;

            default: displayMonth = "NaN";
                break;
        }
        return displayMonth;
    }
    document.getElementById("date_year").textContent = nowDate;
}
// Function to Update and Display the Current Time Zone
function updateTimeZone() {
    const timeZone = document.getElementById("timeZone");
    const defaultTimeZone = "Indian Standard Time";
    const defaaultcities = [defaultTimeZone, "Kolkata", "New Delhi", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Chennai", "Lucknow", "Ahmedabad"];

    const UTC = "Coordinated Universal Time";
    const utcCities = [UTC, "Greenwich Mean Time", "Iceland", "The Gambia", "Senegal", "Guinea", "Mauritinia", "Burkina Faso"];

    const EST = "Eastern Standard Time";
    const estCities = [EST, "New York", "Washington D.C.", "Torronto", "Miami", "Atlanta", "Boston", "Philadelphia", "Havana"];

    const PST = "Pacific Standard Time";
    const pstCities = [PST, "Los Angeles", "San Fransisco", "Seattle", "Vancouver", "Las Vegas", "San Diego", "Portland"];

    const CET = "Central European Time";
    const cetCities = [CET, "Berlin", "Paris", "Rome", "Madrid", "Vienna", "Zurich", "Amsterdam", "Brussels", "Stockholm", "Prague"];

    const AEST = "Australian Standard Time";
    const aestCities = [AEST, "Sydney", "Melbourne", "Brisbane", "Canberra", "Hobart", "Gold Coast", "Newcastle", "Wollygong", "Geelong", "Toowoomba"];

    const JST = "Japan Standard Time";
    const jstCities = [JST, "Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya", "Sapporo", "Kobe", "Hiroshima", "Fukoka", "Sendai"];

    let currentIndex = 0;
    let cities;
    cities = defaaultcities;

    let cCity = document.getElementById("citySelect");
    // console.log(cCity.value);
    
    switch (cCity.value) {
        case "IST": cities = defaaultcities;
            break;
        case "UTC": cities = utcCities;
            break;
        case "EST": cities = estCities;
            break;
        case "PST": cities = pstCities;
            break;
        case "CET": cities = cetCities;
            break;
        case "AEST": cities = aestCities;
            break;
        case "JST": cities = jstCities;
            break;
            
        default: cities = defaaultcities;
            break;
    }

    if(intervalID){
        clearInterval(intervalID);
    }

    timeZone.textContent = cities[currentIndex];
    timeZone.classList.add('show');

    intervalID = setInterval(() => {

        timeZone.classList.remove('show');
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % cities.length;
            let city = cities[currentIndex];
            timeZone.textContent = `${city}`;

            timeZone.classList.add('show');
        }, 1000);
    }, 3000);

    updateCity();
}
updateTimeZone();
updateDate();
updateCity();

setInterval(updateClock, 1000);
setInterval(updateDate, 1000);

document.getElementById("citySelect").addEventListener("change", updateCity);
