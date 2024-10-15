import React, { useState } from 'react';
import { moodColors } from './moodColors';
import styled from 'styled-components';

// Styled components for layout and color display
const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const MoodSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

const MoodButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f0f0f0;
  color: #333;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #fff;
    border-color: #00bfff;
    color: #00bfff;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const ColorDisplay = styled.div`
  background-color: ${({ hex }) => hex};
  color: ${({ hex }) => (hex === '#00008B' ? '#fff' : '#000')};
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 30px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  text-align: center;
  
  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 16px;

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 14px;

    h2 {
      font-size: 18px;
    }
  }
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const MoodColorTool = () => {
    const [selectedMood, setSelectedMood] = useState(null);

    const handleMoodClick = (mood) => {
        setSelectedMood(mood);
    };

    return (
        <Container>
            <Title>Select a Mood</Title>
            <MoodSelector>
                {moodColors.map((mood, index) => (
                    <MoodButton key={index} onClick={() => handleMoodClick(mood)}>
                        {mood.mood}
                    </MoodButton>
                ))}
            </MoodSelector>

            {selectedMood && (
                <ColorDisplay hex={selectedMood.hex}>
                    <h2>{selectedMood.mood}</h2>
                    <p>{selectedMood.color}</p>
                    <p>{selectedMood.hex}</p>
                </ColorDisplay>
            )}
        </Container>
    );
};

export default MoodColorTool;
