import React from "react";
const NotFound = ({ location }) => {
  return (
    <div>
      <h1>
        404 Not Found. No match for <code>{location.pathname}</code>
      </h1>
    </div>
  );
};

export default NotFound;
