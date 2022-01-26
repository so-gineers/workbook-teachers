import { Block, Card, List, ListItem, Link, BlockTitle } from "konsta/react";
import React from "react";

export default function FrenchEssayTopicSubmissionsPreview() {
  return (
    <>
      <Card
        footer={
          <div className="flex justify-between">
            <Link>21</Link>
            <Link href="topics/french_essays/show">Voir les copies</Link>
          </div>
        }
      >
        <p>
          A french essay topic specification. It may include multiple sentences
          and sometimes it can be wordy.
        </p>
      </Card>
    </>
  );
}
