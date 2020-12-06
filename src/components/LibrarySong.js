import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const selectSong = async () => {
    await setCurrentSong(song);
    //Play Audio
    if (isPlaying) audioRef.current.play();
  };

  const getActiveSong = () => {
    setSongs(
      songs.map((state) => {
        return {
          ...state,
          active: state.id === song.id,
        };
      })
    );
  };

  return (
    <div
      onClick={() => {
        selectSong();
        getActiveSong();
      }}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
