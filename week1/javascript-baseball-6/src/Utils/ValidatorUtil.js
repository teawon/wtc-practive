const ValidatorUtil = {
  isNumber: (num, message) => {
    if (Number.isNaN(num)) {
      throw new Error(message);
    }
  },

  isNotNull: (value, message) => {
    if (value === null) {
      throw new Error(message);
    }
  },

  isNotDuplicate: (value, message) => {
    if (new Set(value).size !== value.length) {
      throw new Error(message);
    }
  },

  isValidLength: (value, len, message) => {
    if (value.length !== len) {
      throw new Error(message);
    }
  },

  isInRange: (value, min, max, message) => {
    if (value < min || value > max) {
      throw new Error(message);
    }
  },
};

export default ValidatorUtil;
