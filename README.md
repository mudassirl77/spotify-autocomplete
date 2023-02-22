# Spotify Autocomplete
Spotify Autocomplete is a simple Angular app that allows users to search for artists, albums, or tracks on Spotify using an autocomplete feature.
It uses the Spotify Web API to fetch data and display it to the user in the grid format.

## Features
- Type in the autocomplete search bar to search for artists, albums, and tracks.
- Results are displayed in a grid format.
- Show More results
- Preview tracks
- View item details on Spotify

## Technologies Used
- Angular v15
- RxJS
- Bootstrap
- Spotify Web API

## Pre-requisites
1. Make sure that you have the latest Node.js installed on your machine.
2. Click [here](https://nodejs.org/en/download/) to download the latest node version

## Installation
1. Navigate into the project directory: `cd spotify-autocomplete`
2. Install the required dependencies: `npm install`
3. Run application in development mode by using: `npm start` or `ng serve`

## Usage
- Use the seach input to type query. No need to press enter
- Results will appear based on query
- Click on play icon (if available) to preview tracks
- Click on image to view item details on Spotify
- Click on Show More to display more results
- A .gif file has been added to demonstrate the search flow

## Achievements
- All minimum technical requirements were fulfilled
- Code was structured properly with a clear separation of concerns
- Coding best practices were followed
- Unit tests have been added
- Support for all latest and stable browsers through Bootstrap 5
- Spotify Authorization Code Flow OAuth 2.0 was implemented

## Additional Features
1. Preview tracks
    - Only tracks that can be previewed will have the play icon displayed

2. Show More results
    - Initially only 5 results will be shown but an additional of 5 rows can be retrieved when clicking on the link

3. View searched Artists, Albums or Tracks on Spotify
    - More details about a particular artist, album or track can be viewed by clicking on their respective image

## Notes
1. A header was added just to give the search page a proper look and feel. The links of the nav items do not work.
2. Proper mobile support has not been added due to limited time.
3. If token has been expired, consider routing to `/auth` manually as refresh token has not been implemented due to time constraint.


## Possible Future Expansion
- Implement Share functionality for sharing tracks
- Implement Add to playlist
- Implement Play functionality for playing tracks

