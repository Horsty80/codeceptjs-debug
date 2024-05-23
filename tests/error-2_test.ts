Feature("Error 2").tag("@error2");

Before(async ({ I }) => {
  I.amOnPage("https://www.google.com");
});

Scenario("test something 1", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
}).retry(3);

Scenario("test something 2", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
}).retry(3);

Scenario("test something 3", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
}).retry(3);

Scenario("test something 4", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
}).retry(3);

Scenario("test something 5", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
}).retry(3);

Scenario("test something 6", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
}).retry(3);

Scenario("test something 7", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
}).retry(3);

Scenario("test something 8", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
}).retry(3);

Scenario("test something 9", ({ I }) => {
  const buttonRefuseModal = locate("button#W0wltc");
  I.seeElement(buttonRefuseModal);
  I.click(buttonRefuseModal);
  I.dontSeeElement(buttonRefuseModal);
});
