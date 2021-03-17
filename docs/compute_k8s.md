---
title: Kubernetes
weight: 1
layout: single
publishdate: 2020-12-17 04:00:00 +0000
authors:
  - "Jordi Deu-Pons"
  - "Paolo Di Tommaso"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Kubernetes Compute Environments'
description: 'Step-by-step instructions to set up a Nextflow Tower compute environment for a Kubernetes cluster'
menu:
  docs:
    parent: Compute Environments
    weight: 9

---
## Overview

[Kubernetes](https://kubernetes.io/) is the leading technology for deployment and orchestration of containerized workloads in cloud-native environments.

Tower streamlines the deployment of Nextflow pipelines into Kubernetes both in the
cloud and in on-premises solutions.


## Requirements

You need to have Kubernetes cluster up and running. Make sure you have followed
the steps in the [Cluster preparation](https://github.com/seqeralabs/nf-tower-k8s) guide to create the cluster resources required by Nextflow Tower.

The following instructions are for a **generic Kubernetes** distribution. If you are using
[Amazon EKS](/docs/compute-envs/eks/) or [Google GKE](/docs/compute-envs/gke/), see the corresponding documentation pages.


## Compute environment setup  

**1.** In the navigation bar on the upper right, choose your account name then choose
*Compute environments*. Click on the *New Environment* button.

![](/uploads/2020/09/aws_new_env.png)


**2.** Enter a name to identify it (e.g. *My K8s cluster*) and select **Kubernetes** as the target
platform.

![](/uploads/2020/12/k8s_new_env.png)


**3.** Select an existing Kubernetes credentials or click the **+** button to create a new one.

**4.** Give a name to this new credentials record

**5.** Enter the Kubernetes **Service account token** and then click **Create**

![](/uploads/2020/12/k8s_credentials.png)



:::tip
The token can be found using the following command:

```bash
SECRET=$(kubectl get secrets | grep <SERVICE-ACCOUNT-NAME> | cut -f1 -d ' ')
kubectl describe secret $SECRET | grep -E '^token' | cut -f2 -d':' | tr -d '\t'
```

Replace `<SERVICE-ACCOUNT-NAME>` with the name of the service account create in the [Cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#2-service-account--role-creation) step.
If you followed the example in the guide, it should be `tower-launcher-sa`.

:::


**6.** Enter Kubernetes **Master server** URL

:::tip
The master server can be found using this command: `kubectl cluster-info`
:::

**7.** Enter the **SSL Certificate** to authenticate your connection.

:::tip
The certificate data can be found in your `~/.kube/config` file, check for the `certificate-authority-data` field matching to the specified server URL.
:::

**8.** Specify Kubernetes **Namespace** that should be used to deployment the pipeline execution.

If you have followed the example in the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#2-service-account--role-creation) guide this field should be `tower-nf`.

**9.** Specify the Kubernetes **Head service account** that will be used to grant permissions to Tower to deploy the pods executions and related.

If you have followed the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#2-service-account--role-creation) guide this field should be `tower-launcher-sa`.

**10.** The **Storage claim** field allows you to specify the storage that Nextflow should use as
scratch file system for the pipeline execution.

This should reference a Kubernetes persistence volume with `ReadWriteMany` capability.
Check the [cluster preparation](https://github.com/seqeralabs/nf-tower-k8s/blob/master/cluster-preparation.md#3-storage-configuration) guide for details.

## Advanced options

These options allow the fine-tuning of the Tower configuration for the Kubernetes cluster.


![](/uploads/2020/12/advanced_options.png)


The following parameters are available:

**1.** The **Storage mount path** defines the file system path where the Storage claim is mounted. Default: `/scratch`

**2.** The **Work directory** field defines the file system path used as a working directory by Nextflow pipelines. It must be the same or a subdirectory of the *Storage mount path* at the previous point. Default: the same as *Storage mount path*.

**3.** The  **Compute service account** field allows you to specify the Kubernetes *service account* that the pipeline jobs should use. Default is the `default` service account in your Kubernetes cluster.
