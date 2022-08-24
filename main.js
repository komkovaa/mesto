(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,o;return n=t,(o=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"editingUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.profileName,about:e.profileJob})}).then(this._handleResponse)}},{key:"createNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.placeName,link:e.placeLink})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n,o){var r=o.handleLikeClick,i=o.handleDeleteLikeClick,a=o.handleDeleteCardClick,c=o.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._image=t.link,this._name=t.name,this._dataOwnerId=t.owner._id,this._ownerId="280205e9db35dec727bae1c8",this._cardId=t._id,this._likes=t.likes,this._cardSelector=n,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._handleLikeClick=r,this._handleDeleteLikeClick=i,this._handleDeleteCardClick=a,this._handleCardClick=c}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._setEventListeners(),this._cardImage.src=this._image,this._cardImage.alt=this._name,this._element.querySelector(".element__name").textContent=this._name,this._deleteButton=this._element.querySelector(".element__basket"),this._getShowBasket(),this._likes.find((function(t){return t._id===e._ownerId}))&&this._element.querySelector(".element__chosen").classList.add("element__chosen_active"),this._element.querySelector(".element__like-counter").textContent="".concat(this._likes.length),this._element}},{key:"_getShowBasket",value:function(){this._ownerId===this._dataOwnerId&&this._deleteButton.classList.add("element__basket_active")}},{key:"toggleLike",value:function(){this._element.querySelector(".element__chosen").classList.toggle("element__chosen_active")}},{key:"counterLike",value:function(e){this._element.querySelector(".element__like-counter").textContent=e.length}},{key:"_setLikeHandler",value:function(){this._element.querySelector(".element__chosen").classList.contains("element__chosen_active")?this._handleDeleteLikeClick():this._handleLikeClick()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__chosen").addEventListener("click",(function(){return e._setLikeHandler()})),this._element.querySelector(".element__basket").addEventListener("click",(function(){e._handleDeleteCardClick(e._cardId,e._element)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._image)}))}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.textContent="",t.classList.remove(this._config.errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"resetValidator",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._popupCloseEsc=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._popupCloseEsc)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._popupCloseEsc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=h(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},f.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(r){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t,n=e.popupSelector,o=e.imagePopupSelector,r=e.namePopupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._imagePopup=t._popupElement.querySelector(o),t._namePopup=t._popupElement.querySelector(r),t}return t=a,(n=[{key:"open",value:function(e,t){f(y(a.prototype),"open",this).call(this),this._imagePopup.src=t,this._imagePopup.alt=e,this._namePopup.textContent=e}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=k(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t,n=e.popupSelector,o=e.formSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._formElement=t._popupElement.querySelector(o),t._handleFormSubmit=r,t._popupSubmitButton=t._popupElement.querySelector(".popup__submit"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupElement.querySelectorAll(".popup__desc"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;g(w(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){g(w(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"renderLoading",value:function(e,t){this._popupSubmitButton.textContent=e?t:"Сохранить"}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=P(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function T(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(o);if(r){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t,n=e.popupSelector,o=e.formSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._formElement=t._popupElement.querySelector(o),t._handleFormSubmit=r,t}return t=a,(n=[{key:"open",value:function(e,t){j(q(a.prototype),"open",this).call(this),this._cardId=e,this._cardToDelete=t}},{key:"setEventListeners",value:function(){var e=this;j(q(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._cardId,e._cardToDelete),e.close()}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var U=function(){function e(t){var n=t.nameSelector,o=t.jobSelector,r=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(o),this._avatarElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._jobElement.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e.avatar}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=(document.querySelector(".profile__name"),document.querySelector(".profile__job"),document.querySelector(".profile__edit-button")),D=document.querySelector(".popup__form_type_edit"),F=document.querySelector(".profile__avatar-container"),x=document.querySelector(".popup__form_type_avatar"),V=document.querySelector(".profile__place-add-button"),N=document.querySelector(".popup__form_type_add-place"),J=(document.querySelector(".element__basket"),document.querySelector(".popup__image"),document.querySelector(".popup__name"),{formSelector:".popup__form",inputSelector:".popup__desc",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__desc_type_error",errorClass:"popup__desc-error_active",popupTypeAddPlace:".popup_type_addplace",popupFormTypeAddPlace:".popup__form_type_add-place",popupAvatar:".popup_type_avatar",popupFormAvatar:".popup__form_type_avatar",profileAvatar:".profile__avatar",popupTypeEdit:".popup_type_edit",popupFormTypeEdit:".popup__form_type_edit",popupTypeConfirm:".popup_type_confirm",popupFormTypeConfirm:".popup__form_type_confirm",popupTypeFoto:".popup_type_photo",popupImage:".popup__image",popupName:".popup__name",profileName:".profile__name",profileJob:".profile__job"}),H=new i(J,x);H.enableValidation();var z=new i(J,N);z.enableValidation();var M=new i(J,D);M.enableValidation();var G=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-48",headers:{authorization:"53e96194-21e8-4c45-ae5c-35a059536ec8","Content-Type":"application/json"}}),K=new U({nameSelector:J.profileName,jobSelector:J.profileJob,avatarSelector:J.profileAvatar}),Q=new c({renderer:function(e){Q.addItem(ee(e))}},".elements-list");G.getUserInfo().then((function(e){K.setUserInfo(e),K.setUserAvatar(e)})).catch((function(e){return console.log(e)})),G.getInitialCards().then((function(e){Q.renderItems(e)})).catch((function(e){return console.log(e)}));var W=new L({popupSelector:J.popupAvatar,formSelector:J.popupFormAvatar,handleFormSubmit:function(e){W.renderLoading(!0,"Сохранение..."),G.changeAvatar(e).then((function(e){K.setUserAvatar(e),W.close(),H.disableButton()})).catch((function(e){return console.log(e)})).finally((function(){W.renderLoading(!1)}))}});W.setEventListeners(),F.addEventListener("click",(function(){W.open(),M.resetValidator()}));var X=new L({popupSelector:J.popupTypeEdit,formSelector:J.popupFormTypeEdit,handleFormSubmit:function(e){X.renderLoading(!0,"Сохранение..."),G.editingUserInfo(e).then((function(e){K.setUserInfo(e),X.close()})).catch((function(e){return console.log(e)})).finally((function(){X.renderLoading(!1)}))}});X.setEventListeners(),A.addEventListener("click",(function(){var e=K.getUserInfo();D.profileName.value=e.name,D.profileJob.value=e.job,X.open(),M.resetValidator()}));var Y=new L({popupSelector:J.popupTypeAddPlace,formSelector:J.popupFormTypeAddPlace,handleFormSubmit:function(e){Y.renderLoading(!0,"Сохранение..."),G.createNewCard(e).then((function(e){Q.addItem(ee(e)),Y.close(),z.disableButton()})).catch((function(e){return console.log(e)})).finally((function(){Y.renderLoading(!1)}))}});Y.setEventListeners(),V.addEventListener("click",(function(){Y.open(),z.resetValidator()}));var Z=new R({popupSelector:J.popupTypeConfirm,formSelector:J.popupFormTypeConfirm,handleFormSubmit:function(e,t){G.deleteCard(e).then(t.remove()).catch((function(e){return console.log(e)}))}});Z.setEventListeners();var $=new m({popupSelector:J.popupTypeFoto,imagePopupSelector:J.popupImage,namePopupSelector:J.popupName});$.setEventListeners();var ee=function(e){var t=new o(e,".elements",{handleLikeClick:function(){G.addLike(e._id).then((function(e){t.counterLike(e.likes),t.toggleLike()})).catch((function(e){return console.log(e)}))},handleDeleteLikeClick:function(){G.deleteLike(e._id).then((function(e){t.counterLike(e.likes),t.toggleLike()})).catch((function(e){return console.log(e)}))},handleDeleteCardClick:function(e,t){Z.open(e,t)},handleCardClick:function(e,t){$.open(e,t)}});return t.generateCard()}})();