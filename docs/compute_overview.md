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

![](/uploads/2021/02/compute_env_platforms.png)

Each compute environment must be pre-configured to enable Tower to submit tasks. You can read more on how to set up each environment using the links below.

## Setup guides

The following sections describe how to set up each of the available compute environments.

* [Altair PBS Pro](/compute_altair-pbs-pro/)
* [Azure Batch](/compute_azure-batch/)
* [AWS Batch](/compute_aws-batch/)
* [Google Cloud](/compute_google-cloud/)
* [Grid Engine](/compute_grid-engine/)
* [IBM LSF](/compute_lsf/)
* [Hosted Kubernetes](/compute_k8s/)
* [Amazon Kubernetes (EKS)](/compute_eks/)
* [Google Kubernetes (GKE)](/compute_gke/)
* [Slurm](/compute_slurm/)

## Select a default compute environment

If you have more than one **Compute Environment**, you can select which one will be used by default when launching a pipeline.

![](/uploads/2020/09/aws_new_env.png)

**1.** Navigate to your [compute environments page](https://tower.nf/compute-envs).

![](/uploads/2020/10/compute_env_make_primary.png)

**2.** Choose your default environment by selecting the **Make primary** button.   
