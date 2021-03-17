---
title: Google GKE
weight: 1
layout: single
publishdate: 2021-01-19 04:00:00 +0000
authors:
  - "Jordi Deu-Pons"
  - "Paolo Di Tommaso"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Google GKE Compute environment'
description: 'Step-by-step instructions to set up a Tower compute environment for Google GKE cluster'
menu:
  docs:
    parent: Compute Environments
    weight: 8

---
## Overview

[Google GKE](https://cloud.google.com/kubernetes-engine) is a managed Kubernetes cluster that allows the execution of containerized workloads in Google Cloud at scale.

Nextflow Tower offers native support for Google GKE clusters and streamlines the deployment
of Nextflow pipelines in such environments.


## Requirements

You need to have a GKE cluster up and running. Make sure you have followed
the steps in the [Cluster preparation](https://github.com/seqeralabs/nf-tower-k8s) guide to create the cluster resources required by Nextflow Tower.


## Compute environment setup

**1.** In the navigation bar on the upper right, choose your account name then choose **Compute environments** and select **New Environment**.

![](/uploads/2020/09/aws_new_env.png)



**2.** Enter the **Name** for this environment. For example, *My GKE* and select **Google GKE** as the target platform.

![](/uploads/2020/12/gke_new_env.png)

**3.** Select your Google Cloud credentials. The credentials are needed to identify the user that will access the GKE cluster.

**4.** Select the **Location** where the GKE cluster is located.

:::info Regional and zonal clusters
GKE clusters can be either *regional* or *zonal*. For example, `us-west1` identifies the United States West-Coast region which has three zones: `us-west1-a`, `us-west1-b`, and `us-west1-c`.

Tower self-completion only shows regions. You should manually edit this field if your GKE cluster was created zonally rather than regionally.
:::

![](/uploads/2020/12/gke_regions.png)


**5.** The field **Cluster name** lists all GKE clusters available in the selected location. Choose the one you want to use to deploy the Nextflow execution.

**6.** Specify the Kubernetes **Namespace** that should be used to deploy pipeline executions.

If you have followed the example in the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#2-service-account--role-creation) guide, this field should be `tower-nf`.

**7.** Specify the Kubernetes **Head service account** that will be used to grant permissions to Tower to deploy the pods executions and related.

If you have followed the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#2-service-account--role-creation) guide, this field should be `tower-launcher-sa`.

**8.** The **Storage claim** field allows you to specify the storage Nextflow should use as a
scratch file system for the pipeline execution.

This should reference a Kubernetes persistence volume with `ReadWriteMany` capability. Check the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#3-storage-configuration) guide for details.

## Advanced options

The following parameters are available:

**1.** The **Storage mount path** defines the file system path where the Storage claim is mount. Default: `/scratch`

**2.** The **Work directory** field defines the file system path used as working directory by the Nextflow pipelines. It must be the same or a subdirectory of the *Storage mount path* at the previous point. Default: the same as *Storage mount path*.

**3.** The  **Compute service account** field allows you to specify the Kubernetes *service account* that the pipeline jobs should use. Default is the `default` service account in your Kubernetes cluster.
