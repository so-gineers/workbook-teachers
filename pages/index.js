import { Page, Navbar, Block, Button } from "konsta/react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import FrenchEssayTopicSubmissionsPreview from "../components/french_essay_topic_submissions_preview";
import Link from "next/link";
import LoggedInNavbar from "../components/logged_in_navbar";
import useTranslation from "next-translate/useTranslation";
import axios from "axios";
import { useState } from "react";
const LoggedInPage = ({ t, locales, reviewable, reviewing }) => {
  const [activeSubNavBarItem, setActiveSubNavBarItem] = useState(0);
  return (
    <Page>
      <LoggedInNavbar
        title="Dashboard"
        activeSubNavBarItem={activeSubNavBarItem}
        setActiveSubNavBarItem={setActiveSubNavBarItem}
      />
      {reviewable.map(({ id, subject_text, count }) => {
        return (
          <FrenchEssayTopicSubmissionsPreview
            key={id}
            subject_text={subject_text}
            count={count}
            id={id}
          />
        );
      })}
      <Block strong className="flex space-x-4">
        {locales.map((locale) => {
          return (
            <p key={locale}>
              <Link href="/" locale={locale}>
                {locale}
              </Link>
            </p>
          );
        })}
      </Block>
    </Page>
  );
};

const GuestPage = ({ t }) => {
  return (
    <Page>
      <Navbar title="Workbook Teachers" />
      <h1>{t("title")}</h1>
      <Block strong className="flex space-x-4">
        <Button href="api/auth/signin">{t("login")}</Button>
        <Button clear href="teachers/passwords">
          {t("reset password")}
        </Button>
      </Block>
    </Page>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    const apiToken = session.user.apiToken;
    const response = await axios.get(
      `http://0.0.0.0:3000/api/teachers/dashboards?token=${apiToken}`
    );
    console.log(response.data.reviewable, "JSON");
    return {
      props: {
        reviewable: response.data.reviewable,
        reviewing: response.data.reviewing,
      },
    };
  }
  return { props: { reviewable: [], reviewing: [] } };
}

export default function Home({ reviewable, reviewing }) {
  const { t, lang } = useTranslation("home");
  const router = useRouter();

  return (
    <LoggedInPage
      t={t}
      locales={router.locales}
      reviewable={reviewable}
      reviewing={reviewing}
    />
  );
}
