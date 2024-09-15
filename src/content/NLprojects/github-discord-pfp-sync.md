---
title: 'Synchroniseer Discord Profielfoto met GitHub'
description: Een Node.js-script dat je Discord-profielfoto synchroniseert met je GitHub-profielfoto.
publishDate: '2024-04-30'
isFeatured: false
---

**Projectoverzicht:**

Dit Node.js-script synchroniseert je Discord-profielfoto met je GitHub-profielfoto. Het controleert elke 24 uur of je GitHub-profielfoto is veranderd door de URL's van de profielfoto's te vergelijken. Als de profielfoto's verschillen, wordt je Discord-profielfoto bijgewerkt om overeen te komen met je GitHub-profielfoto.

**Opmerking:**
Deze methode maakt gebruik van een selfbot, wat in strijd is met de servicevoorwaarden van Discord. Ondanks dit feit is de kleine en onschuldige actie van het synchroniseren van een profielfoto onwaarschijnlijk om problemen te veroorzaken, vooral als profielfoto-wijzigingen zeldzaam zijn. Bovendien, om mogelijke detectie door Discord te vermijden, is de selfbot ontworpen om zichzelf automatisch uit te schakelen binnen een tijdsbestek van 1 tot 5 minuten na activatie.

## Doelstellingen

1. Elke 24 uur controleren of je GitHub-profielfoto is veranderd.
2. Je Discord-profielfoto automatisch synchroniseren met je GitHub-profielfoto.

## Technologie Stack

- Node.js: Voor server-side logica en API-integratie.
- GitHub API: Voor het ophalen van gebruikersgegevens en profielfoto's.
- Discord.js-selfbot: Voor het bijwerken van de Discord-profielfoto.
- Deployment: Gehost op een Raspberry Pi.

## Resultaat

Dit project heeft me in staat gesteld om mijn Discord-profielfoto gesynchroniseerd te houden met mijn GitHub-profielfoto, wat zorgt voor consistentie over platforms.

---

**Geïnteresseerd in hoe het werkt?**

Bekijk de [GitHub-repository](https://github.com/Justin0122/github-discord-pfp-sync) om te zien hoe het in elkaar zit.

