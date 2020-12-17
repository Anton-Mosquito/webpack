import { Observable, fromEvent, of, interval, timer, range } from "rxjs";
import { map, filter, take } from "rxjs/operators";

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

input$.subscribe((event) => {
  console.log(event);
});

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
