import React, { useState } from 'react';

const MaliciousScriptDetector = () => {
  const [script, setScript] = useState('');
  const [isMalicious, setIsMalicious] = useState(false);

  const detectMaliciousScript = () => {
    const maliciousPatterns = [
      /eval\(/,
      /str\.replace\(["']\\w+["']/,
      /unescape\(/, 
      /document\.write\(/,
      /obfuscatedFunction\(/,
      // Add more patterns based on analysis
    ];

    for (const pattern of maliciousPatterns) {
      if (pattern.test(script)) {
        setIsMalicious(true);
        return;
      }
    }

    setIsMalicious(false);
  };

  return (
    <div >
      <textarea 
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="Enter JavaScript code here"
      /> 
      <button onClick={detectMaliciousScript} >Detect Malicious Script</button>
      {isMalicious && <p>Potentially malicious JavaScript detected.</p>} 
      {!isMalicious && <p>No malicious JavaScript found.</p>}
    </div>
  );
};

export default MaliciousScriptDetector;
