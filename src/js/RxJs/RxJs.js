import {
  Observable,
  fromEvent,
  of,
  interval,
  timer,
  range,
  from,
  merge,
  pipe,
  concat,
  zip,
  combineLatest,
  onErrorResumeNext,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from "rxjs";
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
  buffer,
  bufferTime,
  bufferCount,
  defaultIfEmpty,
  every,
  delay,
  mergeAll,
  concatAll,
  mergeMap,
  concatMap,
  withLatestFrom,
  catchError,
} from "rxjs/operators";

// Создание стрима
// const stream$ = Observable.create((subscriber) => {
//   subscriber.next("One");

//   setTimeout(() => {
//     subscriber.error("After 5 seconds");
//   }, 5000);

//   setTimeout(() => {
//     subscriber.complete();
//   }, 3000);

//   setTimeout(() => {
//     subscriber.next("After 2 seconds");
//   }, 2000);

//   subscriber.next("Two");
// });

// stream$.subscribe(
//   (data) => {
//     console.log("Subscribe : ", data);
//   },
//   (err) => {
//     console.log("Error", err);
//   },
//   () => {
//     console.log("Complite");
//   }
// );

//Создание события
// const btn = document.querySelector('[data-rxjs="click"]');
// const btn$ = fromEvent(btn, "click");

// btn$.subscribe((event) => {
//   console.log(event);
// });

// const input = document.querySelector('[data-rxjs="input"]');
// const input$ = fromEvent(input, "keyup");

// input$.subscribe((event) => {
//   console.log(event);
// });

// создание стрима из обычных данных
// const createSubscribe = (name) => {
//   return {
//     next(x) {
//       console.log(name, ": ", x);
//     },
//     error(error) {
//       console.log(name, ": ", error);
//     },
//     complete(x) {
//       console.log(name, ": Completed");
//     },
//   };
// };
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
// const maps = new Map([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]);

// const from$ = from(maps);
// from$.subscribe((value) => console.log(value));

// Создание стрима из промисов
// const delay = (ms = 1000) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };

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
// of(1, 4, "Hello", "World");
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

/**
 *
 *  буферы
 *
 *
 *
 */

// interval(500)
//   .pipe(buffer(interval(2000)), take(3))
//   .subscribe((e) => console.log(e));

// interval(500)
//   .pipe(bufferTime(2000), take(4))
//   .subscribe((e) => console.log(e));

// range(0, 40)
//   .pipe(bufferCount(10))
//   .subscribe((e) => console.log(e));

// interval(1000)
//   .pipe(
//     buffer(fromEvent(btn, "click")),
//     map((x) => x.length)
//   )
//   .subscribe((e) => console.log(e));
/**
 *
 *  буферы
 *
 *
 *
 */

/**
 *
 *  utilites
 *
 *
 *
 */
// of(232)
//   .pipe(defaultIfEmpty("I am empty stream")) // выводит собщение если стрим пустой
//   .subscribe((e) => console.log(e));

// from([1, 2, 3, 4, 5])
//   .pipe(
//     skipWhile((x) => x <= 3),
//     every((x) => x > 2)
//   )
//   .subscribe((e) => console.log(e));

// range(1, 3)
//   .pipe(delay(500)) // задержка на указаное количество секунд
//   .subscribe((e) => console.log(e));

// range(1, 3)
//   .pipe(
//     map((x) => x + 1),
//     let(observer)
//     )
//   .subscribe((e) => console.log(x));
/**
 *
 *  utilites
 *
 *
 *
 */

/**
 *
 *  Совмещение стримов Merge, Concat
 *
 *
 *
 */
// const stream1$ = of("Hello");
// const stream2$ = of("World");

// merge(stream1$, stream2$).subscribe((e) => console.log(e)); // обьединени стримов

// const stream1$ = interval(1000).pipe(map((x) => "stream 1 " + x));
// const stream2$ = interval(500).pipe(map((x) => "stream 2 " + x));

// merge(stream1$, stream2$)
//   .pipe(take(12))
//   .subscribe((e) => console.log(e));

// range(1, 3) // 1, 2, 3
//   .pipe(
//     map((x) => range(1, 3)),
//     mergeAll()               /// обьединение n-количество стримов в один
//   )
//   .subscribe((e) => console.log(e));

// const stream1$ = from([1, 2, 3]);
// const stream2$ = from([4, 5, 6]);

// concat(stream1$, stream2$).subscribe((e) => console.log(e)); // обьединение стримов масивов

// range(1, 3) // 1, 2, 3
//   .pipe(
//     map((x) => range(x, 3)),
//     concatAll() /// обьединение стримов в один, соблюдает правильную последовательность, merge работет грубо говоря асинхроно и как прийдется
//   )
//   .subscribe((e) => console.log(e));

/**
 *
 *  Совмещение стримов Merge, Concat
 *
 *
 *
 */

/**
 *
 *  Совмещение стримов MergeMap, ConcatMap
 *
 *
 *
 */

// of("Hello")
//   .pipe(
//     mergeMap((x) => {
//       return of(x + " World 1"); // mergeMap обьединени стримов
//     })
//   )
//   .subscribe((e) => console.log(e));

// const pronise = (data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data + " wish you good luck!");
//     }, 2000);
//   });
// };

// of("WFM")
//   .pipe(
//     mergeMap((x) => {
//       return pronise(x);
//     })
//   )
//   .subscribe((e) => console.log(e));

// range(1, 10)
//   .pipe(
//     concatMap((x, i) => {
//       return interval(100).pipe(
//         take(x),
//         map((q) => i)
//       );
//     })
//   )
//   .subscribe((e) => console.log(e));

/**
 *
 *  Совмещение стримов MergeMap, ConcatMap
 *
 *
 *
 */

/**
 *
 *  Совмещение стримов Совмещение стримов Zip, CombineLatest
 *
 *
 *
 */

// const firstStr$ = of("Hello");
// const secondStr$ = of("World");

// zip(firstStr$.pipe(delay(2000)), secondStr$.pipe(delay(5000))).subscribe(
//   (e) => {
//     console.log(e);
//   } /// ZIP служит для обьединения потоков, ждет пока все потоки выпонятся, роботает с асинхронными потоками
// );

// const interval1$ = interval(1000);
// zip(interval1$, interval1$.pipe(take(3)), of("wfm")).subscribe((e) => {
//   console.log(e); // выполнится один раз так как значение из ОФ одно
// });

// const firstStr$ = interval(1000);
// const secondStr$ = interval(500);

// firstStr$.pipe(withLatestFrom(secondStr$)).subscribe((e) => {
//   console.log(e); /// получает значение второго стрима
// });

// const t1$ = timer(1000, 2000);
// const t2$ = timer(2000, 2000);
// const t3$ = timer(3000, 2000);

// combineLatest(t1$, t2$, t3$) /// обьединет разные асинхронные действия
//   .pipe(take(5))
//   .subscribe((e) => {
//     console.log(e);
//   });
/**
 *
 *  Совмещение стримов Совмещение стримов Zip, CombineLatest
 *
 *
 *
 */

/**
 *
 *  Обработка ошибок
 *
 *
 *
 */

// const ere$ = interval(500)
//   .pipe(
//     take(2),
//     catchError((e) => of(e))
//   )
//   .subscribe((x) => console.log(x));

// onErrorResumeNext(ere).subscribe((x) => console.log(x));
/**
 *
 *  Обработка ошибок
 *
 *
 *
 */

/**
 *
 *  Классы Subject
 *
 *
 *
 */
// const subject$ = new Subject();

// subject$.pipe().subscribe((e) => console.log("Subject", e));

// subject$.next(1);

// subject$.next(2);

// setTimeout(() => {
//   subject$.next(3);
//   subject$.complete();
// }, 2000);

// interval(1000).pipe().subscribe(subject$);

// subject$.pipe().subscribe((e) => console.log("Subject 1", e));

// setTimeout(() => {
//   subject$.pipe().subscribe((e) => console.log("Subject 2", e));
// }, 2000);

// const behaviorSubject$ = new BehaviorSubject("WFM");

// behaviorSubject$.subscribe((e) => console.log("BehaviorSubject ", e));

// behaviorSubject$.next("Hello!");
// behaviorSubject$.complete();

// const replaySubject$ = new ReplaySubject(2);

// replaySubject$.next(1);
// replaySubject$.next(2);
// replaySubject$.next(3);
// replaySubject$.complete();

// replaySubject$.subscribe((e) => console.log("ReplaySubject ", e));

// const asyncSubject$ = new AsyncSubject(2);

// asyncSubject$.next(1);
// asyncSubject$.next("WFM");
// asyncSubject$.complete();

// asyncSubject$.subscribe((e) => console.log("AsyncSubject ", e));
/**
 *
 *  Классы Subject
 *
 *
 *
 */
