---
title: Tasks & metrics
aliases:
- "/docs/monitoring/stats-load"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"
headline: "Task table and metrics"
description: 'Monitoring tasks and metrics of Nextflow pipeline executed through Tower.'

menu:
  docs:
    parent: Monitoring Pipelines
    weight: 6
---

## Task table

The **Tasks** section shows all the tasks from an execution.

You can use the `Search` bar to filter tasks by process name, tag, hash, status, etc. 

Selecting a status in **status** section filters the task table.  E.g. clicking in the _CACHED_ card in the **status** column.

{{% pretty_screenshot img="/uploads/2020/10/monitoring_cached.png" %}}

<br>

Selecting a `process` in the **Processes** section above will filter all tasks for that specific process.

{{% pretty_screenshot img="/uploads/2020/10/monitoring_star.png" %}}

<br>

Selecting a task in the task table provides specific information about the task in the **Task details** dialog. 

{{% pretty_screenshot img="/uploads/2020/10/monitoring_task_command.png" %}}

<br>

The task details dialog has the task information tab and the task **Execution log** tab.

### Task information

The task information tab contains the process name and task tag in the title. The tab includes:

 - Command 
 - Status
 - Work directory
 - Environment
 - Execution time
 - Resources requested
 - Resources used

{{% pretty_screenshot img="/uploads/2020/10/monitoring_task_resources.png" %}}

<br>

### Execution log

The **Execution log** provides a realtime log of the individual task of a Nextflow execution. 

This can be very helpful for troubleshooting. It is possible to download the log files including `stdout` and `stderr` from your compute environment.

{{% pretty_screenshot img="/uploads/2020/10/monitoring_task_exec_log.png" %}}

<br>

## Resource metrics

This section displays plots with CPU, memory, task duration and I/O usage, grouped by process.

These metrics can be used to profile an execution to ensure that the correct amount or resources are being requested for each process.

{{% pretty_screenshot img="/uploads/2020/10/monitoring_metrics.png" %}}

<br>

{{% tip %}}
Hover the mouse over the box plots to display more details.
{{% /tip %}}
