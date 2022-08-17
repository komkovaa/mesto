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
    popupSelector: config.popupTypeEdit,
    formSelector: config.popupFormTypeEdit,
    handleFormSubmit: (values) => {
        profileName.textContent = values.profileName;
        profileJob.textContent = values.profileJob;
        profileEditPopup.close();
    },}
);
profileEditPopup.setEventListeners();

profileEditButton.addEventListener('click', () => {
    const dataUser = userInfo.getUserInfo();
    profileEditForm.profileName.value = dataUser.name; // Получите значение полей jobInput и nameInput из свойства value
    profileEditForm.profileJob.value = dataUser.job;
    profileEditPopup.open();
    formValidatorEdit.resetValidator();
});


const placeAddPopup = new PopupWithForm({
    popupSelector: config.popupTypeAddPlace,
    formSelector: config.popupFormTypeAddPlace,
    handleFormSubmit: (values) => {
        cards.addItem(createCard({ name: values.placeName, link: values.placeLink }));
        placeAddPopup.close();
        formValidatorAdd.disableButton();
        },
    });
placeAddPopup.setEventListeners();

placeAddButton.addEventListener('click', () => {
    placeAddPopup.open();
    formValidatorAdd.resetValidator();
}
);


const photoPopup = new PopupWithImage({
    popupSelector: config.popupTypeFoto,
    imagePopupSelector: config.popupImage,
    namePopupSelector: config.popupName,
});

photoPopup.setEventListeners();

const userInfo = new UserInfo({
    nameSelector: config.profileName,
    jobSelector: config.profileJob,
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
    photoPopup.open(name, image);
}