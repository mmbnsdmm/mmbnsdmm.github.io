import Vue from 'vue'
// var indexedDB =
//     window.indexedDB ||
//     window.webkitIndexedDB ||
//     window.mozIndexedDB ||
//     window.msIndexedDB;
//
// if (!indexedDB) {
//     document.write('你的浏览器不支持IndexedDB');
//     process.exit();
// }

const db = Object({
    dd: "test",
    app: Vue,
});

Vue.use(db);

export default db;
