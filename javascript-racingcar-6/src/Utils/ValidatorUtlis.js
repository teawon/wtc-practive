const ValidatorUtils = {
  isNotNull(value, message) {
    if (!value) {
      throw new Error(message);
    }
  },

  isNotOverLength(value, maxLen, message) {
    if (value > maxLen) {
      throw new Error(message);
    }
  },

  isNotShorterLength(value, minLen, message) {
    if (value < minLen) {
      throw new Error(message);
    }
  },

  isNumber(value, message) {
    if (Number.isNaN(Number(value))) {
      throw new Error(message);
    }
  },

  isInteger(value, message) {
    if (!Number.isInteger(Number(value))) {
      throw new Error(message);
    }
  },
};

export default ValidatorUtils;
