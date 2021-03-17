const userText = document.querySelector('.user-text');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const firstNameInput = document.querySelector('#firstname');
const lastNameInput = document.querySelector('#lastname');

const users = {
    user1 : {firstName: 'Ellen', lastName: "Adalberth"},
    user2 : {firstName: 'Fanny', lastName: "Alvermalm"},
    user3 : {firstName: 'Sarah', lastName: "Malm"},
    user4 : {firstName: 'Evelina', lastName: "Bakos"},
    user5 : {firstName: 'Josefin', lastName: "Bech"},
    user6 : {firstName: 'Frida', lastName: "Borbély"},
    user7 : {firstName: 'Lisa', lastName: "Schneiderman"},
    user8 : {firstName: 'Matilda', lastName: "Carlsdotter"},
    user9 : {firstName: 'Teresa', lastName: "Eriksson"},
    user10 : {firstName: 'Adam', lastName: "Augustsson"},
    user11 : {firstName: 'Philip', lastName: "Holmsten"},
    user12 : {firstName: 'Lisa', lastName: "Löfström"},
    user13 : {firstName: 'Johanna', lastName: "Hellquist"},
    user14 : {firstName: 'Alda', lastName: "Cripljanin"},
    user15 : {firstName: 'Josefin', lastName: "Eldh"},
    user16 : {firstName: 'Ava', lastName: "Nikpay"},
    user17 : {firstName: 'Cornelia', lastName: "Nordlund"},
    user18 : {firstName: 'Edvin', lastName: "Oldin"},
    user19 : {firstName: 'Lisa', lastName: "Persson"},
    user20 : {firstName: 'Hanna', lastName: "Pålsson"},
    user21 : {firstName: 'Tova', lastName: "Rane"},
    user22 : {firstName: 'Anton', lastName: "Schmidt"},
    user23 : {firstName: 'Julia', lastName: "Sikström"},
    user24 : {firstName: 'Annie', lastName: "Simlund"},
    user25 : {firstName: 'Dara', lastName: "Torabpour"},
    user26 : {firstName: 'Rebecca', lastName: "Wahl"},
}

const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    let id = value;

    //check if user exists
    let user = users[Object.keys(users)[id -1]];
    if (user !== undefined) {
        let firstName = user.firstName;
        let lastName = user.lastName;
        userText.textContent += " " + firstName;
        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
    }
};

//open/close mobile navigation
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-open');
});

