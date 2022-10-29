# Rackspace Elastic Engineering: DevOps Assessment

## Introduction

Thank you for your interest in working at Rackspace – we’re looking forward to meeting you! To help drive the conversation and let you demonstrate your technical skills, we’d like you to complete a small development project. You shouldn’t need to spend more than a couple hours (possibly less!).

## Why Bother?

We realize your time is valuable, but we promise we’re worth it! Rackspace is an awesome place to work because we only hire awesome people like you. We have interesting clients and projects, we utilize the latest technology and tools, and we do so while having fun!

## Objective

Deploy a simple app to Google Cloud Run utilizing Docker and Github Actions using a trunk-based CI/CD workflow. Follow Docker and DevOps best practices.

## Requirements

* Update `Dockerfile` to serve the app
* Update `main.yml` with a Github Actions workflow for pushes to `main`
  * Build and tag the Docker image
  * Push the image to Artifact Registry (we already provisioned this for you, see below)
  * Create a new revision of your Cloud Run service (again, this is already provisioned)
  * Send all traffic to the new revision
* Create `pr.yml` with a Github Actions workflow for all pull requests into `main`
  * Build and tag the Docker image
  * Push the image to Artifact Registry
  * Create a new revision of your Cloud Run service
  * Use revision tags so the service can be tested ([more info here](https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration#tags))

## Bonus Points

* Modify the app so the port is pulled from an environment variable
* Update pull requests with a link to the tagged revision URL
* Anything else you might want to showcase!

## How Do I Deploy?

To streamline the testing process, we setup the following components just for you:

* A Google Artifact Registry resource to host your images
* A Google Cloud Run resource to serve your app revisions
* A GCP service account with access to both resources
* A Github Actions secret `GCP_CREDENTIALS` containing the service account key JSON

Your resource IDs can be found in `.github/workflows/main.yml` under the `env` section.

## Helpful Links

* [Deploying to Cloud Run using `gcloud`](https://cloud.google.com/sdk/gcloud/reference/run/deploy)
* [Authenticating to Artifact Registry using a service account key](https://cloud.google.com/artifact-registry/docs/docker/authentication#json-key)

## Do/Don't

* **DO** let us know if have issues authenticating with your resources.
* **DON'T** delete your GAR or Cloud Run resources. You won't be able to re-create them.
* **DO** attempt to keep deployments to a reasonable number. Use good judgement.

## When You're Done...

Just let your recruiter know. We will review the code to determine next steps.
