---
title: Pipeline Actions
aliases:
- "/docs/github-webhook"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"
headline: "Pipeline Actions"
description: 'Automating Nextflow pipeline executions through pipeline actions and webhooks with Nextflow Tower.'
menu:
  docs:
    parent: Automation
    weight: 1
---

Pipeline actions allow launching of pipelines based on events. 

Tower currently offers support for native **GitHub webhooks** and a general **Tower webhook** that can be invoked programmatically. Support for Bitbucket and GitLab are coming soon.

## Github webhooks

This **Pipeline action** listens for any changes made in the pipeline repository. When a change occurs, Tower triggers the launch of the pipeline in response.

To create a new **Pipeline action**, navigate to the user menu on the top right, select **Pipeline actions** and create a new action.

![](/uploads/2020/10/actions_new.png)



**1.** Enter a name for your Action.

**2.** Choose **GitHub webhook** as the event source.

![](/uploads/2020/10/actions_githook.png)



**3.** Choose the environment where the pipeline will be executed.

**4.** Choose the pipeline to launch and optionally the revision.

**5.** Choose the working directory, the config profiles, and parameters. Select **Create**.

![](/uploads/2020/10/actions_params.png)



:::note
The pipeline action is now setup. When a new commit occurs for the selected repository and revision, an event will be triggered in Tower and the pipeline will be launched.
:::

![](/uploads/2020/10/actions_created.png)



:::star
You now have an active **Pipeline action** always listening to the latest changes in your repository.
:::

## Tower launch hooks

A **Tower launch hook** creates a custom endpoint URL which can be used to trigger the execution of your pipeline programmatically from any script web service.

Like above, to create a new **Pipeline action**, navigate to the user menu on the top right, select **Pipeline actions** and create a new action.

![](/uploads/2020/10/actions_new.png)



**1.** After naming your pipeline action, select **Tower launch hook** as the event source.

![](/uploads/2020/10/actions_tower_hook.png)



**2.** Select the **environment** to execute your pipeline, the **pipeline repository URL**, the **Revision number**, the **Work directory**, the **Config profiles**, and the **Pipeline parameters**, and click **Create**.

![](/uploads/2020/10/actions_tower_hook_params.png)



A **Tower launch hook** has been created at that endpoint that can be used to programmatically launch the corresponding pipeline. The snippet below shows an example `cURL` command with the authentication token.  

![](/uploads/2020/10/actions_endpoint.png)



:::note

You now have created an endpoint to programmatically launch a pipeline.
:::

:::tip
When you create a **Tower launch hook**, you also create an access Token to allow submitting executions to Tower.
:::

![](/uploads/2020/10/actions_new_token.png)



Access Tokens are accessible on the [tokens page](https://tower.nf/tokens) and can also be accessed from the navigation menu.

![](/uploads/2020/10/actions_access_tokens.png)


