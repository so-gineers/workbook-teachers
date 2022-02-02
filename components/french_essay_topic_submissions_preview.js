import { Block, Card, List, ListItem, Link, BlockTitle } from "konsta/react";
import React from "react";

export default function FrenchEssayTopicSubmissionsPreview({
  count,
  subject_text,
  id,
}) {
  return (
    <>
      <Card
        footer={
          <div className="flex justify-between">
            <Link>{count > 1 ? `${count} students` : `${count} student`} </Link>
            <Link href={`topics/french_essays/${id}`}>View submissions</Link>
          </div>
        }
      >
        <p>{subject_text}</p>
      </Card>
    </>
  );
}
