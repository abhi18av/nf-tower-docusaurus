---
title: Dashboard overview
aliases:
- "/docs/monitoring-tower-pipelines"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Monitoring Pipelines'
description: 'Guide to monitoring Nextflow pipelines executed through Tower.'
menu:
  docs:
    parent: Monitoring Pipelines
    weight: 1
---

## Navigation bar

Jobs that have been submitted with Tower can be monitored wherever you have an internet connection. 

The **navigation bar** contains all previous jobs executions. Each new or resumed job will be given a random name e.g: `grave_williams`.

![](/uploads/2020/10/monitoring_overview.png)



In the left bar:

  - **Blue** are running.
  - **Green** are successfully executed.
  - **Yellow** are successfully executed where some tasks failed.
  - **Red** are jobs where at least one task fully failed.
  - **Grey** are jobs that where forced to stop during execution.

  Selecting a run on the left panel will display the job execution details.

## Search

The search box enables searching for runs and pipelines by name. 

Use asterisks `✽` before and after keyword to filter results.

![](/uploads/2020/10/monitoring_search.png)


