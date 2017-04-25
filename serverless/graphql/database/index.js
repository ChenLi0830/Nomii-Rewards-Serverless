'use strict';
const restaurantsGetAll = require('./restaurantsGetAll');
const restaurantGet = require('./restaurantGet');
const restaurantCreate = require('./restaurantCreate');
const restaurantPINCreate = require('./restaurantPINCreate');
const restaurantPINUse = require('./restaurantPINUse');
const restaurantPINRemove = require('./restaurantPINRemove');
const restaurantStatisticsGet = require('./restaurantStatisticsGet');
const restaurantQuestionAdd = require('./restaurantQuestionAdd');

const userGet = require('./userGet');
const usersGetAll = require('./usersGetAll');
const userUpsert = require('./userUpsert');
const userRedeemCoupon = require('./userRedeemCoupon');
const userStampCard = require('./userStampCard');
const userCardGetAll = require('./userCardGetAll');
const userRestaurantOwnershipAdd = require('./userRestaurantOwnershipAdd');
const userRestaurantOwnershipRemove = require('./userRestaurantOwnershipRemove');
const userPushTokenAdd = require('./userPushTokenAdd');
const userSubmitFeedback = require('./userSubmitFeedback');
const userNomiiAdminSet = require('./userNomiiAdminSet');

const couponCreate = require('./couponCreate');
const couponGet = require('./couponGet');
const couponGetAll = require('./couponGetAll');
const couponUse = require('./couponUse');

const stampEventGetDuringPeriod = require('./stampEventGetDuringPeriod');

module.exports = {
  restaurantsGetAll,
  restaurantCreate,
  restaurantGet,
  restaurantPINCreate,
  restaurantPINUse,
  restaurantPINRemove,
  restaurantStatisticsGet,
  restaurantQuestionAdd,
  userGet,
  userUpsert,
  userRedeemCoupon,
  userStampCard,
  userCardGetAll,
  userRestaurantOwnershipAdd,
  userRestaurantOwnershipRemove,
  userPushTokenAdd,
  usersGetAll,
  userSubmitFeedback,
  userNomiiAdminSet,
  couponCreate,
  couponGetAll,
  couponGet,
  couponUse,
  stampEventGetDuringPeriod,
};