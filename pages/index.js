import {
  Page,
  Navbar,
  Block,
  Button,
  Segmented,
  SegmentedButton,
} from "konsta/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import FrenchEssayTopicSubmissionsPreview from "../components/french_essay_topic_submissions_preview";
import Link from "next/link";
import LoggedInNavbar from "../components/logged_in_navbar";
import useTranslation from "next-translate/useTranslation";
export async function getServerSideProps(context) {
  return {
    props: {
      reviewing: [],
      reviewable: [],
    },
  };
}

export default function Home({ reviewable, reviewing }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { t, lang } = useTranslation("home");

  console.log(reviewable, reviewing);

  return (
    <Page>
      {!session ? (
        <Navbar title="Workbook Teachers" />
      ) : (
        <LoggedInNavbar title="Dashboard" />
      )}

      {session ? (
        <>
          <FrenchEssayTopicSubmissionsPreview />
          <FrenchEssayTopicSubmissionsPreview />
          <FrenchEssayTopicSubmissionsPreview />
          <FrenchEssayTopicSubmissionsPreview />
          <FrenchEssayTopicSubmissionsPreview />
        </>
      ) : (
        <h1>{t("title")}</h1>
      )}

      {!session ? (
        <Block strong className="flex space-x-4">
          <Button href="api/auth/signin">{t("login")}</Button>
          <Button clear href="teachers/passwords">
            {t("reset password")}
          </Button>
        </Block>
      ) : (
        <Block strong className="flex space-x-4">
          {router.locales.map((locale) => {
            return (
              <p key={locale}>
                <Link href="/" locale={locale}>
                  {locale}
                </Link>
              </p>
            );
          })}
        </Block>
      )}
    </Page>
  );
}
