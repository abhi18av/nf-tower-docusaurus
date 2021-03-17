---
title: Summary & status
aliases:
- "/docs/monitoring/job-summary"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Run summary & job status'
description: 'Monitoring run and job status of Nextflow pipeline executed through Tower'
menu:
  docs:
    parent: Monitoring Pipelines
    weight: 3
---

## General

The General summary displays information on the environment and the job being executed:

  - Unique workflow run ID
  - Workflow run name
  - Date and time of job submission timestamp
  - Project revision and Git commit ID
  - Nextflow session ID
  - Username of the launcher
  - Work directory path
  - Container image
  - Executor
  - Compute environment details
  - Nextflow version

:::tip
Hover over with the mouse to get full details on the compute environment.
:::

![](/uploads/2020/10/monitoring_general.png)



## Task status

The **Task status** section shows in real time the statuses of your workflow tasks. The panel uses the same colour code as the pipelines in the navigation bar.

The exact meaning of each status is dependant on the execution platform. 

![](/uploads/2020/10/monitoring_status.png)
