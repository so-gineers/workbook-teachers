const AcceptLocales = {
  fr: acceptLocale("fr"),
  en: acceptLocale("en"),
};

function acceptLocale(locale) {
  return {
    headers: {
      "Accept-Language": locale,
    },
  };
}
