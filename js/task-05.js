/*
	Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

	Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

	Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

	Ниже приведен список стран и стоимость доставки.

		* Китай - 100 кредитов
		* Чили - 250 кредитов
		* Австралия - 170 кредитов
		* Индия - 80 кредитов
		* Ямайка - 120 кредитов
*/

const chinaDeliveryPrice = 100;
const chiliDeliveryPrice = 250;
const australiaDeliveryPrice = 170;
const indiaDeliveryPrice = 80;
const jamaicaDeliveryPrice = 120;

const userCountryChoice = prompt(
  'Пожалуйста, укажите страну куда необходимо выполнить доставку',
);

if (!userCountryChoice) {
  alert('Отменено пользователем!');
}

const countryInLowerCase = userCountryChoice.toLocaleLowerCase();

switch (countryInLowerCase) {
  case 'китай':
    alert(
      `Доставка в ${countryInLowerCase} будет стоить ${chinaDeliveryPrice} кредитов'`,
    );
    break;
  case 'чили':
    alert(
      `Доставка в ${countryInLowerCase} будет стоить ${chiliDeliveryPrice} кредитов'`,
    );
    break;
  case 'австралия':
    alert(
      `Доставка в ${countryInLowerCase} будет стоить ${australiaDeliveryPrice} кредитов'`,
    );
    break;
  case 'индия':
    alert(
      `Доставка в ${countryInLowerCase} будет стоить ${indiaDeliveryPrise} кредитов'`,
    );
    break;
  case 'ямайка':
    alert(
      `Доставка в ${countryInLowerCase} будет стоить ${jamaicaDeliveryPrice} кредитов'`,
    );
    break;
  default:
    alert(`В вашей стране доставка не доступна`);
}
