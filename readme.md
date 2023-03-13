<h1 align="center">
  Oak Server<br>
</h1>

<p align="center">A multi purpose personal server</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JohnnyOak85/oak-server.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JohnnyOak85/oak-server.svg">

  <a href="https://github.com/JohnnyOak85/oak-server/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JohnnyOak85/oak-server.svg">
  </a>

 <a href="https://www.codacy.com/gh/JohnnyOak85/oak-server/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JohnnyOak85/oak-server&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy Badge" src="https://app.codacy.com/project/badge/Grade/265c8b59fc5a481f8f83733eb7cd15a4"/>
 </a>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [How to](#how-to)
- [Artemis](#artemis)
  - [Game](#game)
    - [Areas](#areas)
    - [Players](#players)
    - [Ranks](#ranks)
    - [Stats](#stats)
  - [Moderation](#moderation)
    - [Users](#users)
  - [News](#news)
  - [Reminders](#reminders)
  - [Speech](#speech)
    - [Quirks](#quirks)
    - [Quotes](#quotes)
    - [Replies](#replies)
    - [Story](#story)
- [Basic](#basic)
- [Finances](#finances)
  - [Contributors](#contributors)
  - [Debts](#debts)
  - [Expenses](#expenses)
  - [Wages](#wages)
- [News](#news-1)

## Introduction

Oak server, as the name implies, is my own personal server to be used for all my apps.  
It connects to my database and other APIs that make sense for my needs.

## How to

If, for some reason, you want to try out this server yourself, or fork it, you need a `certs` folder in the root folder. You need to generate your own [PEM](https://www.howtogeek.com/devops/what-is-a-pem-file-and-how-do-you-use-it/) certificate files in order to be https certified.  
You also need to rename `example.env` to `.env` and add your own environment variables to it.

Don't forget to `npm install` all the modules.  
Then just `npm start` and you're good to go!

## Artemis

A module to be consumed by my [Discord Bot](https://github.com/JohnnyOak85/artemis) by the same name.

### Game

Retrieves all the needed files for Tales of Murwelgrave.

#### Areas

> GET /artemis/game/areas => Returns a string with the code of the current active area.  
> GET /artemis/game/areas/data => Returns an array with the all the lists of monsters for the current area.  
> GET /artemis/game/areas/list => Returns a single array with all the areas monsters.  
> GET /artemis/game/areas/name => Returns a string with the name of the current active area.  
> PUT /artemis/game/areas => Updates the current active area.

#### Players

> GET /artemis/game/players/all => Returns an array all players from the database.  
> GET /artemis/game/players => Returns a single player object by id.  
> GET /artemis/game/players/ranks => Returns an object with the possible player ranks.  
> GET /artemis/game/players/attributes => Returns a string array of attributes.

#### Ranks

> GET /artemis/game/ranks => Returns the current areas monster rank information.

#### Stats

Returns various objects with integers for post battle buff gains.

> GET /artemis/game/stats/attributes  
> GET /artemis/game/stats/base  
> GET /artemis/game/stats/battle  
> GET /artemis/game/stats/caps  
> GET /artemis/game/stats/health  
> GET /artemis/game/stats/level  
> GET /artemis/game/stats/luck  
> GET /artemis/game/stats/main

### Moderation

WIP

#### Users

> GET /artemis/moderation/users => Returns a user object from the database.  
> PUT /artemis/moderation/users => Creates or updates a user.

### News

Same as [News](#news) but with the `/artemis` prefix.

### Reminders

> GET /artemis/reminders => Returns an array it all reminders from the database.
> PUT /artemis/reminders => Creates or updates a reminder.
> GET /artemis/reminders/config => Returns the configurations for reminders.

### Speech

A module to simulate speech for Artemis.

#### Quirks

> GET /artemis/speech/quirks => Returns a random array with speech quirks to be applied when Artemis sends a message to the guild.

#### Quotes

> GET /artemis/speech/quotes => Returns a string array.

#### Replies

> GET /artemis/speech/replies/greetings => Returns a string with possible greetings for Artemis to send when mentioned.  
> GET /artemis/speech/replies/predictions => Returns a string array with Magic 8 Ball style answers.  
> GET /artemis/speech/replies/reactions => Returns a dictionary with possible reactions for key words.  
> GET /artemis/speech/replies/responses => Returns a dictionary with possible responses for key words.

#### Story

> GET /artemis/speech/story/blocks => Returns an array containing the various blocks to construct a story.  
> GET /artemis/speech/story/decorators => Returns the decorators to apply to the story.

## Basic

The most basic endpoints.

> GET / => Returns a simple HTML page just stating the server is online. I decided to return a dark page for the sake of my own eyes.  
> ANY {wildcard} => Throws a not found error if the endpoint does not exist.  
> GET /log => Returns a string array containing the server error log.

## Finances

Module that deals with my own home finances.

### Contributors

> GET /finances/contributors => Returns an array containing the contributor info (me and my wife's details).

### Debts

> GET /finances/debts => Returns an array containing information for our shared debts.

### Expenses

> GET /finances/expenses => Returns an array containing information for our shared expenses.

### Wages

> GET /finances/wages => Receives gross yearly wage values and returns monthly liquid wage values.

## News

Integrates with [NewscatcherAPI](https://newscatcherapi.com/) to retrieve the latest news articles.  
More endpoints to come.

> GET /news/gaming => Returns an array with the five latest gaming news.
