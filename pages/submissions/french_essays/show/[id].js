import {
  Navbar,
  Page,
  Block,
  BlockTitle,
  Link,
  Tabbar,
  Button,
  Popup,
} from "konsta/react";
import Head from "next/head";
import React, { useState } from "react";
import NavigateBack from "../../../components/navigate_back";
import { useReactMediaRecorder } from "react-media-recorder";
import { TiMediaRecord, TiMediaStop, TiMediaPlayOutline } from "react-icons/ti";

export default function Login() {
  const onStopRecording = (blobUrl, blob) => {
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      console.log(reader.result);
    });
    reader.readAsDataURL(blob);
  };
  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    {
      screen: true,
      onStop: onStopRecording,
      blobPropertyBag: { type: "video/mp4" },
    }
  );
  const [popupOpened, setPopupOpened] = useState(false);

  return (
    <>
      <Page>
        <main>
          <Navbar
            title="Méthodologie de la dissertation"
            left={<NavigateBack href="/" />}
          ></Navbar>
          <RecordingTab
            startRecording={startRecording}
            stopRecording={stopRecording}
            mediaBlobUrl={mediaBlobUrl}
            setPopupOpened={setPopupOpened}
          />
          <FrenchEssayPart
            title="Introduction"
            items={[
              {
                title: "Reformulation",
                description:
                  "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
              },
              {
                title: "Problématique",
                description:
                  "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
              },
              {
                title: "Plan",
                description:
                  "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
              },
            ]}
          />
          <FrenchEssayPart
            title="Développement"
            items={[
              {
                title: "Thèse",
                description:
                  "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
              },
              {
                title: "Anti Thèse",
                description:
                  "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
              },
              {
                title: "Synthèse",
                description:
                  "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
              },
            ]}
          />
          <FrenchEssayPart
            title="Conclusion"
            items={[
              {
                title: "Récapitulation",
                description:
                  "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
              },
            ]}
          />
        </main>
      </Page>
      <VideoPopup
        popupOpened={popupOpened}
        setPopupOpened={setPopupOpened}
        mediaBlobUrl={mediaBlobUrl}
      />
    </>
  );
}
const RecordingTab = ({
  startRecording,
  stopRecording,
  mediaBlobUrl,
  setPopupOpened,
}) => {
  return (
    <Tabbar className="bottom-0 fixed">
      <div>
        <div className="grid grid-cols-3 gap-2 width-100">
          <Button small onClick={startRecording}>
            <TiMediaRecord />
          </Button>
          <Button small onClick={stopRecording}>
            <TiMediaStop />
          </Button>
          <Button
            onClick={() => {
              setPopupOpened(true);
            }}
          >
            <TiMediaPlayOutline />
          </Button>
        </div>
      </div>
    </Tabbar>
  );
};

const FrenchEssayPart = ({ title, items }) => {
  return (
    <>
      <BlockTitle className="text-3xl">{title}</BlockTitle>
      <Block strong inset>
        {items.map((item) => {
          return (
            <>
              <b>{item.title}</b>
              <p className="py-2">{item.description}</p>
            </>
          );
        })}
      </Block>
    </>
  );
};

const VideoPopup = ({ popupOpened, setPopupOpened, mediaBlobUrl }) => {
  return (
    <Popup opened={popupOpened} onBackdropClick={() => setPopupOpened(false)}>
      <Page>
        <Navbar
          title="Video Preview"
          right={
            <Link navbar onClick={() => setPopupOpened(false)}>
              Close
            </Link>
          }
        />
        <Block>
          <video autoPlay loop muted src={mediaBlobUrl} className="" />
        </Block>
      </Page>
    </Popup>
  );
};
