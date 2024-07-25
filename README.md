# Virtual DOMinos Pizza Menu

Questo progetto è un'applicazione front-end per visualizzare il menu di una pizzeria virtuale chiamata "Virtual DOMinos Pizza". L'applicazione mostra una lista di pizze con dettagli come ingredienti, prezzi e disponibilità, utilizzando React per creare un'interfaccia utente interattiva e responsive.

## Funzionalità

- Visualizzazione di un menu di pizze con immagini, nomi, ingredienti e prezzi
- Indicazione visuale delle pizze esaurite
- Orario di apertura dinamico con messaggio personalizzato
- Design responsive per una visualizzazione ottimale su diversi dispositivi

## Tecnologie Utilizzate

- HTML
- - CSS
- Javascript
- React

## Installazione

```bash
# Clona il repository
git clone https://github.com/marinodilauro/react-02-pizza-menu

# Entra nella directory del progetto
cd virtual-dominos-pizza

# Installa le dipendenze
npm install

# Avvia l'applicazione in modalità sviluppo
npm start
```

## Struttura del Progetto

```
public/
|-- pizzas/
    |-- focaccia.jpg
    |-- margherita.jpg
    |-- spinaci.jpg
    |-- funghi.jpg
    |-- salamino.jpg
    |-- prosciutto.jpg
src/
|-- index.js
|-- style.css
```

- `index.js`: Contiene tutti i componenti React e la logica dell'applicazione
- `style.css`: Contiene tutti gli stili CSS per l'applicazione
- `pizzas/`: Directory contenente le immagini delle pizze

## Sfide Affrontate

- Implementazione di un design minimal e intuitivo.
- Gestione dinamica dello stato di "sold-out" per le pizze non disponibili.
- Visualizzazione dinamica del footer con orario di apertura e pulsante per ordinare a seconda dell'orario a cui si accede alla pagina.

## Cosa Ho Imparato

- Utilizzo efficace dei componenti React per creare un'interfaccia utente modulare.
- Implementazione di logica condizionale per la visualizzazione dei contenuti in React.

## Visualizzare il Progetto

Il progetto è visionabile tramite GitHub Pages al seguente indirizzo: https://marinodilauro.github.io/react-02-pizza-menu/
