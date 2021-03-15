---
title: Overview
aliases:
- "/docs/compute-envs"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Abhinav Sharma"
  - "Seqera Labs"

headline: 'Compute Environments'
description: 'Step-by-step instructions to set up compute environments in Nextflow Tower.'
menu:
  docs:
    parent: Compute Environments
    weight: 1
---

## Introduction

Tower uses the concept of **Compute Environments** to define the execution platform where a pipeline will run. It supports launching of pipelines into a growing number of **cloud** and **on-premise** infrastructures.

{{% pretty_screenshot img="/uploads/2021/02/compute_env_platforms.png" %}}

Each compute environment must be pre-configured to enable Tower to submit tasks. You can read more on how to set up each environment using the links below.

## Setup guides

The following sections describe how to set up each of the available compute environments.

* [AWS Batch](/docs/compute-envs/aws-batch/)
* [Azure Batch](/docs/compute-envs/azure-batch/)
* [Google Cloud](/docs/compute-envs/google-cloud/)
* [IBM LSF](/docs/compute-envs/lsf/)
* [Slurm](/docs/compute-envs/slurm/)
* [Grid Engine](/docs/compute-envs/grid-engine/)
* [Altair PBS Pro](/docs/compute-envs/altair-pbs-pro/)
* [Amazon Kubernetes (EKS)](/docs/compute-envs/eks/)
* [Google Kubernetes (GKE)](/docs/compute-envs/gke/)
* [Hosted Kubernetes](/docs/compute-envs/k8s/)

## Select a default compute environment

If you have more than one **Compute Environment**, you can select which one will be used by default when launching a pipeline.

{{% pretty_screenshot img="/uploads/2020/09/aws_new_env.png" %}}

**1.** Navigate to your [compute environments page](https://tower.nf/compute-envs).

{{% pretty_screenshot img="/uploads/2020/10/compute_env_make_primary.png" %}}

**2.** Choose your default environment by selecting the **Make primary** button.   
