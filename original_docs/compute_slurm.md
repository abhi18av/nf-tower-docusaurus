---
title: Slurm
weight: 1
layout: single
publishdate: 2021-03-08 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Abhinav Sharma"
  - "Seqera Labs"

headline: 'SLURM Compute Environment'
description: 'Step-by-step instructions to set up SLURM for Nextflow Tower.'
menu:
  docs:
    parent: Compute Environments
    weight: 6

---
## Overview

[Slurm Workload Manager](https://slurm.schedmd.com/overview.html) is an open source, fault-tolerant, and highly scalable cluster management and job scheduling system for large and small Linux clusters.

{{% warning "Support for remote batch schedulers is an incubating feature" %}}
This feature enables Tower to connect to remote cloud or on-premise clusters and launch pipelines.
{{% /warning %}}

## Requirements

To launch pipelines into a Slurm cluster from Tower, the following requirements must be fulfilled:

* The cluster should be reachable via an SSH connection using an SSH key.
* The cluster should allow outbound connections to the Tower web service.
* The cluster queue used to run the Nextflow head job must be able to submit cluster jobs.
* The Nextflow runtime version **21.02.0-edge** (or later) should be installed on the cluster.


## Compute environment

Follow these steps to create a new compute environment for Slurm:

**1.** In the navigation bar on the upper right, choose your account name then choose "Compute environments". Click on the *New Environment* button.

{{% pretty_screenshot img="/uploads/2021/01/new_env.png" %}}

<br>

**2.** Enter a descriptive name (e.g. *Slurm On-premise*) and select **Slurm Workload Manager** as the target platform.

{{% pretty_screenshot img="/uploads/2020/10/slurm_new_env.png" %}}

<br>

**3.** Select the **+** sign to add new SSH credentials.

**4.** Enter a name for the credentials

**5.** Enter your **SSH private key** and associated **Passphrase** if required then click **Create**.

{{% pretty_screenshot img="/uploads/2020/09/slurm_tower_credentials.png" %}}

{{% tip %}}
A passphrase for your SSH key may be optional depending on how it was created. See [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for detailed instructions for how to create a key.
{{% /tip %}}

<br>

**6.** Enter the absolute path of the **Work directory** to be used on the cluster.

**7.** Enter the absolute path of the **Launch directory** to be used on the cluster.

**8.** Enter the **Login hostname**. This is usually the cluster login node address.

**9.** The **Head queue name** which is the name of the queue, on the cluster, used to launch the execution of the Nextflow runtime.

**10.** The **Compute queue name** which is the name of queue, on the cluster, to which pipeline jobs are submitted.

{{% pretty_screenshot img="/uploads/2020/10/slurm_tower_options.png" %}}

{{% tip %}}
The Compute queue can be overridden as a configuration option in the Nextflow pipeline configuration. See Nextflow [docs](https://www.nextflow.io/docs/latest/process.html#queue) for more details.
{{% /tip %}}

**Advanced options**


**11.** Optionally, you can customize **Nextflow queue size** field to control the number of Nextflow jobs submitted to the queue at the same time.

{{% pretty_screenshot img="/uploads/2021/03/grid_nextflow_queue_size.png" %}}


**12.** Optionally, you can use the **Head job submit options** to  specify options to the head job.

{{% pretty_screenshot img="/uploads/2021/03/grid_head_job_options.png" %}}


**13.** Select **Create** to finalize the creation of the compute environment.



{{% star "Groovy!" %}}
You are now ready to launch pipelines.
{{% /star %}}

Jump to the documentation section for [Launching Pipelines](/docs/launch/overview/).
