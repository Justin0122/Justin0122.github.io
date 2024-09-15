---
title: Justar - A Discord Bot
excerpt: Justar is a Discord bot primarily designed to work with Vibify
publishDate: '2024-04-24'
tags:
  - Discord
  - API
  - Music
  - Development
seo:
  image:
    src: '/discordbot/commands.webp'
    alt: Vibify Playlist Generation
---


[Justar](https://github.com/justin0122/discordBotJS) is a Discord bot primarily designed to work with [Vibify](../1-vibify). It is built using Node.js and the [Discord.js library](https://discordjs.guide/), allowing users to interact with the Vibify API directly from Discord. Justar provides a seamless experience for managing Spotify playlists, discovering new music, and organizing your Spotify library, all within the Discord platform. However, I found out that it is against the Spotify API's terms of service to use a Discord bot to interact with the Spotify API, but I'm still using this bot for personal use.

## Why?

I wanted to learn more about Discord bots and how I can integrate them with other APIs to create a more interactive experience for users. By developing Justar, I was able to explore the capabilities of the Discord.js library and experiment with different features and functionalities that could enhance the user experience. Additionally, I wanted to create a tool that would allow users to access Vibify's features directly from Discord, making it easier to manage their Spotify library and discover new music.

![Justar Commands](/discordbot/commands.webp)

## Why node.js?

Node.js was the perfect choice for building Justar due to its asynchronous nature and event-driven architecture, which align well with the requirements of a Discord bot. The Discord.js library provides a simple and intuitive way to interact with the Discord API, allowing developers to create powerful bots with minimal effort. Additionally, Node.js offers a wide range of libraries and tools that make it easy to integrate with other APIs, such as [my own Vibify Client npm package](https://www.npmjs.com/package/@vibify/vibify), enabling seamless communication between Justar and the Vibify API.

## What else can it do?

Justar offers a few other features in addition to its integration with the Vibify API. Some of the key functionalities include:

- **Displaying the weather:** Justar can fetch the current weather information for a specified location using [a weather api](https://www.weatherapi.com/)
![Weather Command](/discordbot-getweather.webp)
And it has autocomplete suggestions for the location:
![Weather Command Autocomplete](/discordbot/getweather-autocomplete.webp)

- **Displaying the forecast:** Justar can also provide a 3-day weather forecast for a specified location
![Forecast Command](/discordbot/getforecast.webp)