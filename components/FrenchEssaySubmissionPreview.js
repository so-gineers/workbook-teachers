import { Navbar, Page, Card, Block, Button, Link, Popup } from "konsta/react";
import React, { useState } from "react";

export default function FrenchEssaySubmissionPreview({
  student,
  country,
  date,
  submission,
  essay,
}) {
  const [popupOpened, setPopupOpened] = useState(false);

  return (
    <div>
      <Card
        className="shadow my-8"
        header={
          <div className="grid grid-cols-3">
            <p className="text-bold">{date}</p>
            <p className="text-center">{student}</p>
            <p className="text-right">{country}</p>
          </div>
        }
        footer={
          <div className="grid grid-cols-3 gap-2">
            <Button outline>Ban</Button>
            <Button outline onClick={() => setPopupOpened(true)}>
              Quick Look
            </Button>
            <Button href="/submissions/french_essays/show">Review</Button>
          </div>
        }
      >
        <p className="text-justify">{submission}</p>
      </Card>
      <Popup opened={popupOpened} onBackdropClick={() => setPopupOpened(false)}>
        <Page>
          <Navbar
            title="Popup"
            right={
              <Link navbar onClick={() => setPopupOpened(false)}>
                Close
              </Link>
            }
          />
          <Block className="space-y-4">
            <p>{essay}</p>
            <Button>Start a review</Button>
          </Block>
        </Page>
      </Popup>
    </div>
  );
}
