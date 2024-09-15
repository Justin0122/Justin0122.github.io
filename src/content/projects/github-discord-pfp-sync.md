---
title: 'Sync Discord Profile Picture with GitHub'
description: A Node.js script that syncs your Discord profile picture with your GitHub profile picture.
publishDate: '2024-04-30'
isFeatured: false
---

**Project Overview:**

This Node.js script syncs your Discord profile picture with your GitHub profile picture. It checks every 24 hours if your GitHub profile picture has changed by comparing the profile picture URLs. If the profile pictures are different, it updates your Discord profile picture to match your GitHub profile picture.

**Note:**
This method employs a selfbot, which is in violation of Discord's terms of service. Despite this, the minor and benign action of synchronizing a profile picture is unlikely to cause problems, particularly if profile picture changes are infrequent. Additionally, to mitigate potential detection by Discord, the selfbot is designed to automatically deactivate itself within a timeframe of 1 to 5 minutes upon activation.

## Objectives

1. Check every 24 hours if your GitHub profile picture has changed.
2. Automatically sync your Discord profile picture with your GitHub profile picture.

## Technology Stack

- Node.js: For server-side logic and API integration.
- GitHub API: For fetching user data and profile pictures.
- Discord.js-selfbot: For updating the Discord profile picture.
- Deployment: Hosted on a Raspberry Pi.

## Outcome

This project has allowed me to keep my Discord profile picture in sync with my GitHub profile picture, ensuring consistency across platforms.

---

**Interested in how it works?**

Check out the [GitHub repository](https://github.com/Justin0122/github-discord-pfp-sync) to see under the hood.
