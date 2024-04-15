import React from 'react';

function Heading({ text }: { text: string }) {
  return (
    <div className="text-5xl mt-10 mb-10 text-center font-semibold">
      {text}
    </div>
  );
}

export default Heading;
