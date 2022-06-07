import React, { useContext } from 'react'
import { FrndContext } from './App';

export default function Child() {
    const frnd = useContext(FrndContext);
  return (
    <div>Child{frnd}</div>
  )
}
