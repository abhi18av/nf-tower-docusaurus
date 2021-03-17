---
title: Aggregate stats & load
aliases:
- "/docs/monitoring/stats-load-utilization"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Aggregate stats and resources'
description: 'Statistics and resources usage of Nextflow pipelines executed through Tower.'

menu:
  docs:
    parent: Monitoring Pipelines
    weight: 5
---

## Aggregate Stats

The **Aggregate stats** panel displays a real-time summary of the resources used by the workflow. These include total running time ('wall time'), aggregated CPU time (CPU hours), memory usage (GB hours), data i/o and cost.

![](/uploads/2020/10/monitoring_aggregate_stats.png)


The cost is only based on estimated computation usage and does not currently take into account storage or associated network costs. Tower has a database of costs for all cloud instances of AWS and Google Cloud in all regions and zones.


## Load and Utilization

As processes are being submitted to the compute environment, the **Load** monitors how many cores and tasks are currently being used. 

**Utilization** is calculated for memory and CPUs. This is the average value across all tasks and is calculated by dividing the memory (or CPUs) usage by the memory (or CPUs) requested.

![](/uploads/2020/10/monitoring_load.png)

