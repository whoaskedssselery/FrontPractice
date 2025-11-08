// Задание 1.1

function log(msg) {
   const div = document.createElement('div');
   div.textContent = msg;
   document.getElementById('log').appendChild(div);
}

function loadFile(filename, callback) {
   const delay = Math.random() * 1000 + 500;
   setTimeout(() => {
      if (Math.random() < 0.2) {
         callback(new Error(`Файл ${filename} не найден`), null);
      } else {
         callback(null, { name: filename, content: `Содержимое ${filename}` });
      }
   }, delay);
}

// loadFile("config.json", (err, file) => {
//    if (err) {
//       log(`Ошибка: ${err.message}`);
//    } else {
//       log(`Успех: ${file.name}`);
//       log(`Данные: ${file.content}`);
//    }
// });

// Задание 1.2

// loadFile("user.json", (err, user) => {
//   if (err) {
//     log(err.message);
//   } else {
//     log(`Загружен файл: ${user.name}`);

//     loadFile("settings.json", (err, settings) => {
//       if (err) {
//         log(err.message);
//       } else {
//         log(`Загружен файл: ${settings.name}`);

//         loadFile("data.json", (err, data) => {
//           if (err) {
//             log(err.message);
//           } else {
//             log(`Загружен файл: ${data.name}`);
//           }
//         });

//       }
//     });

//   }
// });

// Задание 1.3

// function log(msg) {
//   const div = document.createElement('div');
//   div.textContent = msg;
//   document.getElementById('log').appendChild(div);
// }

// function loadFile(filename, callback) {
//   const delay = Math.random() * 1000 + 500;
//   setTimeout(() => {
//     if (Math.random() < 0.2) {
//       callback(new Error(`Ошибка загрузки ${filename}`), null);
//     } else {
//       callback(null, { name: filename, content: `Содержимое ${filename}` });
//     }
//   }, delay);
// }

// function step1(error, user) {
//   if (error) {
//     log(error.message);
//   } else {
//     log(`Загружен файл: ${user.name}`);
//     loadFile("settings.json", step2);
//   }
// }

// function step2(error, settings) {
//   if (error) {
//     log(error.message);
//   } else {
//     log(`Загружен файл: ${settings.name}`);
//     loadFile("data.json", step3);
//   }
// }

// function step3(error, data) {
//   if (error) {
//     log(error.message);
//   } else {
//     log(`Загружен файл: ${data.name}`);
//   }
// }

// loadFile("user.json", step1);

// Задание 2.1

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isSuccess = Math.random() < 0.5;
//     if (isSuccess) {
//       resolve("Готово");
//     } else {
//       reject(new Error("Ошибка"));
//     }
//   }, 1500);
// });

// promise
//   .then(result => log(result))
//   .catch(error => log(error.message))
//   .finally(() => log("Завершено"));


// Задание 2.3

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(2000).then(() => log("2 сек прошло!"));

// Задание 3.1

function loadFilePromise(filename) {
 return new Promise((resolve, reject) => {
 loadFile(filename, (err, data) => {
   if (err) {
      reject(err)
   } else {
      resolve(data)
   }
 });
 });
}

loadFilePromise("user.json")
  .then(file => log(`Загружен: ${file.name}`))
  .catch(err => log(`${err.message}`))
  .finally(() => log("Загрузка завершена!"));

// Задание 2.5

new Promise(resolve => {
  setTimeout(() => resolve(1), 1000);
})
  .then(result => {
    log(result);
    return result * 2;
  })
  .then(result => {
    log(result);
    return new Promise(resolve => setTimeout(() => resolve(result * 2), 1000));
  })
  .then(result => {
    log(result);
  });


// Задение 3.2

