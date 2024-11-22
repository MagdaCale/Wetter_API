# React Vite Wetter App

Diese Anwendung ist ein React-Projekt, erstellt mit **Vite**, um Wetterdaten von der [OpenWeatherMap API](https://openweathermap.org/) zu fetchen und anzuzeigen. Der Fokus des Projekts liegt auf der Implementierung von API-Requests und dem dynamischen Abruf von Daten basierend auf Geodaten (Latitude und Longitude) sowie Städtenamen.

Das Styling wurde bewusst minimal gehalten, da der Schwerpunkt auf dem API-Fetchen liegt.

---

## Funktionen

1. **Wetterdaten anhand von Geodaten abrufen:**
   - Durch die Auswahl von Buttons mit Geokoordinaten (Latitude und Longitude) werden die Wetterdaten der jeweiligen Region abgerufen und angezeigt.

2. **Wetterdaten basierend auf Städten abrufen:**
   - Durch Auswahl eines Städtenamens (z. B. Brasilien, Uganda) werden die entsprechenden Wetterdaten angezeigt.

3. **Angezeigte Wetterinformationen:**
   - Beschreibung des aktuellen Wetters.
   - Temperatur in Celsius.
   - Windgeschwindigkeit.
   - Wetter-Icon (basierend auf den Daten der API).

---

## Verwendete Technologien

- **React**: Frontend-Framework für die Erstellung von Benutzeroberflächen.
- **Vite**: Build-Tool für ein schnelles und effizientes Development-Erlebnis.
- **OpenWeatherMap API**: Externe API für die Wetterdaten.

---

## Umgebungsvariablen

Um den API-Key sicher zu halten und nicht direkt im Quellcode sichtbar zu machen, wurde eine Umgebungsvariable verwendet. 

---

## React Hooks

Die folgenden React-Hooks wurden in der Anwendung verwendet:
	1.	useState:
	•	Verwendet, um den Zustand der Geodaten (geo), Wetterdaten (data / wetterData) und den Städtenamen (city) zu verwalten.
	2.	useEffect:
	•	Verwendet, um Fetch-Requests auszuführen, sobald sich der Zustand der Geodaten (geo) oder der Städte (city) ändert.

---

## Installation

	1.	Voraussetzungen:
	•	Node.js und npm müssen installiert sein.
	2.	Schritte:
```bash
# Repository klonen
git clone <repository-url> .

# Abhängigkeiten installieren
npm install

# Anwendung starten
npm run dev
```

	3.	Zugang zur API:
	•	Erstelle einen kostenlosen Account auf OpenWeatherMap, um einen API-Schlüssel zu erhalten.
	•	Speichere deinen API-Schlüssel in der .env-Datei im Projektverzeichnis.

--- 

### Anleitung zur Nutzung

	1.	Geodaten-Modus:
	•	Wähle eine der Städte (z. B. Hamburg, Berlin, Köln) durch Klick auf die Buttons aus.
	•	Die Wetterinformationen werden dynamisch abgerufen und angezeigt.
	2.	Städtenamen-Modus:
	•	Klicke auf einen der Buttons mit dem Namen einer Stadt (z. B. Brasilien, Uganda).
	•	Die Wetterinformationen der ausgewählten Stadt werden angezeigt.

---

## Weiterentwicklungsmöglichkeiten

	•	Verbesserte Fehlerbehandlung für API-Fehler.
	•	Hinzufügen von mehr Styling für ein ansprechenderes Design.
	•	Implementierung eines Suchfelds zur Eingabe beliebiger Städte.