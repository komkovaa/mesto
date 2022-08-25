import './index.css';
import { Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirm } from '../components/popupWithConfirm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
    config,
    placeAddForm,
    profileEditForm,
    profileEditButton,
    avatarButton,
    avatarForm,
    cardListSelector,
    placeAddButton,
    apiConfig,
} from '../utils/constants.js';
let ownerId;

const formValidatorAvatar = new FormValidator(config, avatarForm);
formValidatorAvatar.enableValidation();
const formValidatorAdd = new FormValidator(config, placeAddForm);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(config, profileEditForm);
formValidatorEdit.enableValidation();

const api = new Api(apiConfig);

const userInfo = new UserInfo({
    nameSelector: config.profileName,
    jobSelector: config.profileJob,
    avatarSelector: config.profileAvatar,
});

const cards = new Section({
    renderer: (item) => {
        cards.addItem(createCard(item));
    }
},
    cardListSelector
);

Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
])
    .then(([info, initialCards]) => {
        ownerId = info._id;
        userInfo.setUserInfo(info);
        userInfo.setUserAvatar(info);
        cards.renderItems(initialCards);
    })
    .catch(err => console.log(err));


/*api.getUserInfo()
    .then((res) => {
        userInfo.setUserInfo(res);
        userInfo.setUserAvatar(res);
    })
    .catch(err => console.log(err));

api.getInitialCards()
    .then(data => {
        cards.renderItems(data);
    })
    .catch(err => console.log(err));*/

const avatarPopup = new PopupWithForm({
    popupSelector: config.popupAvatar,
    formSelector: config.popupFormAvatar,
    handleFormSubmit: (data) => {
        avatarPopup.renderLoading(true, 'Сохранение...');
        api.changeAvatar(data)
            .then((res) => {
                userInfo.setUserAvatar(res);
                avatarPopup.close();
                formValidatorAvatar.disableButton();
            })
            .catch(err => console.log(err))
            .finally(() => {
                avatarPopup.renderLoading(false);
              });
    },
});
avatarPopup.setEventListeners();

avatarButton.addEventListener('click', () => {
    avatarPopup.open();
    formValidatorEdit.resetValidator();
});

const profileEditPopup = new PopupWithForm({
    popupSelector: config.popupTypeEdit,
    formSelector: config.popupFormTypeEdit,
    handleFormSubmit: (data) => {
        profileEditPopup.renderLoading(true, 'Сохранение...');
        api.editingUserInfo(data)
            .then((res) => {
                userInfo.setUserInfo(res)
                profileEditPopup.close()
            })
            .catch(err => console.log(err))
            .finally(() => {
                profileEditPopup.renderLoading(false);
            });
    },
});
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
    handleFormSubmit: (data) => {
        placeAddPopup.renderLoading(true, 'Сохранение...');
        api.createNewCard(data)
            .then((res) => {
                cards.addItem(createCard(res));
                placeAddPopup.close();
                formValidatorAdd.disableButton();
            })
            .catch(err => console.log(err))
            .finally(() => {
                placeAddPopup.renderLoading(false);
            });
    },
});
placeAddPopup.setEventListeners();

placeAddButton.addEventListener('click', () => {
    placeAddPopup.open();
    formValidatorAdd.resetValidator();
}
);


const placeDeletePopup = new PopupWithConfirm({
    popupSelector: config.popupTypeConfirm,
    formSelector: config.popupFormTypeConfirm,
    handleFormSubmit: (cardId, cardElement) => {
        api.deleteCard(cardId)
            .then(() => cards.removeItem(cardElement))
            .catch(err => console.log(err));
    },
});
placeDeletePopup.setEventListeners();


const photoPopup = new PopupWithImage({
    popupSelector: config.popupTypeFoto,
    imagePopupSelector: config.popupImage,
    namePopupSelector: config.popupName,
});

photoPopup.setEventListeners();

const createCard = (item) => {
    const card = new Card(item, ownerId, '.elements', {
        handleLikeClick: () => {
            api.addLike(item._id)
                .then((item) => {
                    card.counterLike(item.likes);
                    card.toggleLike();
                })
                .catch((err) => console.log(err))
        },

        handleDeleteLikeClick: () => {
            api.deleteLike(item._id)
                .then((item) => {
                    card.counterLike(item.likes);
                    card.toggleLike();
                })
                .catch((err) => console.log(err))
        },

        handleDeleteCardClick: (cardId, cardElement) => {
            placeDeletePopup.open(cardId, cardElement);
        },

        handleCardClick: (name, image) => {
            photoPopup.open(name, image);
        }
    });
    return card.generateCard();
};