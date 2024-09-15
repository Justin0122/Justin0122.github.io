---
title: 'Justar - Een Discord Bot'
description: Een Discord-bot gemaakt met discord.js die de Vibify API gebruikt om Discord-gebruikers in staat te stellen afspeellijsten te genereren, aanbevelingen te krijgen en meer.
publishDate: '2024-04-24'
isFeatured: true
seo:
  image:
    src: '/discordbot/recommendations.webp'
    alt: Vibify Voorbeeld
---

**Projectoverzicht:**

Justar is een Discord-bot gemaakt met discord.js die de [Vibify API](../project-1) gebruikt om Discord-gebruikers in staat te stellen afspeellijsten te genereren, aanbevelingen te krijgen en meer.

![Projectvoorbeeld](/discordbot/recommendations.webp)

## Doelstellingen

1. Discord-gebruikers in staat stellen om afspeellijsten te genereren op basis van hun gelikete nummers uit specifieke tijdsperiodes.
2. Trackaanbevelingen geven op basis van de luistergeschiedenis en voorkeuren van de gebruiker.
3. Gebruikers in staat stellen informatie te krijgen over hun momenteel afgespeelde nummer en topnummers.
4. Gebruikers in staat stellen informatie te krijgen over hun Spotify-profiel.
5. Gebruikers in staat stellen informatie te krijgen over hun topnummers.
6. Gebruikers in staat stellen informatie te krijgen over hun topartiesten.

## Belangrijkste Kenmerken

1. **Toon Gebruikersinformatie:**

- Gebruikers kunnen informatie krijgen over hun Spotify-profiel, topnummers, topartiesten, onlangs afgespeelde nummers en het momenteel afgespeelde nummer.
  ![Opdracht: Me](/discordbot/me.webp)
- Gebruikers kunnen hun topnummers, topartiesten en onlangs afgespeelde nummers bekijken. De cooldown zorgt ervoor dat gebruikers de API niet kunnen spammen.
  ![Opdrachten](/discordbot/commands.webp)

## Technologie Stack

- Node.js: Voor server-side logica en API-integratie.
- Vibify API: Voor het ophalen van gebruikersgegevens, aanbevelingen en het maken van afspeellijsten.
- Discord.js: Voor het creëren van de Discord-bot en het afhandelen van gebruikersopdrachten.
- Deployment: Gehost op een Raspberry Pi.

## Resultaat

Justar heeft het mogelijk gemaakt om met de Vibify API te communiceren via Discord, waardoor ik afspeellijsten kan genereren en aanbevelingen kan krijgen zonder het platform te verlaten waarop ik het meest actief ben.

---

**Geïnteresseerd in hoe het werkt?**

Bekijk de [GitHub-repository](https://github.com/justin0122/discordBotJS) om te zien hoe het in elkaar zit.
