import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://localhost:8000`;  // specify the start page


//then create a test and place your code there
test('title', async (t) => {
  const title = t.eval(() => window.document.title);
  await t.expect(title).eql('Page Title Ion');
});
