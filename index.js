let formChecker = false;

window.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formChecker === true) alert('High Five!');
});

let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const datalistCountry = document.getElementById('dl-country');
const country = document.getElementById('country');

for (let i = 0; i < countries.length; i++) {
    const countryOption = countries[i];
    const option = document.createElement('option');
    option.textContent = countryOption;
    option.value = countryOption;
    datalistCountry.appendChild(option);
}

country.addEventListener('input', checkCountryValidity);

function checkCountryValidity() {
    if (country.value === '') {
        country.style.boxShadow = null;
        formChecker = false;
    }
    else if (!countries.includes(country.value)) {
        country.style.boxShadow = '0 0 5px 1px red';
        formChecker = false;
    }
    else {
        country.style.boxShadow = null;
        formChecker = true;
    }
}

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

password.addEventListener('input', confirmThePassword);
confirmPassword.addEventListener('input', confirmThePassword);

function confirmThePassword() {
    if (confirmPassword.value === '') {
        confirmPassword.style.boxShadow = null;
        formChecker = false;
    }
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.boxShadow = '0 0 5px 1px red';
        formChecker = false;
    }
    else {
        confirmPassword.style.boxShadow = null;
        formChecker = true;
    }
}

