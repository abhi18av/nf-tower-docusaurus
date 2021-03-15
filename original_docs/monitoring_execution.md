---
title: Execution details & logs
aliases:
- "/docs/monitoring/execution-logs"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Monitoring & Logs'
description: 'Monitoring a Nextflow pipeline executed through Tower.'
menu:
  docs:
    parent: Monitoring Pipelines
    weight: 2
---

Selecting a pipeline on the navigation bar will display the workflow details in the main monitoring panel. The main window contains:

* [Execution section](#run-information) with command-line, parameters, configuration, and execution logs in real-time.
* [Summary](/docs/monitoring/summary/) and [status section](/docs/monitoring/summary/).
* List of pipeline [processes](/docs/monitoring/processes/).
* Aggregated [stats](/docs/monitoring/aggregate_stats/) and [load](/docs/monitoring/aggregate_stats/#load-and-utilization).
* Detailed list of [individual tasks](/docs/monitoring/tasks/#task-table) and [metrics](/docs/monitoring/tasks/#resource-metrics).

## Run information

This top section is composed of 4 tabs containing details about the Nextflow execution:

**1.** The Nextflow **Command line** to execute the job.

**2.** **Parameters** including all parameters given in the arguments and arguments taken from the configuration `profiles` in the `params` scope.

**3.** **Configuration** contains all the information included in the configuration file including parameters.

**4.** The **Execution log** tab is updated in real time with the logs from the main Nextflow process.

{{% pretty_screenshot img="/uploads/2020/10/monitoring_exec_log.png" %}}

<br>
