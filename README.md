# goit-js-hw-01
### Zadanie domowe nr 1

* Utwórz repozytorium `goit-js-hw-01`.
* Utwórz osobny plik z rozszerzeniem `.js` dla każdego z zadań 1-3.

![Zadanie domowe nr 1](https://filedn.eu/lPq6O1K7j8DR1n7JwTuYjYz/img/warsztaty/4c3ecd1b-109d-4bab-928f-3bef491c6a5cimage.png)


* Przeczytaj każde zadanie i wykonaj je w odpowiednim pliku.
* Upewnij się, że kod jest sformatowany za pomocą `Prettier` i że po otwarciu strony zadania na żywo w konsoli nie ma żadnych błędów ani ostrzeżeń.
* Prześlij swoje zadanie domowe mentorowi na platformie LMS.


__Format zadania domowego:__ Zadanie domowe zawiera dwa linki — do plików źródłowych (link do repozytorium kodu) i strony na żywo na `GitHub Pages`.



__Zadanie 1: Zamawianie droidów__

Stacja sprzedaży droidów naprawczych jest gotowa do pracy, zostało tylko napisać oprogramowanie dla działu sprzedaży.



Zadeklaruj funkcję `makeTransaction`, która oczekuje dwóch parametrów, których wartości zostaną ustawione po jej wywołaniu: • `quantity` — pierwszy parametr, liczba zawierająca liczbę zamówionych droidów; • `pricePerDroid` — drugi parametr, liczba zawierająca cenę jednego droida.



Uzupełnij kod funkcji tak, aby zwracała ciąg znaków z komunikatem o zakupie droidów naprawczych: `"You ordered <quantity> droids worth <totalPrice> credits!"`, gdzie: • `<quantity>` — to liczba zamówionych droidów; • `<totalPrice>` — to całkowity koszt zamówienia, tj. koszt wszystkich zamówionych droidów.

Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. Konsola wyświetli wyniki jego działania.


```javascript
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
```


Zostaw ten kod do sprawdzenia swojemu mentorowi.

Na co będzie zwracał uwagę mentor podczas sprawdzania:

* Zadeklarowano funkcję `makeTransaction(quantity, pricePerDroid)`;
* Wywołanie `makeTransaction(5, 3000)` zwraca `"You ordered 5 droids worth 15000 credits!"`;
* Wywołanie `makeTransaction(3, 1000)` zwraca `"You ordered 3 droids worth 3000 credits!"`;
* Wywołanie `makeTransaction(10, 500)` zwraca `"You ordered 10 droids worth 5000 credits!"`;
* Konsola wyświetla wszystkie wyniki wywołania;
* Wywołanie `makeTransaction` z dowolnymi poprawnymi argumentami zwraca poprawną wartość.


__Zadanie 2. Dostawa towarów__

Zadeklaruj funkcję `getShippingMessage`, która oczekuje trzech parametrów, których wartości zostaną ustawione po jej wywołaniu: • `country` — pierwszy parametr, ciąg znaków zawierający kraj dostawy; • `price` — drugi parametr, liczba zawierająca całkowity koszt towarów; • `deliveryFee` — trzeci parametr, liczba zawierająca koszt dostawy towaru.



Uzupełnij kod funkcji tak, aby zwracał ciąg znaków z komunikatem o dostawie towaru do kraju użytkownika: `"Shipping to <country> will cost <totalPrice> credits"`, gdzie: • `<country>` — to kraj dostawy; • `<totalPrice>` — to całkowity koszt zamówienia, w tym koszt towarów i ich dostawy.



Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. Wyniki jej działania zostaną wyświetlone w konsoli.


```javascript
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
```


Zostaw ten kod do sprawdzenia swojemu mentorowi.



Na co będzie zwracał uwagę mentor podczas sprawdzania:

* Zadeklarowano funkcję `getShippingMessage(country, price, deliveryFee)`;
* Wywołanie `getShippingMessage("Australia", 120, 50) zwraca "Shipping to Australia will cost 170 credits"`;
* Wywołanie `getShippingMessage("Germany", 80, 20) zwraca "Shipping to Germany will cost 100 credits"`;
* Wywołanie `getShippingMessage("Sweden", 100, 20) zwraca "Shipping to Sweden will cost 120 credits"`;
* Wywołanie `getShippingMessage` z dowolnymi poprawnymi argumentami zwraca poprawną wartość.


__Zadanie 3: Szerokość elementu__

Zadeklaruj funkcję `getElementWidth`, która oczekuje trzech parametrów, których wartości zostaną ustawione po jej wywołaniu: • `content` — pierwszy parametr, szerokość treści; • `padding` — drugi parametr, wartość poziomego wypełnienia dla każdej strony; • `border` — trzeci parametr, wartość grubości obramowania dla każdej strony. Wartościami wszystkich parametrów będą ciągi znaków w formacie `Npx`, gdzie N jest dowolną liczbą całkowitą lub ułamkową.



Zmodyfikuj kod funkcji tak, aby zwracała liczbę — całkowitą szerokość elementu. Podczas obliczania całkowitej szerokości pamiętaj, że wartość `box-sizing` jest równa `border-box`.



Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić, czy działa poprawnie. Konsola wyświetli wyniki jego działania.


```javascript
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
```


Zostaw ten kod do sprawdzenia swojemu mentorowi.



Na co będzie zwracał uwagę mentor podczas sprawdzania:

* Zadeklarowano funkcję `getElementWidth(content, padding, border)`;
* Wywołanie `getElementWidth("50px", "8px", "4px")` zwraca liczbę `74`;
* Wywołanie `getElementWidth("60px", "12px", "8.5px")` zwraca liczbę `101`;
* Wywołanie `getElementWidth("200px", "0px", "0px")` zwraca liczbę `200`;
* Wywołanie getElementWidth z dowolnymi poprawnymi argumentami zwraca poprawną wartość.