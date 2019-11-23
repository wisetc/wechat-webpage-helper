/**
 * 当每次触发在有效时间间隔内共触发的次数满足条件时，唤起方法，并且重置触发次数。
 * 否则直接重置触发次数。
 * @param {function} func 待唤起的方法
 * @param {number} maxTimes 唤起需要触发的次数
 * @param {number} delay 有效的时间间隔
 */
module.exports.charge = function(func, maxTimes = 5, delay = 500) {
  if (!(Number.isInteger(maxTimes) && maxTimes >= 1)) {
    throw new TypeError('maxTimes type error.');
  }

  let args;
  let ctx;
  let triggeredTimes = 0;
  let timer;
  let result;

  const invoke = () => {
    result = func.apply(ctx, args);
    timer = null;
    triggeredTimes = 0;
  };

  const credit = () => {
    triggeredTimes++;

    clearTimeout(timer);
    timer = setTimeout(shouldInvoke, delay);
  };

  const shouldInvoke = () => {
    if (triggeredTimes >= maxTimes) {
      invoke();
    }

    timer = null;
  };

  const reCredit = () => {
    timer = setTimeout(shouldInvoke, delay);
    triggeredTimes = 1;
  };

  return function charged() {
    args = arguments;
    ctx = this;

    if (timer) {
      credit();
    } else {
      reCredit();
    }

    return result;
  };
};

/**
 * make sure
 * @param {Boolean} cond
 * @param {String} message
 */
module.exports.invariant = function(cond, message = 'Illegal state') {
  if (!cond) throw new Error('[wechat-helper-debugger] ' + message);
};
