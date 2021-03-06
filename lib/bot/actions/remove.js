'use strict';
const { Product } = require('../../models');

module.exports = async ctx => {
  const productId = ctx.match[1];
  const product = await Product.findByIdAndDelete(productId);

  await ctx.answerCbQuery();
  await ctx.editMessageText(product.name + 'Su producto se ha eliminado correctamente.');
};
