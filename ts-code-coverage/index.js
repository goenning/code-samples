"use strict";
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
;
//# sourceMappingURL=index.js.map