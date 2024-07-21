import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const VideoCard = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height or use a percentage */
  border-radius: 8px;
  object-fit: cover; /* Use 'cover' or 'contain' depending on your requirement */
`;

const VideoTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const VideoDescription = styled.h3`
  font-size: 12px;
  margin: 10px 0;
`;

function VideoGrid() {
  const videos = [
    { title: 'Video 1', description: 'by John Doe', thumbnail: 'https://substrate.io/img/substrate_og.png' },
    { title: 'Video 2', description: 'by Jane Smith', thumbnail: 'https://miro.medium.com/v2/resize:fit:700/1*QtqGgvbYZLqCGzdfLv5vsg.png' },
    { title: 'Video 3', description: 'by Creator 3', thumbnail: 'https://zipmex.com/static/908203b273d5135f98ebe854675c1a80/1bbe7/Polkadot-Explained.jpg' },
    { title: 'Video 4', description: 'by Creator 4', thumbnail: 'https://pbs.twimg.com/media/FrW93XBXgAA8r8s?format=jpg&name=4096x4096' },
    { title: 'Video 5', description: 'by Creator 5', thumbnail: 'https://cdn.sanity.io/images/76lym2dp/prod/c77208d392ba6abf16d66c3820cc4af0825bffda-1200x630.jpg' },
    { title: 'Video 6', description: 'by Creator 6', thumbnail: 'https://via.placeholder.com/300x200' },
    { title: 'Video 4', description: 'by Creator 7', thumbnail: 'https://pbs.twimg.com/media/FrW93XBXgAA8r8s?format=jpg&name=4096x4096' },
    { title: 'Video 5', description: 'by Creator 8', thumbnail: 'https://cdn.sanity.io/images/76lym2dp/prod/c77208d392ba6abf16d66c3820cc4af0825bffda-1200x630.jpg' },
    { title: 'Video 6', description: 'by Creator 9', thumbnail: 'https://via.placeholder.com/300x200' },
  ];

  const navigate = useNavigate();

  const playVid = (idx) => {
    if (idx == 1) {
      
    } else {
      alert("You have not subscribed to this channel yet.")
    }
  };

  return (
    <GridContainer>
      {videos.map((video, index) => (
        <VideoCard key={index} onClick={() => playVid(index)}>
          <Thumbnail src={video.thumbnail} alt={video.title} />
          <VideoTitle>{video.title}</VideoTitle>
          <VideoDescription>{video.description}</VideoDescription>
        </VideoCard>
      ))}
    </GridContainer>
  );
}

export default VideoGrid;
