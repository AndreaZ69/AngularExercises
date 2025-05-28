**Dispensa Angular**
Questa dispensa raccoglie una serie di esercizi e approfondimenti pratici su Angular, pensati per comprendere e mettere in pratica i concetti fondamentali e avanzati del framework.

**Argomenti trattati**
1. **Data Binding**
Introduzione ai meccanismi di binding in Angular per collegare dati tra componenti e template, sia in modalità unidirezionale che bidirezionale.

2. **Property Binding**
Come legare le proprietà degli elementi HTML o dei componenti Angular a dati dinamici, gestendo valori e attributi nel DOM.

3. **NgModel**
Utilizzo della direttiva ngModel per implementare il two-way data binding nei form, semplificando la sincronizzazione tra dati e interfaccia utente.

4. **Event Binding**
Gestione degli eventi degli elementi HTML e dei componenti Angular tramite il binding, per rispondere alle azioni dell’utente come click, input, submit, ecc.

5. **Direttive e Comunicazione tra Componenti**
Approfondimento sulle direttive strutturali (*ngIf, *ngFor, *ngSwitch) e sui modi di comunicare dati e eventi tra componenti padre e figlio.

6. **Esercizi comunicazione Padre - Figlio**
Esempi pratici di input/output tra componenti, con l’uso di @Input() e @Output() per passare dati e notificare eventi.

7. **Parametri Query e Parametri Route**
Gestione dei parametri nelle URL, sia tramite route parameters che query parameters, per passare informazioni tra pagine e componenti.

8. **Form a parametri**
Creazione di form HTML nativi che inviano dati tramite URL o form data, e recupero di questi parametri nei componenti Angular.

9. **Observable**
Introduzione agli Observable RxJS, base per la gestione asincrona e reattiva dei dati in Angular.

10. **ngOnChanges**
Implementazione del lifecycle hook ngOnChanges per intercettare modifiche degli input e reagire ai cambiamenti nei dati.

11. **ngDoCheck**
Approfondimento sul lifecycle hook ngDoCheck per rilevare mutazioni complesse negli oggetti, oltre il semplice confronto di riferimento.

12. **Subject e BehaviorSubject**
Differenze e utilizzi pratici di Subject e BehaviorSubject per la gestione di flussi di dati e stato condiviso tra componenti.

13. **ngAfterViewInit**
Uso del lifecycle hook ngAfterViewInit per operazioni che necessitano che la vista sia completamente inizializzata, ad esempio manipolazioni DOM.

14. **ngOnDestroy**
Pulizia e gestione delle risorse nel lifecycle hook ngOnDestroy, fondamentale per evitare memory leaks con observable e event listener.

15. **ViewChild e ViewChildren**
Accesso diretto agli elementi o componenti figli del template tramite le direttive @ViewChild e @ViewChildren per manipolazioni avanzate.

16. **RxJS HTTP**
Esempi di utilizzo di RxJS combinato con il modulo HttpClient per chiamate HTTP asincrone, gestione degli stream di dati e degli errori.

17. **Pipe Async**
Uso della pipe async per semplificare la sottoscrizione agli Observable o Promise direttamente nel template, evitando il subscribe manuale.

Autore: *Andrea Militano*
