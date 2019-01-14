var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  },
  printPlaylists: function() {
    for (var index in this.playlists) {
      var playlist = this.playlists[index];
      console.log(
        index +
          ": " +
          playlist.name +
          " - " +
          playlist.tracks.length +
          " tracks"
      );
    }
  },
  printTracks: function() {
    for (var index in this.tracks) {
      var track = this.tracks[index];

      console.log(
        `${index}: ${track.name} by ${track.artist} (${track.album})`
      );
    }
  },
  printPlaylist: function(playlistId) {
    var index = this.playlists[playlistId];
    console.log(`${index.id}: ${index.name} - ${index.tracks.length} tracks`);

    for (var songs of index.tracks) {
      var track = this.tracks[songs];

      console.log(
        `${songs}: ${track.name} by ${track.artist} (${track.album})`
      );
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);

    console.log(this.playlists[playlistId].tracks);
  },
  addTrack: function(name, artist, album) {
    var id = uid();
    this.tracks["t" + id] = {
      id: "t" + id,
      name: name,
      artist: artist,
      album: album
    };
    console.log(id);
    console.log(this.tracks);
  },
  addPlaylist: function(name) {
    var id = uid();
    this.playlists["p" + id] = {
      id: "p" + id,
      name: name,
      tracks: []
    };
    console.log(id);
    console.log(this.playlists);
  }
};
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(10)
    .substring(0, 2);
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//learned about template literals with Riki
library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist("p01");

//adds an existing track to an existing playlist

library.addTrackToPlaylist("t03", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)

// adds a track to the library

library.addTrack("Shape of You", "Ed Sheeran", "Divide");

// adds a playlist to the library

library.addPlaylist("Lo-Fi Hip-Hop");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {};
