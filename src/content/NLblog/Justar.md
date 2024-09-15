---
title: Justar - Een Discord Bot
excerpt: Justar is een Discord-bot die voornamelijk is ontworpen om te werken met Vibify
publishDate: '2024-04-24'
tags:
  - Discord
  - API
  - Music
  - Development
seo:
  image:
    src: '/discordbot/commands.webp'
    alt: Vibify Afspeellijst Generatie
---


[Justar](https://github.com/justin0122/discordBotJS) is een Discord-bot die voornamelijk is ontworpen om te werken met [Vibify](../1-vibify). Het is gebouwd met Node.js en de [Discord.js-bibliotheek](https://discordjs.guide/), waardoor gebruikers direct vanuit Discord met de Vibify API kunnen communiceren. Justar biedt een naadloze ervaring voor het beheren van Spotify-afspeellijsten, het ontdekken van nieuwe muziek en het organiseren van je Spotify-bibliotheek, allemaal binnen het Discord-platform. Hoewel ik heb ontdekt dat het tegen de servicevoorwaarden van de Spotify API is om een Discord-bot te gebruiken om met de Spotify API te communiceren, gebruik ik deze bot nog steeds voor persoonlijk gebruik.

## Waarom?

Ik wilde meer leren over Discord-bots en hoe ik ze kan integreren met andere API's om een interactievere ervaring voor gebruikers te creëren. Door Justar te ontwikkelen, kon ik de mogelijkheden van de Discord.js-bibliotheek verkennen en experimenteren met verschillende functies en mogelijkheden die de gebruikerservaring konden verbeteren. Bovendien wilde ik een hulpmiddel creëren waarmee gebruikers de functies van Vibify direct vanuit Discord konden benaderen, waardoor het gemakkelijker wordt om hun Spotify-bibliotheek te beheren en nieuwe muziek te ontdekken.

![Justar Commando's](/discordbot/commands.webp)

## Waarom node.js?

Node.js was de perfecte keuze voor het bouwen van Justar vanwege de asynchrone aard en de gebeurtenisgestuurde architectuur, die goed aansluiten bij de eisen van een Discord-bot. De Discord.js-bibliotheek biedt een eenvoudige en intuïtieve manier om met de Discord API te communiceren, waardoor ontwikkelaars krachtige bots kunnen maken met minimale inspanning. Bovendien biedt Node.js een breed scala aan bibliotheken en tools die het gemakkelijk maken om te integreren met andere API's, zoals [mijn eigen Vibify Client npm-pakket](https://www.npmjs.com/package/@vibify/vibify), waardoor naadloze communicatie tussen Justar en de Vibify API mogelijk is.

## Wat kan het nog meer doen?

Justar biedt naast de integratie met de Vibify API nog enkele andere functies. Enkele van de belangrijkste functionaliteiten zijn:

- **Weer weergeven:** Justar kan de huidige weersinformatie voor een opgegeven locatie ophalen met behulp van [een weer-API](https://www.weatherapi.com/)
  ![Weer Commando](/discordbot/getweather.webp)
  En het heeft automatische suggesties voor de locatie:
  ![Weer Commando Autocomplete](/discordbot/getweather-autocomplete.webp)

- **Voorspelling weergeven:** Justar kan ook een 3-daagse weersvoorspelling voor een opgegeven locatie geven
  ![Voorspelling Commando](/discordbot/getforecast.webp)
