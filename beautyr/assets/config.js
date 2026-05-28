/*
  ==========================================================
  VALINYTSKYI AGENCY — НАСТРОЙКИ САЙТА / НАЛАШТУВАННЯ САЙТУ
  ==========================================================

  В этом тестовом формате токен Telegram виден в публичном коде сайта.
  Перед рабочим запуском перевыпустите токен и перенесите отправку на backend.

  Для завершения настройки нужно вставить только ссылку на бота для консультации
  в SITE_CONFIG.bots.consultation.
*/

const SITE_CONFIG = {
  telegram: {
    botToken: '8967189056:AAHa-HHhJEP29dCRbypWWsllQi8ww1sMXJc',
    chatId: '-5209820646'
  },

  payments: {
    ru: {
      basic: 'https://secure.wayforpay.com/button/bc24750d359e6',
      vip: 'https://secure.wayforpay.com/button/b9b6f52c5d131'
    },
    ua: {
      basic: 'https://secure.wayforpay.com/button/bc24750d359e6',
      vip: 'https://secure.wayforpay.com/button/b9b6f52c5d131'
    }
  },

  bots: {
    consultation: 'ЗДЕСЬ_ВСТАВИТЬ_ССЫЛКУ_НА_ЧАТ_БОТА_ДЛЯ_КОНСУЛЬТАЦИИ',
    training: 'https://t.me/IntensbeautyBot?start=67a491ba090766e67709a04e'
  }
};
