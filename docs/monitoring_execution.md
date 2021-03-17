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
* [Summary](/monitoring_summary/) and [status section](/monitoring_summary#task-status).
* List of pipeline [processes](/monitoring_processes/).
* Aggregated [stats](/monitoring_aggregate_stats/) and [load](/monitoring_aggregate_stats#load-and-utilization).
* Detailed list of [individual tasks](/monitoring_tasks/#task-table) and [metrics](/monitoring_tasks/#resource-metrics).

## Run information

This top section is composed of 4 tabs containing details about the Nextflow execution:

**1.** The Nextflow **Command line** to execute the job.

**2.** **Parameters** including all parameters given in the arguments and arguments taken from the configuration `profiles` in the `params` scope.

**3.** **Configuration** contains all the information included in the configuration file including parameters.

**4.** The **Execution log** tab is updated in real time with the logs from the main Nextflow process.

![](/uploads/2020/10/monitoring_exec_log.png)


