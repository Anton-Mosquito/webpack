import { Observable, fromEvent, of, interval, timer, range, from } from "rxjs";
import {
  map,
  filter,
  take,
  pluck,
  first,
  last,
  find,
  findIndex,
  skip,
  skipWhile,
  takeWhile,
  skipUntil,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
} from "rxjs/operators";

// Создание стрима
const stream$ = Observable.create((subscriber) => {
  subscriber.next("One");

  setTimeout(() => {
    subscriber.error("After 5 seconds");
  }, 5000);

  //   setTimeout(() => {
  //     subscriber.complete();
  //   }, 3000);

  setTimeout(() => {
    subscriber.next("After 2 seconds");
  }, 2000);

  subscriber.next("Two");
});

stream$.subscribe(
  (data) => {
    console.log("Subscribe : ", data);
  },
  (err) => {
    console.log("Error", err);
  },
  () => {
    console.log("Complite");
  }
);

//Создание события
const btn = document.querySelector('[data-rxjs="click"]');
const btn$ = fromEvent(btn, "click");

btn$.subscribe((event) => {
  console.log(event);
});

const input = document.querySelector('[data-rxjs="input"]');
const input$ = fromEvent(input, "keyup");

// input$.subscribe((event) => {
//   console.log(event);
// });

// создание стрима из обычных данных
const createSubscribe = (name) => {
  return {
    next(x) {
      console.log(name, ": ", x);
    },
    error(error) {
      console.log(name, ": ", error);
    },
    complete(x) {
      console.log(name, ": Completed");
    },
  };
};
// const of$ = of(5, 8, 3, "8", "string", [4, 2, "65"]).subscribe(
//   createSubscribe("of")
// );

// const interval$ = interval(500)
//   .pipe(take(15))
//   .subscribe(createSubscribe("interval"));

// const timer$ = timer(4000, 500)
//   .pipe(take(10))
//   .subscribe(createSubscribe("timer"));

// const range$ = range(3, 6).subscribe(createSubscribe("range"));

/// Создание стрима из масива
// const arr = [
//   {
//     id: 1,
//     name: "object in array 1",
//   },
//   {
//     id: 2,
//     name: "object in array 2",
//   },
//   {
//     id: 3,
//     name: "object in array 3",
//   },
// ];

// const set = new Set([1, 2, 3, "4", "5", { id: 6 }]);
const maps = new Map([
  [1, 2],
  [3, 4],
  [5, 6],
]);

const from$ = from(maps);
from$.subscribe((value) => console.log(value));

// Создание стрима из промисов
const delay = (ms = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

// delay(3000).then(() => {
//   console.log("Promise resolve!");
// });

// const p$ = Rx.Observable.fromPromise(fetch("someURI")).subscribe(
//   (resolve) => {
//     console.log("Resolve:", resolve);
//   },
//   (reject) => {
//     console.log("Reject:", reject);
//   },
//   () => {
//     console.log("Completed");
//   }
// );

// Операторы для транформации

// const map$ = interval(1000)
//   .pipe(
//     map((value) => value ** 2),
//     take(10)
//   )
//   .subscribe((v) => {
//     console.log("Value", v);
//   });

// input$
//   .pipe(
//     // map((x) => x.target.value),
//     pluck("target", "value"), // аналогичен предидущему вызову, получает строки как ургументы
//     map((x) => x.toUpperCase()),
//     map((x) => {
//       return {
//         value: x,
//         length: x.length,
//       };
//     })
//   )
//   .subscribe((event) => {
//     console.log(event);
//   });

// Операторы для выбора
of(1, 4, "Hello", "World");
// .pipe(first())// first elemnt from array
// .pipe(last()) // last element from array
// .pipe(
//   find((x) => {
//     if (typeof x === "string") {
//       return x.toLowerCase() === "hello";
//     }
//   })
// ) // find as Js
// .pipe(findIndex((x) => x === 4)) // findIndex as Js
// .pipe(take(3)) // забирает определенное количество элементов казаных в аргументе
// .pipe(skip(2)) // пропускает определенное количество значений определенное в аргументах
// .pipe(
//   skipWhile((x) => {
//     return typeof x === "number";
//   })
// ) // пропускает значение до тех пор пока оно ровняется определенному условию
// .pipe(takeWhile((x) => x < 13)) // забирает те значения которые удоволетворяют условие
// .subscribe((x) => console.log(x));

// interval(500)
//   .pipe(
//     skipUntil(timer(3000)), // пропускает те значения пока у нас не сработает таймер в 3 секунды
//     takeUntil(timer(5000)) // забирает те значения пока не сработает таймер в 5 секунд
//   )
//   .subscribe((x) => console.log(x));

/**
 *
 *  Операторы для филтрации
 *
 *
 *
 */
// range(0, 10)
//   .pipe(
//     filter((x) => x > 3) // filter as JS
//   )
//   .subscribe((x) => console.log(x, "filter"));

// const cars = [
//   {
//     name: "audi",
//     price: 500,
//   },
//   {
//     name: "bmw",
//     price: 300,
//   },
//   {
//     name: "ford",
//     price: 600,
//   },
// ];

// input$.pipe(pluck("target", "value")).subscribe((x) => {
//   from(cars)
//     .pipe(filter((car) => car.name === x))
//     .subscribe((result) => {
//       console.log(`Car ${result.name.toUpperCase()} price ${result.price}`);
//     });
// });

// input$
//   .pipe(
//     map((x) => x.target.value),
//     debounceTime(1500), // делает задержку в заданное время
//     distinct() // проверет осуществились ли изменения, если изменений небыло событие не срабатывает
//   )
//   .subscribe((x) => console.log(x));

// from([1, 2, 3, 4, 3, 5, 6, 5, 4, 7, 99, 43, 160])
//   .pipe(distinctUntilChanged()) // пропускает значения пока они не изменятся
//   .subscribe((x) => console.log(x));
/**
 *
 *  Операторы для филтрации
 *
 *
 *
 */
