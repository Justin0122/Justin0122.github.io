---
title: Live Journalctl IP Monitor en Analyzer
excerpt: Een live journalctl IP-monitor en analyzer die IP-adressen in real-time bijhoudt en analyseert die proberen toegang te krijgen tot je server.
publishDate: '2024-05-03'
updatedDate: '2024-05-04'
isFeatured: true
tags:
  - Development
  - Security
seo:
  image:
    src: '/journalctl-ip-monitor/grafana.webp'
    alt: Grafana Dashboard
---


![terminal](/journalctl-ip-monitor/terminal.webp)


## Waarom?

Als ontwikkelaar die zijn eigen projecten host op een Raspberry Pi op het publieke netwerk, werd ik vanzelf nieuwsgierig naar wie er mogelijk probeerde toegang te krijgen tot mijn computer. Het was geen verrassing dat er activiteit was, gezien het aantal bots dat constant op zoek is naar kwetsbaarheden op internet. Wat me echter wel verraste, was de oorsprong van deze pogingen en de enorme hoeveelheid verzoeken die binnenkwamen.

Na handmatige inspectie realiseerde ik me dat het tijd was om het proces te automatiseren. Ik stelde me een script voor dat het journalctl-commando zou uitvoeren, de output zou analyseren op IP-adressen die niet expliciet zijn uitgesloten in het .env-bestand, en me bruikbare inzichten zou geven. En zo werd de Live Journalctl IP Monitor en Analyzer geboren.

Dit script analyseert efficiënt de gedetecteerde IP-adressen en maakt gebruik van een API om gedetailleerde informatie over elk IP te verzamelen. Hierdoor kan ik cruciale vragen beantwoorden: Waar komen deze pogingen vandaan? Welke regio's en steden worden vanuit daar aangetast?


## Wat heb ik geleerd?

Dit project was een bewijs van de kracht van automatisering en de inzichten die het kan bieden. Door het monitoren en analyseren van IP-adressen die proberen toegang te krijgen tot mijn server te automatiseren, kreeg ik een dieper inzicht in de verkeerspatronen en potentiële bedreigingen. Dit project benadrukte ook het belang van beveiliging en waakzaamheid in het digitale landschap van vandaag, waar bedreigingen van overal ter wereld kunnen komen.

![Grafana Dashboard](/journalctl-ip-monitor/grafana.webp)

Ik kwam ook grafana tegen, een krachtig hulpmiddel voor het visualiseren van gegevens. Door dashboards te maken die de IP-adressen, hun locaties en andere relevante informatie weergeven, kon ik waardevolle inzichten verkrijgen in het verkeer dat mijn server bereikt. Deze ervaring opende mijn ogen voor de mogelijkheden van datavisualisatie en het belang van het presenteren van informatie op een duidelijke en beknopte manier.


## Wat komt er daarna?

Ik heb al aanzienlijke vooruitgang geboekt in het verfijnen van dit project. Ik heb een automatische blokkeringfunctie geïmplementeerd die IP-adressen aan de firewall toevoegt zodra ze 5000 pogingen bereiken. Hoewel dit de bedreiging niet volledig elimineert, biedt het wel een extra beveiligingslaag voor mijn server.

![iptables](/journalctl-ip-monitor/iptables.webp)

Terwijl ik dit project verder ontwikkel, is mijn volgende stap het automatiseren van het proces van het rapporteren van verdachte IP-adressen. Door deze functionaliteit te integreren, streef ik ernaar niet alleen mijn server verder te beveiligen, maar ook bij te dragen aan de beveiliging van het bredere netwerk.

## Conclusie

De Live Journalctl IP Monitor en Analyzer is een waardevolle aanvulling op mijn servermonitoringtoolkit geweest. Door real-time inzichten te bieden in de IP-adressen die proberen toegang te krijgen tot mijn server, heeft het me in staat gesteld om potentiële bedreigingen te identificeren en proactieve maatregelen te nemen om de beveiliging te verbeteren. Dit project heeft niet alleen mijn begrip van serververkeerspatronen verbeterd, maar ook het belang van automatisering en visualisatie in het monitoren en analyseren van gegevens benadrukt.
