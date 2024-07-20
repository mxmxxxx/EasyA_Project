import React from 'react';
import styled from 'styled-components';

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
  border-radius: 8px;
`;

const VideoTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

function VideoGrid() {
  const videos = [
    { title: 'Video 1', thumbnail: 'https://via.placeholder.com/300x200' },
    { title: 'Video 2', thumbnail: 'https://via.placeholder.com/300x200' },
    { title: 'Video 3', thumbnail: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <GridContainer>
      {videos.map((video, index) => (
        <VideoCard key={index}>
          <Thumbnail src={video.thumbnail} alt={video.title} />
          <VideoTitle>{video.title}</VideoTitle>
        </VideoCard>
      ))}
    </GridContainer>
  );
}

export default VideoGrid;
