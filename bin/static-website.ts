#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { StaticWebsiteStack } from "../lib/static-website-stack";

const app = new App();
new StaticWebsiteStack(app, "StaticWebsiteStack");
