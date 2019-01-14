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
  }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function() {
  for (var index in library.playlists) {
    var playlist = library.playlists[index];
    console.log(
      index + ": " + playlist.name + " - " + playlist.tracks.length + " tracks"
    );
  }
};
printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function() {
  for (var index in library.tracks) {
    var track = library.tracks[index];

    console.log(`${index}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
//learned about template literals with Riki
printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
  var index = library.playlists[playlistId];
  console.log(`${index.id}: ${index.name} - ${index.tracks.length} tracks`);

  for (var songs of index.tracks) {
    var track = library.tracks[songs];

    console.log(`${songs}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
printPlaylist("p01");

//adds an existing track to an existing playlist

var addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);

  console.log(library.playlists[playlistId].tracks);
};

addTrackToPlaylist("t03", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(10)
    .substring(0, 2);
};

// adds a track to the library

var addTrack = function(name, artist, album) {
  var id = uid();
  library.tracks["t" + id] = {
    id: "t" + id,
    name: name,
    artist: artist,
    album: album
  };
  console.log(id);
  console.log(library.tracks);
};
addTrack("Shape of You", "Ed Sheeran", "Divide");

// adds a playlist to the library

var addPlaylist = function(name) {
  var id = uid();
  library.playlists["p" + id] = {
    id: "p" + id,
    name: name,
    tracks: []
  };
  console.log(id);
  console.log(library.playlists);
};
addPlaylist("Lo-Fi Hip-Hop");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {};
