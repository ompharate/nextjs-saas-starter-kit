"use client";

import { Button } from "flowbite-react";

export function ButtonGroup() {
  return (
    <div className="px-2 py-5 ">
      <Button.Group>
        <Button color="green">Dashboard</Button>
        <Button color="green">Words</Button>
        <Button color="green">Quizzes</Button>
        <Button color="green">Deck</Button>
      </Button.Group>
    </div>
  );
}
