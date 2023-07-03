import React from "react";
import PropTypes from "prop-types";

const styles = {
  bt: {
    fontSize: "30px",
    fontWeight: "bold",
    letterSpacing: "-1px",
  },
  ubt: {
    fontSize: "17px",
    color: "grey",
    fontWeight: "bold",
    letterSpacing: "-1px",
  },
};

function handleClick() {
  window.location.href = '/select';
}
const LevelBtn = ({ text, underText, onClick, color }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        borderRadius: "40px",
        width: 678,
        height: 100,
        border: "none",
        boxShadow: "0 1px 4px 1px rgba(0, 0, 0, 0.2)",
        marginBottom: "30px",
      }}
      className="button"
      onClick={handleClick}
    >
      <div style={styles.bt}>{text}</div>

      <div style={styles.ubt}>{underText}</div>
    </button>
  );
};

LevelBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

LevelBtn.defaultProps = {
  color: "blue",
};

export default LevelBtn;