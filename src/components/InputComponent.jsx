import React, { useState } from 'react';

function InputComponent() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const styles= {
    ip: {
        width: 1100,
        border: "none",
        height: 50,
        fontSize: "20px",
    },
  }
  return (
    <div>
      <input style={styles.ip} type="text" placeholder='ex) 기자회견 장에서' value={value} onChange={handleChange} />
    </div>
  );
}

export default InputComponent;
