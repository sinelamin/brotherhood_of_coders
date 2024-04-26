"use strict";

//----------------------------------------------------------- hover for logo download
const formFieldCover = document.querySelector('.form-field__cover');
const formFieldImg = document.querySelector('.form-field__img');
const imgOverlay = document.querySelector('.overlay');
const loadLogo = document.querySelector('.field-logo__load');

formFieldCover.addEventListener('mousemove', () => {
  imgOverlay.classList.add('overlay--hover');
  formFieldImg.classList.add('form-field__img--hover');
});


formFieldCover.addEventListener('mouseout', () => {
  imgOverlay.classList.remove('overlay--hover');
  formFieldImg.classList.remove('form-field__img--hover');
})


//----------------------------------------------------------- download logo
const preview = document.querySelector('.form-field__img');
const logoReset = document.querySelector('.form-field__reset-img');

formFieldCover.addEventListener('click', () => {
  loadLogo.click();

  loadLogo.addEventListener('change', function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();


    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    logoReset.classList.add('reset-img--hover-active');
  });
})



//----------------------------------------------------------- reset logo

logoReset.addEventListener('click', (e) => {
  e.preventDefault();
  preview.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  loadLogo.value = null;
  logoReset.classList.remove('reset-img--hover-active');
});


//----------------------------------------------------------- number phone validate
const inputPhone = document.querySelector('.field-input__phone');
let phoneNumber = '+7 ';

inputPhone.addEventListener('input', (e) => {
  if (+e.data == e.data) {
    phoneNumber = `${phoneNumber}${e.data}`;

    if (phoneNumber.length == 7) {
      phoneNumber = `${phoneNumber.slice(0, -1)} ${e.data}`;
    }

    if (phoneNumber.length == 11 || phoneNumber.length == 14) {
      phoneNumber = `${phoneNumber.slice(0, -1)}-${e.data}`;
    }
  }

  if (e.inputType == 'deleteContentBackward' && phoneNumber.length > 3) {
    phoneNumber = phoneNumber.slice(0, -1);
  }

  inputPhone.value = phoneNumber;
})

inputPhone.addEventListener('focus', () => {
  if (inputPhone.value == '') {
    inputPhone.value = phoneNumber;
    phoneNumber = '+7 ';
  }
});


//----------------------------------------------------------- open/close form
const body = document.querySelector('body');
const openFormBtn = document.querySelector('.activate-form');
const closeFormBtn = document.querySelector('.form-btn__close');
const form = document.querySelector('.form');
const fieldsRequired = document.querySelectorAll('.field-required');

openFormBtn.addEventListener('click', () => {
  body.classList.add('body--form-active');
  form.classList.add('form--open');

  fieldsRequired.forEach(field => {
    field.setAttribute('required', '');
  })
});

closeFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.remove('body--form-active');
  form.classList.remove('form--open');

  fieldsRequired.forEach(field => {
    field.removeAttribute('required');
  })
});