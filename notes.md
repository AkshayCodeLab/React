Unit testing of react apps using JEST.

- Testing whether a certain component is loaded into the DOM or not after getting rendered.
- Sometimes our text file becomes too huge for that we can group them together using describe.
- Instead of using test() function we can also use it() will work exactly the same.
- To simulate an event in the test such as a click action, use fireEvent

Unit Testing of the RestaurantCard component which contains props:

- Need to pass props the component to get it rendered.
- Use mock data to pass as props for it.

Integration Testing:

- Where multiple components interact to simulate the test case
- Defining a flow to test a particular feature
- E.g when we search something in search bar then it should render only the searched components.
- This entire flow of clicking on search bar, modifying the components in body, is testing in integration testing.
- While rendering body component in testing,
  it will fail because fetch() is a function of browsers, won't work on jsdom which is a browser-like environment but not browser.
- For this we will create a mock fetch function.
- Returns a promise which resolves into json
- json returns a promise which resolves into data.
  - Note: In integration or unit testing we don't make an actial api call. We only work with mocks to simulate a testing environment.

* Just like Parcel Uses HMR to re-create the dev build and restart the server everytime we make changes to the docoument, make a similar functionality in JEST : Go to package.json in scripts, watch-test: "jest --watch"

Just like parcel uses HMR to re-create the dev built and restart the server everytime we make changes to the document, make a similar functionality in JEST : Go to package.json in scrips, watch-test: "jest --watch"

Integration testing :

- Whenever our component contains a code which updates the state like fetch() then wrap it inside act() function which is an async function tor return the promise.

Note: If you are unable to access the element using getByRole or getByText then use getByTestid

- BeforeAll and beforeEach -> Inside the describe block if you want to do something before running all testcases and if you want to do something before running each testcase.
- Similarly afterAll and afterEach functions.
