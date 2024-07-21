# goit-js-hw-07
### Zadanie domowe nr 7

_Gratulacje! Jesteś już w drugiej połowie kursu JavaScript!_ 💪

_Jeśli w pierwszej połowie kursu skupialiśmy się na składni języka, teraz zaczynasz nowy etap. Czas podsumować, co zostało już zrobione w module 7._


_Sprawdź siebie - teraz powinieneś mieć pojęcie:_

* _co to jest model obiektowy dokumentu i jak buduje się hierarchię elementów DOM,_
* _o podstawowych właściwościach i atrybutach elementów DOM,_
* _jak manipulować drzewem DOM, tworząc i usuwając w nim elementy,_
* _o istocie i funkcjonalności zdarzeń w przeglądarce,_
* _o obsłudze zdarzeń za pomocą metod `addEventListener()` i `removeEventListener()`,_
* _jak stosować zdarzenia elementów formularza.-


_Nadszedł czas, aby praktykować te umiejętności!_



__Domowe zadanie nr 7__

* Stwórz repozytorium `goit-js-hw-07`.
* Przeczytaj każde zadanie i wykonaj je w edytorze kodu.
* Zadania są wykonane zgodnie z instrukcjami (zmiana kodu źródłowego HTML jest zabroniona).
* W konsoli brak błędów ani ostrzeżeń podczas otwierania strony z zadaniem.
* Upewnij się, że kod jest sformatowany za pomocą `Prettier`, a w konsoli nie ma błędów ani ostrzeżeń podczas otwierania strony z zadaniem.
* Prześlij zadanie do oceny.


__Format przekazania:__ Praca domowa zawiera dwa linki: do plików źródłowych i do strony roboczej na `GitHub Pages`.


[Pobierz pliki źródłowe](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v3/07/src)
z gotową strukturą i podłączonymi plikami skryptów dla każdego zadania. Skopiuj je do swojego projektu. Zwróć uwagę, że pliki źródłowe znajdują się w folderze src. Jednak dla utworzenia działającej strony na GitHub, ważne jest, aby plik index.html był w głównym katalogu projektu, czyli bez dodatkowych zagnieżdżeń. Dlatego musisz skopiować tylko zawartość folderu src do swojego projektu, a sam folder src nie jest potrzebny.


<pre style="color: blue;">
! Do stylizacji znaczników w twoich zadaniach użyj tego szablonu.
</pre>


__Zadanie 1.__

HTML zawiera listę kategorii `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```


Z wykorzystaniem właściwości i metod elementów DOM napisz skrypt, który:

1. Policzy i wypisze w konsoli liczbę kategorii w `ul#categories`, czyli elementów `li.item`.
2. Dla każdego elementu `li.item` na liście ul#categories znajdzie i wypisze w konsoli tekst nagłówka elementu (tagu `<h2>`) oraz liczbę elementów w kategorii (wszystkich `<li>`, które są w nim zagnieżdżone).


Na co zwróci uwagę mentor podczas sprawdzania:

* Liczba kategorii, ich nazwa i liczba elementów uzyskane za pomocą właściwości i metod elementów DOM.
* Dane dla każdej kategorii zostały uzyskane i wypisane w konsoli w ciele pętli lub metody `forEach()`.
* W konsoli powinien być wyświetlony następujący komunikat:


![Komunikat console](https://filedn.eu/lPq6O1K7j8DR1n7JwTuYjYz/img/warsztaty/0361f18e-3ab9-4baf-aaf0-0c187a773fbaimage-1.png)


__Zadanie 2__

Napisz skrypt tworzący galerię obrazów na podstawie tablicy danych. HTML zawiera listę `ul.gallery`.

```html
<ul class="gallery"></ul>
```


Wykorzystaj tablicę obiektów `images` do utworzenia elementów `<img>`, umieszczonych wewnątrz `<li>`.


Możesz utworzyć i dodać elementy HTML za pomocą `document.createElement()` i `elem.append()`, lub szablonów ciągów i `elem.insertAdjacentHTML()`.



* Wszystkie elementy galerii powinny być dodawane do DOM w jednej operacji dodawania.
* Dodaj minimalne stylizowanie galerii za pomocą flexboxów za pomocą klas CSS.

```javascript
const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];
```


Na co zwróci uwagę mentor podczas sprawdzania:

* Stworzona i dodana do DOM galeria z trzema obrazami.
* Galeria dodana do listy `ul.gallery` i składa się z 6 elementów `<li>`, w których znajdują się elementy `<img>`.
* Do tworzenia elementów `<img>` użyto danych z tablicy obiektów `images`.
* Wszystkie elementy galerii dodane do DOM w jednej operacji dodawania.
* Istnieje minimalne stylizowanie galerii przy użyciu flexboxów za pomocą klas CSS.


__Zadanie 3__

Napisz skrypt, który podczas wprowadzania tekstu do `inputu input#name-input` (zdarzenie `input`) podstawia jego bieżącą wartość do `span#name-output` jako imię do powitania. Upewnij się, że wartość w inpucie jest oczyszczana z białych znaków na krańcach. Jeśli input jest pusty lub zawiera tylko spacje, to zamiast imienia w spanie powinien pojawić się ciąg `"Anonymous"`.


```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```


Na co zwróci uwagę mentor podczas sprawdzania:

* Element `input#name-input` nasłuchuje zdarzenie `input`.
* Podczas wprowadzania tekstu do inputu, jego aktualna wartość jest podstawiana do `span#name-output` jako imię do powitania.
* Wartość w inpucie jest oczyszczana z białych znaków na krańcach.
* Jeśli input jest pusty lub zawiera tylko spacje, to zamiast imienia w spanie pojawi się ciąg `"Anonymous"`.


__Zadanie 4__

Napisz skrypt do zarządzania formularzem logowania.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
```

1. Przetwarzanie wysyłania formularza `form.login-form` powinno odbywać się poprzez zdarzenie `submit`.
2. Podczas wysyłania formularza strona nie powinna być przeładowywana.
3. Jeśli podczas submit w formularzu są nieuzupełnione pola, wyświetl `alert` z komunikatem `'All form fields must be filled in'`. Nie dodawaj atrybutu `required` do inputów, walidacja powinna odbywać się za pomocą JS.
4. Jeśli użytkownik wypełnił wszystkie pola i wysłał formularz, zbierz wartości pól do obiektu z dwoma właściwościami, gdzie kluczem jest nazwa inputów, a wartością są odpowiednie wartości tych inputów, oczyszczone z białych znaków na krawędziach. Do uzyskania dostępu do elementów formularza użyj właściwości `elements`.
5. Przy submit formularza wypisz obiekt z wprowadzonymi danymi w konsoli i zresetuj wartości pól formularza za pomocą metody `reset`.


Na co zwróci uwagę mentor podczas sprawdzania:

* Nasłuchuje zdarzenia `submit`.
* Podczas wysyłania formularza strona nie jest przeładowywana.
* Jeśli podczas submit w formularzu są nieuzupełnione pola, wyświetla `alert`.
* Przy submit formularza w konsoli wypisuje obiekt z dwoma właściwościami, gdzie klucze to nazwy inputów, a wartości to odpowiednie wartości tych inputów, oczyszczone z białych znaków na krawędziach.
* Po submit formularza wartości pól są czyszczone.


__Zadanie 5__

Napisz skrypt, który po kliknięciu na button.change-color zmienia kolor tła elementu `<body>` za pomocą stylu inline i przypisuje tę wartość koloru do `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```



Aby wygenerować losowy kolor, użyj funkcji `getRandomHexColor()`.

```javascript
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```


Zauważ, że funkcja `getRandomHexColor()` zwraca kolor w formacie heksadecymalnym (hex), podczas gdy kolor tła na `<body>` będzie w formacie rgb. To jest normalne i nie wymaga żadnych poprawek.

Na co zwróci uwagę mentor podczas sprawdzania:

* Tło na `<body>` jest ustawiane tylko po kliknięciu na `button.change-color`.
* Przy każdym kliknięciu na `button.change-color` tło `<body>` jest malowane nowym losowym kolorem.
* Na `<body>` i `span.color` wartości są tego samego koloru.


__Zadanie 6__

Napisz skrypt do tworzenia i czyszczenia kolekcji elementów z następującą funkcjonalnością.


Istnieje `input`, do którego użytkownik wprowadza żądaną liczbę elementów. Po naciśnięciu przycisku `Create` powinna być renderowana (dodawana do DOM) kolekcja z odpowiednią liczbą elementów i czyścić się wartość w inpucie. Po ponownym naciśnięciu przycisku `Create` powinna być renderowana nowa kolekcja powyżej starej. Po naciśnięciu przycisku `Destroy` kolekcja elementów powinna być wyczyszczona.


```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Po naciśnięciu przez użytkownika przycisku `Create`, wartość w `input` musi być zwalidowana i musi mieć wartość w zakresie od 1 do 100 włącznie. Tylko wtedy nowe elementy `<div>` powinny być dodawane do DOM.



Aby renderować elementy na stronie, stwórz funkcję `createBoxes(amount)`, która przyjmuje jeden parametr - liczbę, która przechowuje ilość elementów do zrenderowania. Funkcja powinna tworzyć tyle elementów `<div>`, ile jest podane w parametrze `amount`, i dodawać je do DOM jako dzieci dla `div#boxes`.


1. Rozmiary pierwszego elementu `<div>` powinny wynosić 30px na 30px.
2. Każdy kolejny element powinien być szerszy i wyższy od poprzedniego o 10px.
3. Wszystkie elementy powinny mieć losowy kolor tła. Użyj gotowej funkcji `getRandomHexColor()` do uzyskania losowego koloru.

```javascript
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```


Aby wyczyścić kolekcję po naciśnięciu przycisku `Destroy`, stwórz funkcję `destroyBoxes()`, która usuwa zawartość `div#boxes`, usuwając wszystkie utworzone elementy.



Na co zwróci uwagę mentor podczas sprawdzania:

* Po kliknięciu przycisku `Create`, jeśli wartość w `input` znajduje się poza zakresem 1-100, nic się nie dzieje.
* Po kliknięciu przycisku `Create`, w `div#boxes` dodawana jest taka liczba różnokolorowych kwadratów, jaką podano w `input`. Wartość w `input` jest czyszczona.
* Po ponownym kliknięciu przycisku `Create` poprzednie kwadraty są całkowicie usuwane, a zamiast nich dodawane są nowe w ilości podanej w `input`. Wartość w `input` jest czyszczona.
* Wszystkie kwadraty w `div#boxes` są różnokolorowe i mają tło w losowym kolorze.
* Pierwszy kwadrat w `div#boxes` ma wymiary 30px na 30px, a każdy kolejny jest o 10px wyższy i szerszy od poprzedniego.
* Po naciśnięciu przycisku `Destroy` wszystkie kwadraty z `div#boxes` powinny być usuwane.

https://lukasz-sklad.github.io/goit-js-hw-07/