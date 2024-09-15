---
title: 'Github API'
description: Een API die gebruikers toestaat informatie over hun GitHub-profiel, repositories en readme-bestanden op te halen.
publishDate: '2024-04-30'
isFeatured: false
seo:
  image:
    src: '/github-api/repositories.webp'
    alt: Github API Voorbeeld
---

**Projectoverzicht:**

Dit project maakt gebruik van de GitHub API om gebruikers in staat te stellen informatie over hun GitHub-profiel, repositories en readme-bestanden op te halen. Gebruikers kunnen ook zoeken naar repositories en informatie daarover krijgen.

![Projectvoorbeeld](/github-api/repositories.webp)

Wanneer iemand de [website](https://dev.justinjongstra.nl) bezoekt, worden al mijn publieke repositories opgehaald en server-side gecached voor een dag. Op deze manier laadt de website sneller en wordt de GitHub API rate limit niet overschreden.

## Doelstellingen

1. Mijn GitHub-profiel en repositories tonen op mijn persoonlijke website.

## Technologie Stack

- Node.js: Voor server-side logica en API-integratie.
- GitHub API: Voor het ophalen van gebruikersgegevens, repositories en readme-bestanden.
- Express.js: Voor het creëren van API-endpoints en het afhandelen van verzoeken.
- Deployment: Gehost op een Raspberry Pi.

## Resultaat

Het GitHub API-project heeft me in staat gesteld om mijn GitHub-profiel en repositories op mijn persoonlijke website te tonen, waardoor het voor bezoekers gemakkelijker wordt om mijn werk te zien.

---

**Geïnteresseerd in hoe het werkt?**

Bekijk de [GitHub-repository](https://github.com/Justin0122/GitHub_API_NodeJS) om te zien hoe het in elkaar zit.
