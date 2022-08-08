import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { 
    config,
    placeAddForm,
    profileEditForm,
    profileName,
    profileJob,
    popupImage,
    popupName,
    profileEditButton,
    cardListSelector,
    placeAddButton,
    initialCards,
} from '../utils/constants.js';

const formValidatorAdd = new FormValidator(config, placeAddForm);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(config, profileEditForm);
formValidatorEdit.enableValidation();

const profileEditPopup = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    formSelector: '.popup__form_type_edit',
    handleFormSubmit: (values) => {
        profileName.textContent = values.profileName;
        profileJob.textContent = values.profileJob;
        profileEditPopup.closePopup();
    },}
);
profileEditPopup.setEventListeners();

/*const profileEditPopup = new PopupWithForm(
    '.popup_type_edit',
    '.popup__form_type_edit',
    (values) => {
        profileName.textContent = values.profileName;
        profileJob.textContent = values.profileJob;
        profileEditPopup.closePopup();
    },
);
profileEditPopup.setEventListeners();*/

profileEditButton.addEventListener('click', () => {
    const dataUser = userInfo.getUserInfo();
    profileEditForm.profileName.value = dataUser.name; // Получите значение полей jobInput и nameInput из свойства value
    profileEditForm.profileJob.value = dataUser.job;
    profileEditPopup.openPopup();
});


const placeAddPopup = new PopupWithForm({
    popupSelector: '.popup_type_addplace',
    formSelector: '.popup__form_type_add-place',
    handleFormSubmit: (values) => {
        cards.addItem(createCard({ name: values.placeName, link: values.placeLink }));
        placeAddPopup.closePopup();
        formValidatorAdd.disableButton();
        },
    });
placeAddPopup.setEventListeners();

/*const placeAddPopup = new PopupWithForm(
    '.popup_type_addplace',
    '.popup__form_type_add-place',
    (values) => {
        cards.addItem(createCard({ name: values.placeName, link: values.placeLink }));
        placeAddPopup.closePopup();
        formValidatorAdd.disableButton();
        },
    );
placeAddPopup.setEventListeners();*/

placeAddButton.addEventListener('click', () => placeAddPopup.openPopup());


const photoPopup = new PopupWithImage({
    popupSelector: '.popup_type_photo',
    imagePopupSelector: '.popup__image',
    namePopupSelector: '.popup__name',
});

photoPopup.setEventListeners();

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    jobSelector: '.profile__job'
});

const createCard = (item) => {
    const card = new Card(item, '.elements', handleCardClick);
    return card.generateCard();
};

const cards = new Section({
    items: initialCards,
    renderer: (item) => {
        cards.addItem(createCard(item));
    }
},
    cardListSelector
);
cards.renderItems();

function handleCardClick(name, image) {
    popupImage.src = image;
    popupImage.alt = name;
    popupName.textContent = name;
    photoPopup.openPopup(name, image);
}