# goit-js-hw-06
### Zadanie domowe nr 6

_Jesteś prawie na półmetku JavaScript!_ 💪

_Po przerobieniu materiałów modułu 6, ty:_

* _rozumiesz, co oznacza słowo kluczowe `this` w kontekście pojedynczej funkcji_
* _potrafisz określić `this` w globalnym zakresie widoczności, w metodzie obiektu, w funkcjach strzałkowych i callback_
* _znasz metody `call`, `apply` i `bind`_
* _rozumiesz istotę OOP, pojęcie klasy, instancji, interfejsu_
* _wiesz, co to jest dziedziczenie prototypowe i specyfikę jego użycia_
* _używasz dziedziczenia prototypowego, klas do tworzenia jednolitych obiektów z tym samym zestawem właściwości, ale różnymi wartościami_


___Co dalej?___

_Ostatni krok — wykonanie 3 zadań, gdzie trzeba prawidłowo użyć słowo kluczowe this, stworzyć klasę do zarządzania magazynem towarów i skonfigurować konstruktor ciągów. Ciekawe, prawda?_
_Chodźmy!_



__Zadanie domowe №6__

* Stwórz repozytorium `goit-js-hw-06`
* Stwórz oddzielny plik z rozszerzeniem `.js` dla każdego zadania
* Przeczytaj każde zadanie i wykonaj je w edytorze kodu
* Upewnij się, że kod jest sformatowany za pomocą `Prettier`, a w konsoli nie ma błędów ani ostrzeżeń podczas otwierania żywej strony zadania
* Złóż zadanie domowe do sprawdzenia


__Format składania:__ Praca domowa zawiera dwa linki: do plików źródłowych i działającej strony na `GitHub Pages`.



__Zadanie 1. Konto użytkownika__

Przed odejściem, programista popsuł kod źródłowy zarządzania kontami użytkowników naszego serwisu dostawy jedzenia. Przeprowadź refaktoryzację metod obiektu `customer`, dodając brakujące `this` przy odwołaniach do właściwości obiektu.



Użyj tego kodu startowego i wykonaj refaktoryzację. Po deklaracji obiektu dodaliśmy wywołania metod. W konsoli zostaną wyświetlone wyniki ich pracy. Proszę, nic tam nie zmieniaj.


```javascript
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
```


Zostaw ten kod do sprawdzenia przez mentora.



__Na co będzie zwracać uwagę mentor przy sprawdzaniu:__

 * Zadeklarowana zmienna `customer`
 * Wartość zmiennej `customer` to obiekt z właściwościami i metodami
 * Wywołanie `customer.getDiscount()` zwraca aktualną wartość właściwości `discount`
 * Wywołanie `customer.setDiscount(0.15)` aktualizuje wartość właściwości `discount`
 * Wywołanie `customer.getBalance()` zwraca aktualną wartość właściwości `balance`
 * Wywołanie `customer.getOrders()` zwraca aktualną wartość właściwości `orders`
 * Wywołanie `customer.addOrder(5000, "Steak")` dodaje `"Steak"` do tablicy wartości właściwości `orders` i aktualizuje saldo
 * Metoda getBalance obiektu `customer` używa `this`
 * Metoda getDiscount obiektu `customer` używa `this`
 * Metoda setDiscount obiektu `customer` używa `this`
 * Metoda getOrders obiektu `customer` używa `this`
 * Metoda addOrder obiektu `customer` używa `this`


__Zadanie 2. Magazyn__

Stwórz klasę `Storage`, która będzie tworzyć obiekty do zarządzania magazynem towarów. Klasa oczekuje tylko jednego argumentu — początkowej tablicy towarów, która jest zapisywana do utworzonego obiektu w prywatnej właściwości `items`.



Ogłoś następujące metody klasy:

* `getItems()` — zwraca tablicę bieżących towarów w prywatnej właściwości `items`.
* `addItem(newItem)` — przyjmuje nowy towar `newItem` i dodaje go do tablicy towarów w prywatnej właściwości `items` obiektu.
* `removeItem(itemToRemove)` — przyjmuje ciąg znaków z nazwą towaru `itemToRemove` i usuwa go z tablicy towarów w prywatnej właściwości `items` obiektu.


Weź kod poniżej z inicjalizacją instancji i wywołaniami metod i wstaw go po deklaracji klasy, aby sprawdzić poprawność działania. W konsoli zostaną wyświetlone wyniki ich pracy. Proszę, nic tam nie zmieniaj.



```javascript
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
```


Zostaw ten kod do sprawdzenia przez mentora.

__Na co będzie zwracać uwagę mentor przy sprawdzaniu:__

* Ogłoszona klasa `Storage`
* W klasie `Storage` ogłoszony metod `getItems`
* W klasie `Storage` ogłoszony metod `addItem`
* W klasie `Storage` ogłoszony metod `removeItem`
* Właściwość `items` w klasie `Storage` ogłoszona prywatnie
* Metoda `getItems` zwraca wartość prywatnej właściwości `items` instancji klasy, która ją wywołuje
* Metoda `addItem` zmienia wartość prywatnej właściwości `items` instancji klasy, która ją wywołuje
* Metoda `removeItem` zmienia wartość prywatnej właściwości `items` instancji klasy, która ją wywołuje
* W wyniku wywołania new `Storage (["Nanitoids", "Prolonger", "Antigravitator"])` wartość zmiennej `storage` to obiekt
* Obiekt `storage` nie zawiera publicznej właściwości `items`
* Pierwsze wywołanie `storage.getItems()` zaraz po inicjalizacji instancji zwraca tablicę `["Nanitoids", "Prolonger", "Antigravitator"]`
* Drugie wywołanie `storage.getItems()` po wywołaniu `storage.addItem("Droid")` zwraca tablicę `["Nanitoids", "Prolonger", "Antigravitator", "Droid"]`
* Trzecie wywołanie `storage.getItems()` po wywołaniu `storage.removeItem("Prolonger")` zwraca tablicę `["Nanitoids", "Antigravitator", "Droid"]`


__Zadanie 3. Konstruktor ciągów__

Napisz klasę `StringBuilder`, która przyjmuje jeden parametr `initialValue` — dowolny ciąg znaków, który jest zapisywany w prywatnej właściwości `value` obiektu, który jest tworzony.



Ogłoś następujące metody klasy:

* `getValue()` — zwraca aktualną wartość prywatnej właściwości `value`.
* `padEnd(str)` — otrzymuje parametr `str` (ciąg znaków) i dodaje go na końcu wartości prywatnej właściwości `value` obiektu, który wywołuje tę metodę.
* `padStart(str)` — otrzymuje parametr `str` (ciąg znaków) i dodaje go na początku wartości prywatnej właściwości `value` obiektu, który wywołuje tę metodę.
* `padBoth(str)` — otrzymuje parametr `str` (ciąg znaków) i dodaje go na początku i na końcu wartości prywatnej właściwości `value` obiektu, który wywołuje tę metodę.


Weź kod poniżej z inicjalizacją instancji i wywołaniami metod i wstaw go po deklaracji klasy, aby sprawdzić poprawność działania. W konsoli zostaną wyświetlone wyniki ich pracy. Proszę, nic tam nie zmieniaj.


```javascript
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
```


Zostaw ten kod do sprawdzenia przez mentora.

__Na co będzie zwracać uwagę mentor przy sprawdzaniu:__

* Zadeklarowana klasa `StringBuilder`
* Właściwość `value` w klasie `StringBuilder` zadeklarowana jako prywatna
* W klasie `StringBuilder` zadeklarowana metoda `getValue`
* Metoda `getValue` zwraca wartość prywatnej właściwości `value` instancji klasy, która ją wywołuje
* W klasie `StringBuilder` zadeklarowana metoda `padEnd`
* Metoda `padEnd` zmienia wartość prywatnej właściwości `value` instancji klasy, która ją wywołuje
* W klasie `StringBuilder` zadeklarowana metoda `padStart`
* Metoda `padStart` zmienia prywatną właściwość `value` instancji klasy, która ją wywołuje
* W klasie `StringBuilder` zadeklarowana metoda `padBoth`
* Metoda `padBoth` zmienia wartość prywatnej właściwości `value` instancji klasy, która ją wywołuje
* W wyniku wywołania `new StringBuilder(".")` wartość prywatnej zmiennej `builder` to obiekt
* Obiekt `builder` nie zawiera publicznej właściwości `value`
* Pierwsze wywołanie `builder.getValue()` zaraz po inicjalizacji instancji zwraca ciąg znaków `.`
* Drugie wywołanie `builder.getValue()` po wywołaniu `builder.padStart("^")` zwraca ciąg znaków `^.`
* Trzecie wywołanie `builder.getValue()` po wywołaniu `builder.padEnd("^")` zwraca ciąg znaków `^.^`
* Czwarte wywołanie `builder.getValue()` po wywołaniu `builder.padBoth("=")` zwraca ciąg znaków `=^.^=`

https://lukasz-sklad.github.io/goit-js-hw-06/