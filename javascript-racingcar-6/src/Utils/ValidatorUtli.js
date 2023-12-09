const ValidatorUtil = {
  isNotNull(value, message) {
    if (!value) {
      throw new Error(message);
    }
  },

  isNotOverLength(value, maxLen, message) {
    if (value.length > maxLen) {
      throw new Error(message);
    }
  },

  isNotShorterLength(value, minLen, message) {
    if (value.length < minLen) {
      throw new Error(message);
    }
  },

  isNumber(value, message) {
    if (Number.isNaN(Number(value))) {
      throw new Error(message);
    }
  },
};

export default ValidatorUtil;
