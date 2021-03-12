import React from "react";
import "./ProgressBar.scss";


const ProgressBar = (props) => {
  const { completed } = props;

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#1acca4',
  }

  return (
    <div className="progressBarContainer">
      <div style={fillerStyles}> </div>
    </div>
  );
};

export default ProgressBar;