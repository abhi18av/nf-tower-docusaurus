---
title: Amazon EKS
weight: 1
layout: single
publishdate: 2021-01-19 04:00:00 +0000
authors:
  - "Jordi Deu-Pons"
  - "Paolo Di Tommaso"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Amazon EKS Compute environment'
description: 'Step-by-step instructions to set up a Tower compute environment for Amazon EKS clusters'
menu:
  docs:
    parent: Compute Environments
    weight: 7

---
## Overview

[Amazon EKS](https://aws.amazon.com/eks/) is a managed Kubernetes cluster that allows the execution of containerized workloads in the AWS cloud at scale.

Nextflow Tower offers native support for AWS EKS clusters and streamlines the deployment
of Nextflow pipelines in such environments.

## Requirements

You need to have an EKS cluster up and running. Make sure you have followed
the steps in the [Cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md) guide to create the cluster resources required by Nextflow Tower.


## Compute environment setup  

**1.** In the navigation bar on the upper right, select your account profile, then choose **Compute environments** and select **New Environment**.

![](/uploads/2020/09/aws_new_env.png)



**2.** Provide a name for this environment. For example, *Amazon EKS (us-east-1)* and select **Amazon EKS** as the target platform.

![](/uploads/2020/12/eks_new_env.png)

**3.** Select your AWS credentials or create new ones. The credentials are needed to identify the user that will access the EKS cluster.

:::tip
Make sure the user has the IAM permissions required to describe and
list EKS clusters as explained at [this link](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#4-amazon-eks-specific-setting).
:::

**4.** Specify the AWS *region* where the Kubernetes cluster is located e.g. `us-west-1`.

**5.** The field **Cluster name** lists all EKS clusters available in the selected region. Choose the one you want to use to deploy the Nextflow execution.

**6.** Specify the Kubernetes **Namespace** that should be used to deploy the pipeline execution.

If you have followed the example in the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#2-service-account--role-creation) guide, this field should be `tower-nf`.

**7.** Specify the Kubernetes **Head service account** that will be used to grant permissions to Tower to deploy the pod executions.

If you have followed the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#2-service-account--role-creation) guide, this field should be `tower-launcher-sa`.

**8.** The **Storage claim** field allows you to specify the storage Nextflow will use as a
scratch file system for the pipeline execution.

This should reference a Kubernetes persistence volume with `ReadWriteMany` capability. See the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#3-storage-configuration) guide for details.


## Advanced options

These options allow for the fine-tuning of the Tower configuration for the EKS cluster.

![](/uploads/2020/12/advanced_options.png)


The following parameters are available:

**1.** The **Storage mount path** defines the file system path where the Storage claim is mounted. Default: `/scratch`

**2.** The **Work directory** field defines the file system path used as the working directory by Nextflow pipelines. It must be the same or a subdirectory of the *Storage mount path* from previous point. Default: the same as *Storage mount path*.

**3.** The  **Compute service account** field allows you to specify the Kubernetes *service account* that the pipeline jobs should use. Default is the `default` service account in your Kubernetes cluster.
