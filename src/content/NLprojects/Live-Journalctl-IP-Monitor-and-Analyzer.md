---
title: 'Live Journalctl IP Monitor en Analyzer'
description: Een live journalctl IP-monitor en analyzer die IP-adressen in real-time volgt en analyseert die proberen toegang te krijgen tot je server.
publishDate: '2024-05-03'
isFeatured: true
seo:
  image:
    src: '/journalctl-ip-monitor/grafana.webp'
    alt: Grafana Dashboard
---

**Projectoverzicht:**

Deze live journalctl IP-monitor en analyzer volgt en analyseert IP-adressen die proberen toegang te krijgen tot je server in real-time. Door de journalctl-logs te monitoren en IP-adressen te extraheren, biedt het inzicht in het verkeer dat je server bereikt en helpt het bij het identificeren van potentiële bedreigingen of verdachte activiteiten.

![Grafana Dashboard](/journalctl-ip-monitor/grafana.webp)

## Doelstellingen

1. IP-adressen die proberen toegang te krijgen tot de server in real-time monitoren en analyseren.
2. De gegevens visualiseren met Grafana-dashboards om inzicht te krijgen in de verkeerspatronen.
3. De oorsprong van het verkeer achterhalen en potentiële bedreigingen of verdachte activiteiten identificeren.
4. Het proces automatiseren van het blokkeren van verdachte IP-adressen op basis van vooraf gedefinieerde criteria.

## Belangrijkste Kenmerken

- **Real-time Monitoring:** Continue monitoring van de journalctl-logs voor IP-adressen.
- **Gegevens Extractie:** IP-adressen uit de logs extraheren voor analyse.
- **ip-api:** Gebruik de ip-api-service om gedetailleerde informatie over de IP-adressen te verkrijgen.
- **Automatisch Blokkeren:** IP-adressen automatisch blokkeren op basis van vooraf gedefinieerde criteria.

![iptables](/journalctl-ip-monitor/iptables.webp)

## Technologie Stack

- Backend: Node.js voor server-side logica en API-integratie.
- Database: MySQL voor het opslaan van IP-adressen en hun details.
- Deployment: Gehost op een Raspberry Pi.

## Resultaat

Dit project heeft het mogelijk gemaakt om IP-adressen die proberen toegang te krijgen tot mijn server in real-time te monitoren en analyseren. Door de gegevens te visualiseren met Grafana-dashboards kan ik inzicht krijgen in de verkeerspatronen en potentiële bedreigingen of verdachte activiteiten identificeren.

---

**Geïnteresseerd in hoe het werkt?**

Bekijk de [GitHub-repository](https://github.com/Justin0122/Live-Journalctl-IP-Monitor-and-Analyzer) om te zien hoe het in elkaar zit.
