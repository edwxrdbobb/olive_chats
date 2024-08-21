"use client";

import { useEffect, useRef } from 'react';

const VideoCall = ({ appID, serverSecret, roomID }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const initializeZegoUIKit = async () => {
      const { ZegoUIKitPrebuilt } = await import('@zegocloud/zego-uikit-prebuilt');

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    initializeZegoUIKit();
  }, [appID, serverSecret, roomID]);

  const randomID = (length) => {
    return Math.random().toString(36).substring(2, length + 2);
  };

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default VideoCall;
