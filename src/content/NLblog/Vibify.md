---
title: Vibify - Verhoog je Spotify-ervaring met Aangepaste Functionaliteiten
excerpt: Vibify is een Node.js API die naadloos samenwerkt met de Spotify API en gebruikers een verrijkte muzikale ervaring biedt. Ontdek hoe Vibify je Spotify-avontuur versterkt.
publishDate: '2024-04-24'
updatedDate: '2024-05-18'
isFeatured: true
tags:
  - API
  - Music
  - Development
seo:
  image:
    src: '/vibify/artistFilteredPlaylists.webp'
    alt: Vibify Playlist Generatie
---


In het voortdurend evoluerende landschap van muziekstreaming is personalisatie essentieel voor het verbeteren van de gebruikerservaring. Vibify stapt in dit domein als een Node.js API die naadloos samenwerkt met de Spotify API en gebruikers een verrijkte muzikale reis biedt. Naast de standaardfuncties van Spotify voegt Vibify lagen van maatwerk toe, van playlistorganisatie tot op maat gemaakte trackaanbevelingen. Laten we onderzoeken hoe Vibify je Spotify-avontuur versterkt.

Vibify is ontworpen om zonder database te werken (behalve het opslaan van de toegangstoken en vernieuwings-token van de gebruiker, natuurlijk) en kan zelf worden gehost op een Raspberry Pi of elke andere server met minimale middelen, zolang deze toegang heeft tot internet en Node.js kan draaien.

## Waarom?

Ik vond mezelf voortdurend nummers leuk vinden op Spotify maar nooit organiseren in afspeellijsten. Dit leidde tot een verbijsterende verzameling van ~8000 gelikete nummers in ~4 jaar, en het aantal bleef maar toenemen (grappig genoeg zelfs nog meer nu Vibify bestaat). Gefrustreerd door de chaos besloot ik de zaken zelf in handen te nemen en een oplossing te ontwikkelen.

![Spotify Gelikete Nummers](/vibify/likedSongs.webp)

## Wat kan het doen?

Vibify biedt een scala aan functies om je Spotify-ervaring te verbeteren:

1. **Aanbevelingen Genereren:** Ontdek nieuwe tracks op basis van je luistergewoonten en voorkeuren.
2. **Afspeellijsten Maken:** Organiseer je Spotify-bibliotheek door afspeellijsten te genereren op basis van specifieke criteria.
3. **Luistergewoonten Analyseren:** Verkrijg inzichten in je luistergewoonten en trackvoorkeuren.
4. **Afspeellijsten Filteren:** Filter nummers uit je gelikete nummers op basis van specifieke criteria.

![Vibify Playlist Generatie](/vibify/search.webp)
29 nummers gevonden met de zoekterm "Eminem"
![Vibify Playlist Generatie](/vibify/commandFilterByArtist.webp)
Verzoek om de zoekresultaten te filteren op de artiest "Eminem"
![Vibify Playlist Generatie](/vibify/finishedFilteredPlaylist.webp)
Afspeellijst met 29 nummers van de artiest "Eminem"

Als de afspeellijst al bestaat en je probeert deze opnieuw te maken, zal het de afspeellijst bijwerken met de nieuwe nummers die voldoen aan de criteria.

Het accepteert ook meerdere filters, zodat je unieke afspeellijsten kunt maken met verschillende artiesten.

![Vibify Playlist Generatie](/vibify/artistFilteredPlaylists.webp)

Zoals je kunt zien, is het een krachtig hulpmiddel voor Spotify-gebruikers die de controle over hun muziekbibliotheek willen nemen en nieuwe nummers willen verkennen die aansluiten bij hun smaak, maar het is veel meer dan dat. Vibify is ontworpen als een veelzijdige API die eenvoudig in verschillende applicaties kan worden geïntegreerd.


## Hoe kan ik het gebruiken?

**Opmerking:** Vibify is momenteel niet openbaar beschikbaar en vereist zelf-hosting.

1. **Spotify Developer Account:** Je moet een Spotify Developer-account aanmaken om toegang te krijgen tot de Spotify API en de benodigde inloggegevens te verkrijgen.
2. **Node.js Omgeving:** Zorg ervoor dat je Node.js op je machine hebt geïnstalleerd om de Vibify-server uit te voeren.
3. **MySQL Database:** Stel een MySQL-database in om gebruikersgegevens en toegangstokens veilig op te slaan.

Clone de [GitHub repository](https://github.com/justin0122/vibify) en volg de installatie-instructies in de readme om Vibify te configureren.

Als het eenmaal draait, kun je het gebruiken in je eigen projecten door mijn [npm-pakket: Vibify Client](https://www.npmjs.com/package/@vibify/vibify) te gebruiken of door verzoeken rechtstreeks naar de API te sturen vanaf je terminal. Volg de [documentatie](https://vibify-docs.justinjongstra.nl/) voor gedetailleerde instructies over hoe je met Vibify kunt communiceren.
**Opmerking:** De documentatie kan incompleet zijn, aangezien het project nog in ontwikkeling is.

Of wacht tot het openbaar beschikbaar is, en ik zal een gehoste versie aanbieden voor gebruik. Er is een mobiele app in ontwikkeling die ook als webapp beschikbaar zal zijn, dus blijf op de hoogte!

<p float="left">
  <img src="/vibify/screenshot-vibify-app.webp" width="50%" />
</p>

Geniet van de reis van het organiseren van je Spotify-bibliotheek en het ontdekken van nieuwe tracks met Vibify!
