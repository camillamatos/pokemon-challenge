import React from 'react';

interface IFProps {
  test: boolean;
  children: React.ReactElement;
}

function IF({ test, children }: IFProps) {
  if (test) return children;

  return null;
}

export default IF;
