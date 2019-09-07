import React from 'react';

const Error = ({ error }) => {
  return (
    <pre>
      Bad:{' '}
      {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
    </pre>
  );
};

export default Error;
