import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const Personal = () => {
  const password = '8090779411'; // Fixed password
  const secretMessage = 'This is some secret content that will be encrypted!'; // Your content to encrypt

  const [isLocked, setIsLocked] = useState(true);
  const [inputPassword, setInputPassword] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState(null);

  // Encrypt the message with the password
  const encryptedMessage = CryptoJS.AES.encrypt(secretMessage, password).toString();

  // Function to handle decryption
  const handleUnlock = () => {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, inputPassword);
    const originalMessage = bytes.toString(CryptoJS.enc.Utf8);

    if (originalMessage) {
      setDecryptedMessage(originalMessage);
      setIsLocked(false);
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setIsLocked(!isLocked)}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Lock/Unlock
      </button>

      {isLocked ? (
        <div className="mt-4">
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Enter password"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleUnlock}
            className="bg-green-500 text-white p-2 rounded-md ml-2"
          >
            Unlock
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <p className="text-lg font-semibold">Decrypted Message:</p>
          <a href='ankitlovesaarti.netlify.app'>Click It </a>
          {/* <p>{decryptedMessage}</p> */}
        </div>
      )}
    </div>
  );
};

export default Personal;
