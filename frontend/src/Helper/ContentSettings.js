import React, { useEffect } from 'react';

const ContentSettings = () => {
  useEffect(() => {
    // Disable right-click context menu
    /*
    */
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
   // document.addEventListener('contextmenu', handleContextMenu);
    // Prevent copying content
    const handleCopy = (e) => {
      e.preventDefault();
      alert("Copying is disabled!");
    };
    document.addEventListener('copy', handleCopy);

    // Prevent text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
    };
    document.addEventListener('selectstart', handleSelectStart);

    // Detect PrintScreen key and clear clipboard
    const handleKeydown = (e) => {
      if (e.key === 'PrintScreen') {
        alert('Screenshots are disabled!');
        navigator.clipboard.writeText('');  // Clear clipboard
      }
    };
    window.addEventListener('keydown', handleKeydown);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('selectstart', handleSelectStart);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div style={{ userSelect: 'none' }}>
      <h1>Content Protection Enabled</h1>
      <p>Right-click, copying, and screenshots are restricted on this page.</p>
    </div>
  );
};

export default ContentSettings;
