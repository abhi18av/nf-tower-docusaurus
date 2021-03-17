---
title: Launch overview
aliases:
- "/docs/launch"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Pipeline Execution'
description: 'Guide to launching pipelines using Nextflow Tower.'
menu:
  docs:
    parent: Launching Pipelines
    weight: 1
---

:::info

See the [**Compute Environment**](/compute_overview/) documentation to learn how to create an environment.
:::

Tower currently supports launching into **AWS**, **Google**, **Slurm** and **LSF** compute environments.

In the following example we will launch the nf-core RNASeq pipeline using a Google Cloud compute environment we have previously set up.

To launch a pipeline:

**1.** Select the **Launch** button in the navigation bar.

![](/uploads/2020/10/launch_button.png)



The **Launch Pipeline** dialog will appear.

**2.** Select the drop down menu to choose a [**Compute Environment**](/compute_overview/).  

*The users primary compute environment is selected by default.*

![](/uploads/2020/10/launch_RNASeq.png)



**3.** Enter the repository of the **Pipeline to launch**.  
*For example https://github.com/nf-core/rnaseq.git*.

**3.** A **Revision number** can be used select different versions of pipeline.  
*The Git default branch (main/master) or `manifest.defaultBranch` in the Nextflow configuration will be used by default.*

**4.** The **Work directory** specifies the location of the Nextflow work directory.  
*The location associated with the compute environment will be selected by default.*

**5.** Enter the name(s) of each of the Nextflow **Config profiles** followed by the `Enter` key.  
*See the Nextflow [Config profiles](https://www.nextflow.io/docs/latest/config.html?highlight=profiles#config-profiles) documentation for more details.*

**6.** Enter any **Pipeline parameters** in YAML or JSON format.
*YAML example:*

```yaml
reads: 's3://nf-bucket/exome-data/ERR013140_{1,2}.fastq.bz2'  
paired_end: true
```



**7.** Select *Launch* to begin the pipeline execution.

:::tip
Nextflow pipelines are simply Git repositories and the location can be any public or private Git-hosting platform. See [**Git Integration**](/git-overview/) in the Tower docs and [**Pipeline Sharing**](https://www.nextflow.io/docs/latest/sharing.html) in the Nextflow docs for more details.
:::

:::caution
The credentials associated with the compute environment must be able to access the work directory.
:::

:::info
In the configuration, the full path to a bucket must be specified with single-quotes around strings no quotes around booleans or numbers.
:::
