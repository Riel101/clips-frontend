"use client";

// this file is a React component for a toggle switch UI element. It defines a `Switch` component that can be used to toggle between two states (on/off). The component accepts three props: `checked` (a boolean indicating the current state), `onChange` (a function to call when the state changes), and an optional `id` for accessibility. The switch is styled using Tailwind CSS classes, and it includes keyboard accessibility features for toggling with the spacebar or enter key.

import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

export const Switch = ({ checked, onChange, id }: SwitchProps) => {
  const toggle = () => onChange(!checked);

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggle();
        }
      }}
      className={`${
        checked ? 'bg-green-500' : 'bg-gray-600'
      } relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black`}
    >
      <span
        aria-hidden="true"
        className={`${
          checked ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      />
    </button>
  );
};
