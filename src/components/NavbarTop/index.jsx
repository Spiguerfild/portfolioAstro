import React from 'react';
import { ThemeChanger } from '../ThemeChanger';

export const NavbarTop = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Luis H.</a>
        </div>

        <div className="">
          <ThemeChanger />
        </div>
      </div>

    </>

  );
}