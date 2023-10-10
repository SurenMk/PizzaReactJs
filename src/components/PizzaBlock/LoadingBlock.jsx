import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="133" cy="143" r="115" />
      <rect x="-1" y="275" rx="6" ry="6" width="280" height="26" />
      <rect x="-1" y="315" rx="6" ry="6" width="280" height="84" />
      <rect x="1" y="407" rx="6" ry="6" width="84" height="30" />
      <rect x="150" y="405" rx="20" ry="20" width="129" height="34" />
    </ContentLoader>
  );
}

export default LoadingBlock;
