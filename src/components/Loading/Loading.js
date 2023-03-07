import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    // <div className="sweet-loading">
    //   <ClipLoader css={override} size={150} />
    // </div>
    <div className='animate-pulse flex h-[90vh] opacity-50'
    >
      <div className='m-auto'>
        <h2 className='text-2xl uppercase font-bold tracking-widest opacity-50 text-fuchsia-400'>TASNIM PRICILA</h2>
        <p className='text-sm tracking-widest uppercase pl-1'>Wedding Photographer</p>
      </div>

    </div>

  );
};

export default Loading;