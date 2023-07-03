import React from 'react';
import PropTypes from 'prop-types';

const styles= {
    bt: {
        fontSize: "20px",
        fontWeight: "bold",
        display: "flex",
        paddingLeft: "10px",
        
    },
    ubt: {
      fontSize: "15px",
        fontWeight: "bold",
        display: "flex",
        paddingLeft: "10px",
        color: "grey",
    },
    img_cage: {
      border: "1px solid black",
      width: 156,
      height: 118,
      float: "right",
      marginRight: "30px",
      
      }
    
}
const CategoriBtn = ({ text, underText, imgSrc, onClick, color }) => {
  return (
    <button
      style={{ 
        backgroundColor: color,
        borderRadius: "40px",
        width: 369,
        height: 180,
        border: "none",
        boxShadow: "inset 0 1px 4px 1px rgba(0, 0, 0, 0.2)",
        }}
      className="button"
      onClick={onClick}
    >
    <div style={styles.bt}>
      {text}
    </div>

    <div style={styles.ubt}>
      {underText}
    </div>

    <div style={styles.img_cage}>
        <img src={imgSrc} />
    </div>
    </button>
  );
};

CategoriBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string
};

CategoriBtn.defaultProps = {
  color: 'blue'
};


export default CategoriBtn;
