---
title: 'Justar - A Discord Bot'
description: A discord bot made with discord.js that uses Vibify API to allow discord users to generate playlists, get recommendations, and more.
publishDate: '2024-04-24'
isFeatured: true
seo:
  image:
    src: '/discordbot/recommendations.webp'
    alt: Vibify Preview
---

**Project Overview:**

Justar is a Discord bot made with discord.js that uses the [Vibify API](../project-1) to allow Discord users to generate playlists, get recommendations, and more. 

![Project preview](/discordbot/recommendations.webp)

## Objectives

1. Allow Discord users to generate playlists based on their liked songs from specific time periods.
2. Provide track recommendations based on the user's listening history and preferences.
3. Allow users to get information about their currently playing track and top tracks.
4. Allow users to get information about their Spotify profile.
5. Allow users to get information about their top tracks.
6. Allow users to get information about their top artists.

## Main Features

1. **Show User Information:**

- Users can get information about their Spotify profile, top tracks, top artists, recently played tracks, and currently playing track.
  ![Command: Me](/discordbot/me.webp)
- Users can get their top tracks, top artists, and recently played tracks. The cooldown ensures that users can't spam the API.
  ![Commands](/discordbot/commands.webp)


## Technology Stack

- Node.js: For server-side logic and API integration.
- Vibify API: For fetching user data, recommendations, and playlist creation.
- Discord.js: For creating the Discord bot and handling user commands.
- Deployment: Hosted on a Raspberry Pi.

## Outcome

Justar has made it possible for me to interact with Vibify API through Discord, allowing me to generate playlists and get recommendations without leaving the platform I'm most active on.

---

**Interested in how it works?**

Check out the [GitHub repository](https://github.com/justin0122/discordBotJS) to see under the hood.
