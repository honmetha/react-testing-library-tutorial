import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST");
  });

  beforeAll(() => {
    console.log("RAN ONCE BEFORE ALL TESTS");
  });

  afterEach(() => {
    console.log("RUNNING AFTER TEST");
  });

  afterAll(() => {
    console.log("RAN ONCE AFTER ALL TESTS");
  });

  it("should render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  // it("should render multiple follower items", async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElement = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElement.length).toBe(5);
  // });
});
