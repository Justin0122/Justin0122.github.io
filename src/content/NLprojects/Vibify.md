---
title: 'Vibify - Een REST API voor Spotify met extra functies'
description: Vibify is een Node.js API die interactie heeft met de Spotify API om gebruikersgegevens, momenteel afgespeeld nummer, toptracks en andere Spotify-functionaliteiten op te halen.
publishDate: '2024-04-24'
isFeatured: true
seo:
  image:
    src: '/vibify/playlists.webp'
    alt: Vibify Preview
---

**Projectoverzicht:**

Vibify is een Node.js API die interactie heeft met de Spotify API om gebruikersgegevens, het momenteel afgespeelde nummer, toptracks en andere Spotify-functionaliteiten op te halen. Het biedt extra functies zoals het genereren van afspeellijsten op basis van gebruikersvoorkeuren, het aanbevelen van tracks en het genereren van afspeellijsten voor je gelikete nummers uit een specifiek tijdsbestek.

![Spotify Afspeellijsten Gegenereerd Door Vibify](/vibify/playlists.webp)

![Spotify Afspeellijsten Gegenereerd Door Vibify](/vibify/playlists2.webp)

Bekijk het zelf op [spotify](https://open.spotify.com/user/brilsmurfj)

## Doelstellingen

1. Je gelikete nummers uit specifieke tijdsperioden organiseren in eigen afspeellijsten.
2. Tracks aanbevelen op basis van je luistergeschiedenis en voorkeuren.

## Belangrijkste Kenmerken

1. **Gebruikersauthenticatie:**

- De API retourneert een autorisatie-URL voor de gebruiker om in te loggen met hun Spotify-account en de vereiste machtigingen te accepteren. Na authenticatie slaat Vibify het toegangstoken van de gebruiker op voor toekomstige aanvragen.

2. **Aanbevelingen Genereren**

- Vibify gebruikt de Spotify API om trackaanbevelingen te genereren op basis van de luistergeschiedenis van de gebruiker, toptracks en voorkeuren. Gebruikers kunnen het aantal aanbevelingen specificeren dat ze willen ontvangen.

3. **Afspeellijst Generatie**

- Gebruikers kunnen afspeellijsten maken op basis van hun gelikete nummers uit een specifiek tijdsbestek. Vibify haalt de gelikete nummers van de gebruiker op en organiseert ze in afspeellijsten op basis van de opgegeven tijdsperiode.
- Gebruikers kunnen hun gelikete nummers filteren op artiest(en) en afspeellijsten maken met hun gelikete nummers die aan de criteria voldoen.

![Vibify Afspeellijst Generatie](/vibify/artistFilteredPlaylists.webp)

## Technologie Stack

- Backend: Node.js voor server-side logica en API-integratie.
- Database: MySQL voor het opslaan van alleen gebruikersnaam, toegangstoken en refresh token.
- Spotify API: Voor het ophalen van gebruikersgegevens, aanbevelingen en afspeellijstcreatie.
- Deployment: Gehost op een Raspberry Pi.

## Resultaat

Vibify heeft mijn Spotify-bibliotheek succesvol opgeschoond door mijn gelikete nummers te organiseren in afspeellijsten op basis van specifieke tijdsperioden. De aanbevelingsfunctie heeft me nieuwe nummers gebracht die passen bij mijn muzieksmaak, wat mijn algehele luisterervaring heeft verbeterd.

---

**Geïnteresseerd in hoe het werkt?**

[Lees de documentatie](https://vibify-docs.justinjongstra.nl/)

Of voor een meer informele lezing, bekijk deze [blogpost](/blog/vibify/)

Of bekijk de [GitHub-repository](https://github.com/justin0122/vibify) om te zien hoe het in elkaar zit.
