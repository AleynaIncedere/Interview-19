import React, { useState } from "react";
import "./styles.css"; 

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  const [blurValue, setBlurValue] = useState(0);

  const handleBlurChange = (event) => {
    setBlurValue(event.target.value);
  };

  return (
    <div className="App">
  
      <img
        src={`${BASE_IMG_URL}`}
        alt="Lorem Picsum"
        style={{
          filter: `blur(${blurValue}px)`, 
          transition: "filter 0.3s ease", 
        }}
      />

    
      <div style={{ marginTop: "20px" }}>
        <label>Blur için kaydırın</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={blurValue}
          onChange={handleBlurChange}
        />
      </div>
    </div>
  );
}

export default App;
