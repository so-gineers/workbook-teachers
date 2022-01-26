import { Navbar, Page } from "konsta/react";
import React from "react";
import FrenchEssayTopic from "../../../components/french_essay_topic";
import NavigateBack from "../../../components/navigate_back";
import FrenchEssaySubmissionPreview from "../../../components/FrenchEssaySubmissionPreview";

export default function ShowFrenchEssayTopic() {
  return (
    <Page>
      <Navbar title="French Essay Topic" left={<NavigateBack href="/" />} />
      <main>
        <FrenchEssayTopic topic="Texte du sujet de dissertation" />
        <h1 className="text-center text-md my-8">Copies à corriger</h1>
        <FrenchEssaySubmissionPreview
          date="31 dec à 21h"
          student="Pathe"
          country="Senegal"
          submission="So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention or
          the kinship of all living things but I tell you Jerry at that moment, I
          was a marine biologist."
        />
        <FrenchEssaySubmissionPreview
          date="23 dec à 13h"
          student="Absa"
          country="Ivory Coast"
          submission="You can also use variant modifiers to target media queries
          like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:text-center to apply the text-center utility at only medium screen sizes and above You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:text-center to apply the text-center utility at only medium screen sizes and above You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:text-center to apply the text-center utility at only medium screen sizes and above"
        />
        <FrenchEssaySubmissionPreview
          date="11 dec à 00h"
          student="Narcisse"
          country="Benin"
          submission="So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention or
          the kinship of all living things but I tell you Jerry at that moment, I
          was a marine biologist."
        />
      </main>
    </Page>
  );
}
