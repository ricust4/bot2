'use strict';
const Markup = require('telegraf/markup');

module.exports = product => {
  const availabilityAlerts = product.preferences.availabilityAlerts;
  const targetPrice = product.preferences.targetPrice;
  const currency = product.currency || '';

  const items = [
    {
      text: '💰  Coloque un valor ' + (targetPrice ? '(' + currency + (currency ? ' ' : '') + targetPrice + ')' : ''),
      callbackData: '!price?id=' + product.id
    },
    {
      text: '🚨  Avisar cuando encuentre una oferta: ' + (availabilityAlerts ? 'SI' : 'NO'),
      callbackData: '!availability?id=' + product.id + '&value=' + !availabilityAlerts
    },
    {
      text: '🗑  Eliminar',
      callbackData: '!remove?id=' + product.id
    },
    {
      text: '      <<  Volver     ',
      callbackData: '!list'
    }
  ];

  return Markup.inlineKeyboard([...items.map(e => [Markup.callbackButton(e.text, e.callbackData)])]).extra();
};
