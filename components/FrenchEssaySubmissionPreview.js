import { Navbar, Page, Card, Block, Button, Link, Popup } from "konsta/react";
import React, { useState } from "react";

export default function FrenchEssaySubmissionPreview({
  student,
  country,
  date,
  submission,
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
            <p>
              Here comes popup. You can put here anything, even independent view
              with its own navigation. Also not, that by default popup looks a
              bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut
              leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in
              lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam
              lacinia venenatis dignissim. Suspendisse non nisl semper tellus
              malesuada suscipit eu et eros. Nulla eu enim quis quam elementum
              vulputate. Mauris ornare consequat nunc viverra pellentesque.
              Aenean semper eu massa sit amet aliquam. Integer et neque sed
              libero mollis elementum at vitae ligula. Vestibulum pharetra sed
              libero sed porttitor. Suspendisse a faucibus lectus.
            </p>
            <p>
              Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula.
              Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor
              nibh, suscipit in consequat vel, feugiat sed quam. Nam risus
              libero, auctor vel tristique ac, malesuada ut ante. Sed molestie,
              est in eleifend sagittis, leo tortor ullamcorper erat, at
              vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis
              bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at
              urna. Pellentesque tempor congue massa quis faucibus. Vestibulum
              nunc eros, convallis blandit dui sit amet, gravida adipiscing
              libero.
            </p>

            <Button>Start a review</Button>
          </Block>
        </Page>
      </Popup>
    </div>
  );
}
