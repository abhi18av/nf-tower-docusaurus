---
title: Processes
aliases:
- "/docs/monitoring/job-processes"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Pipeline processes and status'
description: 'Monitoring a Nextflow pipeline processes executed through Tower'

menu:
  docs:
    parent: Monitoring Pipelines
    weight: 4
---

In Nextflow, a **process** is the basic primitive to execute a block of code. The **Processes** section shows all processes and the status of the tasks. 

In the example below, there are four tasks of the fastqc process.

![](/uploads/2020/10/monitoring_fastqc_processes.png)

By selecting a process, the [**Tasks table**](/monitoring_tasks/) is filtered below.

