# goit-js-hw-05
### Zadanie domowe nr 5

_Ale szybko płynie czas, co?_

_Moduł 5 już prawie za nami!_ 💪

_Po przestudiowaniu materiałów z tego modułu:_

* _Rozumiesz, jak działają funkcje wywołania zwrotnego i funkcje strzałkowe;_
* _Wiesz, jak zastosować te funkcje w praktyce;_
* _Wiesz, jak pracować z tablicą obiektów;_
* _Znasz takie metody tablicowe jak: `forEach`, `map`, `flatMap`, `filter`, `find` і `findIndex`, `every`, `some`, `reduce`, `toSorted`;_
* _Umiesz dostosować kolejność sortowania dla liczb i ciągów znaków;_
* _Wiesz, jak używać metod tablicowych w łańcuchach._

_A teraz przejdźmy do ćwiczeń!_

_Czekają na Ciebie 4 zadania, w których musisz wykorzystać poznane metody tablicowe!_



__Zadanie domowe nr 5__

* Utwórz repozytorium `goit-js-hw-05`.
* Utwórz osobny plik z rozszerzeniem `.js` dla każdego z zadań.
* Przeczytaj każde zadanie i wykonaj je w edytorze kodu.
* Upewnij się, że kod jest sformatowany przy użyciu `Prettier` i że po otwarciu strony zadania na żywo w konsoli nie ma żadnych błędów ani ostrzeżeń.
* Prześlij zadanie domowe do sprawdzenia.


__Format zadania domowego:__ Zadanie domowe zawiera dwa linki — do plików źródłowych i strony roboczej na `GitHub Pages`.



__Zadanie 1: Nazwy użytkowników__

Napisz funkcję strzałkową `getUserNames(users)`, która przyjmuje jeden parametr `users` — tablicę obiektów użytkowników. Funkcja powinna zwrócić tablicę nazw wszystkich użytkowników (właściwość `name`) z tablicy `users`.



Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli wyświetlone zostaną wyniki jej wywołań.


```javascript
console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
```



Zostaw ten kod do sprawdzenia swojemu mentorowi.

Na co będzie zwracał uwagę mentor podczas sprawdzania:

* Zadeklarowano zmienną `getUserNames`;
* Zmienna `getUserNames` przypisano funkcję strzałkową z parametrem `(users)`;
* Do iteracji po parametrze `users` użyto metody `map()`;
* Wywołanie funkcji z określoną tablicą użytkowników zwraca tablicę `["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]`;
* Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość.


__Zadanie 2. Użytkownicy ze znajomym__

Napisz funkcję strzałkową `getUsersWithFriend(users, friendName)`, która przyjmuje dwa parametry:

* pierwszy parametr `users` — tablica obiektów użytkowników,
* drugi parametr `friendName` — nazwa znajomych do wyszukania.


Funkcja powinna zwrócić tablicę wszystkich użytkowników z tablicy `users`, którzy mają znajomego o nazwie `friendName`. Znajomi każdego użytkownika są przechowywani we właściwości `friends`. Jeśli nie ma użytkowników, którzy mają takiego znajomego, funkcja powinna zwrócić pustą tablicę.

Wskazówki:

* Metoda `filter()` może być użyta do utworzenia nowej tablicy z elementami spełniającymi określony warunek.
* Użyj metody `includes()`, aby sprawdzić czy tablica friends zawiera `friendName`.


Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić, czy działa poprawnie. W konsoli wyświetlone zostaną wyniki jego działania.


```javascript
const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
```


Zostaw ten kod do sprawdzenia swojemu mentorowi.

Na co będzie zwracał uwagę mentor podczas sprawdzania:

* Zadeklarowano zmienną `getUsersWithFriend`;
* Zmiennej `getUsersWithFriend` przypisano funkcję strzałkową z parametrami `(users, friendName)`;
* Do iteracji po parametrze `users` użyto metody `filter()`;
* Jeśli wartością parametru `friendName` jest ciąg `"Briana Decker"`, funkcja zwraca tablicę obiektów użytkowników o nazwach `Sharlene Bush` i `Sheree Anthony`;
* Jeśli wartością parametru `friendName` jest ciąg `"Goldie Gentry"`, funkcja zwraca tablicę obiektów użytkownika o nazwach `Elma Head` i `Sheree Anthony`;
* Jeśli wartością parametru `friendName` jest ciąg `"Adrian Cross"`, funkcja zwróci pustą tablicę;
* Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość.


__Zadanie 3. Sortowanie według liczby znajomych__

Napisz funkcję strzałkową `sortByDescendingFriendCount(users)`, która przyjmuje jeden parametr `users` — tablicę obiektów użytkowników.



Funkcja powinna zwrócić tablicę wszystkich użytkowników posortowanych według liczby znajomych w porządku malejącym (właściwość `friends`).



Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. Wyniki jego działania zostaną wyświetlone w konsoli.

```javascript
console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
```


Zostaw ten kod do sprawdzenia swojemu mentorowi.

Na co będzie zwracał uwagę mentor podczas sprawdzania:

* Zadeklarowano zmienną `sortByDescendingFriendCount`;
* Zmiennej `sortByDescendingFriendCount` przypisano funkcję strzałkową z parametrem `(users)`;
* Wartość parametru `users` nie ulega zmianie;
* Do sortowania parametru `users` używana jest metoda `toSorted()`;
* Wywołanie funkcji z określoną tablicą `users` zwraca nową tablicę użytkowników, posortowaną malejąco według liczby ich znajomych;
* Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość.


__Zadanie 4. Saldo__

Napisz funkcję strzałkową `getTotalBalanceByGender(users, gender)`, która przyjmuje dwa parametry:

* pierwszy parametr `users` — tablica obiektów użytkowników,
* drugi parametr `gender` — ciąg znaków przechowujący płeć.

Funkcja powinna używać łańcucha wywołań metod i zwracać saldo użytkowników (właściwość `balance`), których płeć (właściwość `gender`) odpowiada wartości parametru `gender`.



Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić, czy działa poprawnie. Wyniki jego działania zostaną wyświetlone w konsoli.


```javascript
const allUsers = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863
```


Zostaw ten kod do sprawdzenia swojemu mentorowi.

Na co będzie zwracał uwagę mentor podczas sprawdzania:

* Zadeklarowano zmienną `getTotalBalanceByGender`;
* Zmiennej `getTotalBalanceByGender` przypisano funkcję strzałkową z parametrami `(users, gender)`;
* W ciele funkcji użyto łańcucha metod we właściwej kolejności;
Wartość parametru `users` nie ulega zmianie;
* Jeśli wartością parametru `gender` jest ciąg `"male"`, funkcja zwraca liczbę `12053`;
* Jeśli wartością parametru `gender` jest łańcuch `female`, funkcja zwraca liczbę `8863`;
* Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość.

https://lukasz-sklad.github.io/goit-js-hw-05/