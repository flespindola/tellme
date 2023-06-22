"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function attachClick(items = []) {
    if (items.length > 0) {
        try {
            const validItems = items.filter((item) => {
                try {
                    return item;
                }
                catch (error) {
                    return false;
                }
            });
            const nodeLists = validItems.map((item) => {
                return document.querySelectorAll(item);
            });
            nodeLists.map((list) => {
                list.forEach((node) => {
                    node.addEventListener('click', function () {
                        const clickData = {
                            type: 'button',
                            label: node.getAttribute('aria-label'),
                            url: window.location.href,
                            datetime: new Date().toISOString().slice(0, 19).replace('T', ' '),
                        };
                        axios_1.default
                            .post('', clickData)
                            .then((response) => {
                            console.log(response.data);
                        }).catch((error) => {
                            console.log(error);
                        });
                    });
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = attachClick;
