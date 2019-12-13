import React from "react";
import renderer from "react-test-renderer";
import GoogleButton from "./GoogleButton";

describe("GoogleButton", () => {
  it("should match the snapshot", () => {
    const { container } = renderer
      .create(<GoogleButton title="Title" />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });
});
