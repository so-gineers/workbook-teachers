import { Navbar, Page } from "konsta/react";
import React from "react";
import FrenchEssayTopic from "../../../components/french_essay_topic";
import NavigateBack from "../../../components/navigate_back";
import FrenchEssaySubmissionPreview from "../../../components/FrenchEssaySubmissionPreview";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import axios from "axios";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.params;
  if (session) {
    const apiToken = session.user.apiToken;
    console.log(apiToken);
    const response = await axios.get(
      `http://0.0.0.0:3000/api/topics/french_essays/show?id=${id}&token=${apiToken}`
    );
    console.log(response.data, "JSON");
    return {
      props: response.data,
    };
  }
  return { props: {} };
}

export default function ShowFrenchEssayTopic({
  id,
  subject_text,
  reviewable_submissions,
}) {
  return (
    <Page>
      <Navbar title="French Essay Topic" left={<NavigateBack href="/" />} />
      <main>
        <FrenchEssayTopic topic={subject_text} />
        <h1 className="text-center text-md my-8">Copies à corriger</h1>
        {reviewable_submissions.map(
          ({
            id,
            created_at,
            student_name,
            student_country,
            rewording,
            essay,
          }) => {
            return (
              <FrenchEssaySubmissionPreview
                key={id}
                date={created_at}
                student={student_name}
                country={student_country}
                submission={rewording}
                essay={essay}
              />
            );
          }
        )}
      </main>
    </Page>
  );
}
