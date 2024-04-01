import React from 'react';

function ConditionalRedering() {
  const num = 10;
  const str = '';

  if (num % 2 === 0) {
    return <div>{num}은 짝수</div>;
  } else {
    return <div>{num}은 홀수</div>;
  }
}

export default ConditionalRedering;
