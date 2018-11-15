"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../actions/types");
const INITIAL_STATE = [];
exports.reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types_1.VARIABLE_DATA.FETCH:
            return action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=remainingUniqueValuesCount.js.map