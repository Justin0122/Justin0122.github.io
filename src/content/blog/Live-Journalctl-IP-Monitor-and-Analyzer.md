---
title: Live Journalctl IP Monitor and Analyzer
excerpt: A live journalctl IP monitor and analyzer that tracks and analyzes IP addresses attempting to access your server in real-time.
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


## Why?

As a developer who hosts their own projects on a Raspberry Pi on the public network, I naturally became curious about who might be attempting to access my computer. It came as no surprise that there was activity, given the multitude of bots constantly probing for vulnerabilities across the internet. However, what did surprise me was the origin of these attempts and the sheer volume of requests flooding in.

Upon manual investigation, I realized it was time to automate the process. I envisioned a script that could execute the journalctl command, parse the output for any IP addresses not explicitly excluded in the .env file, and provide me with actionable insights. And thus, the Live Journalctl IP Monitor and Analyzer was born.

This script efficiently parses the detected IP addresses and leverages an API to gather detailed information about each IP. This enables me to answer crucial questions: Where are these attempts originating from? What regions and cities are they targeting from?


## What did I learn?

This project was a testament to the power of automation and the insights it can provide. By automating the monitoring and analysis of IP addresses attempting to access my server, I gained a deeper understanding of the traffic patterns and potential threats. This project also highlighted the importance of security and vigilance in today's digital landscape, where threats can come from anywhere in the world.

![Grafana Dashboard](/journalctl-ip-monitor/grafana.webp)

I also stumbled upon grafana, a powerful tool for visualizing data. By creating dashboards that display the IP addresses, their locations, and other relevant information, I was able to gain valuable insights into the traffic hitting my server. This experience opened my eyes to the possibilities of data visualization and the importance of presenting information in a clear and concise manner.


## What's next?

I have already made significant strides in refining this project. I've implemented an automatic blocking functionality that adds IP addresses to the firewall once they reach 5000 attempts. While this doesn't eliminate the threat entirely, it does provide an additional layer of security to my server.

![iptables](/journalctl-ip-monitor/iptables.webp)

As I continue to develop this project, my next step is to automate the process of reporting suspicious IP addresses. By integrating this functionality, I aim to not only further secure my server but also contribute to the broader network's security.

## Conclusion

The Live Journalctl IP Monitor and Analyzer has been a valuable addition to my server monitoring toolkit. By providing real-time insights into the IP addresses attempting to access my server, it has enabled me to identify potential threats and take proactive measures to enhance security. This project has not only improved my understanding of server traffic patterns but also highlighted the importance of automation and visualization in monitoring and analyzing data.
