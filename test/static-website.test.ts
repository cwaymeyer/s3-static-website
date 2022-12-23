import { App, Stack, assertions } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as StaticWebsite from "../lib/static-website-stack";

let app: App;
let stack: Stack;
let template: assertions.Template;

beforeAll(() => {
  app = new App();
  stack = new StaticWebsite.StaticWebsiteStack(app, "MyTestStack");
  template = Template.fromStack(stack);
});

test("matches snapshot", () => {
  expect(template.toJSON()).toMatchSnapshot();
});

test("creates S3 bucket and Cloudfront distribution", () => {
  template.resourceCountIs("AWS::S3::Bucket", 1);
  template.resourceCountIs("AWS::CloudFront::Distribution", 1);
});
