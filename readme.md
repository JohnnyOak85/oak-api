<h1 align="center">
  Oak API<br>
</h1>

<p align="center">A multi purpose personal server</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JohnnyOak85/oak-server.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JohnnyOak85/oak-server.svg">

  <a href="https://github.com/JohnnyOak85/oak-server/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JohnnyOak85/oak-server.svg">
  </a>

 <a href="https://www.codacy.com/gh/JohnnyOak85/oak-server/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JohnnyOak85/oak-server&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy Badge" src="https://app.codacy.com/project/badge/Grade/265c8b59fc5a481f8f83733eb7cd15a4" />
 </a>
</p>

## Table of Contents

-   [Introduction](#introduction)
-   [How to](#how-to)
-   [Artemis](#artemis)
    -   [Game](#game)
    -   [Moderation](#moderation)
    -   [News](#news)
    -   [Reminders](#reminders)
    -   [Speech](#speech)
-   [Home Manager](#home-manager)
    -   [Finances](#finances)
-   [News](#news-1)
-   [Storage](#storage)

## Introduction

Oak API, is a collection of self contained servers to be used by my own apps.  
It connects to my database and other APIs that make sense for my needs.

## How to

If, for some reason, you want to try out this server yourself, or fork it, you need a `certs` folder in the root folder. You need to generate your own [PEM](https://www.howtogeek.com/devops/what-is-a-pem-file-and-how-do-you-use-it/) certificate files in order to be https certified.  
You also need to rename `example.env` to `.env` and add your own environment variables to it.

Don't forget to `npm install` all the modules.  
Available scripts:
-   `npm run artemis` -> Starts Artemis API
-   `npm run storage` -> Starts Storage API

## Artemis

A module to be consumed by my [Discord Bot](https://github.com/JohnnyOak85/artemis) by the same name.

### Game

Retrieves all the needed files for Tales of Murwelgrave. An RPG style game where the player gets to engage randomly generated monsters. As they do, a battle will ensue, if they win their stats will go up and will be stored into the database. There are also achievements to be gained.

### Moderation

Used for guild moderation purposes.

### News

Same as [News](#news) but with the `/artemis` prefix.

### Reminders

Dated events of various types. Can be a birthday, a special date or a release date for a movie or video game.

### Speech

A module to simulate speech for Artemis. Can be a greeting, a Magic 8 Ball style answers, or a reaction or response to certain key words. There is a random chance that a speech quirk will be applied to the text sent.  
Here you can also get the necessary data to construct a randomly generated short story.
There is also a list of quotes.

## Home Manager

A module to deal with various home related functions. Still a work in progress.

### Finances

Module that deals with my own home finances. Mostly based around my own and my wife's financial situation.  
The most interesting feature would be the calculators that give you a liquid wage out of a gross wage (based on Portugal).

## News

Integrates with [NewscatcherAPI](https://newscatcherapi.com/) to retrieve the latest news articles.  
More endpoints to come.

## Storage

Encapsulates all communication with databases. So far I am using [Redis](https://redis.io/) and [CouchDB](https://couchdb.apache.org/).
