
import React from 'react';

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ value, size = 200, className = '' }) => {
  // Simple fake QR code pattern using CSS
  const qrPattern = [
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1],
    [0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0],
    [1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1],
    [0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0],
    [1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1],
    [0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0],
    [1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1]
  ];

  const cellSize = size / 17;

  return (
    <div className={`inline-block bg-white p-4 rounded-lg shadow-md ${className}`}>
      <div 
        className="grid grid-cols-17 gap-0 border-2 border-gray-300"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          gridTemplateColumns: `repeat(17, ${cellSize}px)`
        }}
      >
        {qrPattern.flat().map((cell, index) => (
          <div
            key={index}
            className={`${cell ? 'bg-black' : 'bg-white'}`}
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`
            }}
          />
        ))}
      </div>
      <div className="text-center mt-2">
        <p className="text-sm text-gray-600 font-medium">Scan to Pay</p>
        <p className="text-xs text-gray-500">Amount: {value}</p>
      </div>
    </div>
  );
};

export default QRCode;
