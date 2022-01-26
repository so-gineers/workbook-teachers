import { Card } from "konsta/react";
import React from "react";

export default function FrenchEssayTopic({ topic }) {
  return (
    <Card className="shadow-md rounded-xl text-center hover:shadow-lg">
      <p>{topic}</p>
    </Card>
  );
}
