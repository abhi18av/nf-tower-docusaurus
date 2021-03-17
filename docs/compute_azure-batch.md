---
title: Azure Batch
weight: 1
layout: single
publishdate: 2021-03-01 04:00:00 +0000
authors:
  - "Abhinav Sharma"
  - "Seqera Labs"

headline: 'Azure Batch Compute Environment'
description: 'Step-by-step instructions to set up Azure Batch in Nextflow Tower.'
menu:
  docs:
    parent: Compute Environments
    weight: 2

---
## Overview

:::info
The Tower support for Azure Batch is currently in beta. Any feedback and suggestions are welcome.    
:::

:::note Disclaimer
<!-- If you already have Batch environment pre-configured, skip Forge and go to Launch -->
This guide assumes you have an existing [Azure Account](https://azure.microsoft.com/en-us). Sign up for a free Azure account [here](https://azure.microsoft.com/en-us/free/).
:::

There are two ways to create a **Compute Environment** for **Azure Batch** with Tower.

1. **Tower Forge** for Azure Batch automatically creates Azure Batch resources in your Azure account.

2. **Tower Launch** allows you to create a compute environment using existing Azure Batch resources.

If you don't yet have an Azure Batch environment fully set-up, following the [Tower Forge](#forge) guide is suggested. If you have been provided with an Azure Batch queue from your account administrator or if you have set up Azure Batch previously, follow the [Tower Launch](#launch) guide.

## Forge

<!-- Add explanation for what is Forge and disclaimer -->
:::caution
Follow these instructions if you have not pre-configured an Azure Batch environment. Note that this will create resources in your Azure account that you may be charged for by Azure.
:::

### Resource group

To create the necessary Azure Batch and Azure Storage accounts, we must first create a **Resource Group** in the region of your choice.

When you open [this link](https://portal.azure.com/#create/Microsoft.ResourceGroup) you'll notice the "Create new resource group" dialog, as shown below.

![](/uploads/2021/02/azure_new_resource_group.png)

**1.** Add the name for the resource group (for e.g. `towerrg`). 

**2.** Select the preferred region for this resource group. 

**3.** Click **Review and Create** to proceed to the review screen.

**4.** Click **Create** to create the resources.


### Storage account

The next step is to create the necessary Azure Storage account. When you open [this link](https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Storage%2FStorageAccounts) you'll notice the "Create a storage account" dialog, as shown below.

![](/uploads/2021/02/azure_create_storage_account.png)


**1.** Add the name for the storage account (for e.g. `towerrgstorage`).

**2.** Select the preferred region for this resource group.

**3.** Click **Review and Create** to proceed to the review screen.

**4.** Click **Create** to create the Azure Storage account.

**5.** Next, create a Blob container within this storage account by navigating to your new storage account and clicking on **Container** as shown below.

![](/uploads/2021/02/azure_new_container.png)

**6.** Create a new Blob container by clicking on the **+ Container** option and a new container dialog with open, choose a suitable name (e.g. `towerrgstorage-container`) as shown below.


![](/uploads/2021/02/azure_create_blob_container.png)


**7.** Once the new Blob container is created, navigate to the **Access Keys** section of the storage account (e.g. `towerrgstorage`).

**8.** Store the access keys for the newly created Azure Storage account as shown below.


![](/uploads/2021/02/azure_storage_keys.png)

### Batch account

The next step is to create the necessary Azure Batch account. When you open [this link](https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Batch%2FbatchAccounts) you'll notice the "Create a batch account" dialog, as shown below.

![](/uploads/2021/02/azure_new_batch_account.png)

**1.** Add the name for the storage account (for e.g. `towerrgbatch`).

**2.** Select the preferred region for this resource group.

**3.** Click **Review and Create** to proceed to the review screen.

**4.** Click **Create** to create the Azure Batch account.


:::note Congratulations!
You have completed the Azure environment setup for Tower.
:::

### Forge compute environment

Tower Forge automates the configuration of an [Azure Batch](https://azure.microsoft.com/en-us/services/batch/) compute environment and queues required for the deployment of Nextflow pipelines.

Once the Azure resource setup is done, we can add a new **Azure Batch** environment in the Tower UI. To create a new compute environment, follow these steps:

**1.** In the navigation bar on the upper right, choose your account name then choose **Compute environments** and select **New Environment**.

![](/uploads/2020/09/aws_new_env.png)


**2.** Enter a descriptive name for this environment, for example *Azure Batch (east-us)*, and select **Azure Batch** as the target platform.

![](/uploads/2021/02/azure_new_env_name.png)


**3.** Add new credentials by selecting the **+** button. Choose a name, e.g. *tower credentials* and add the Access key and Secret key. These are the keys we saved in the previous steps when creating the Azure resources.

![](/uploads/2021/02/azure_keys.png)


:::tip Multiple credentials
You can create multiple credentials in your Tower environment.
:::

**4.** Select a **Region**, for example *eastus (East US)*, and in the **Pipeline work directory** enter the Azure blob container we created in the previous section e.g: `az://towerrgstorage-container/work`.


![](/uploads/2021/02/azure_blob_container_region.png)

:::caution
The blob container should be in the same **Region** as selected above.
:::

**5.** Select the **Config mode** as **Batch Forge** and, optionally, add the default VM type depending on your quota limits. The default VM type is `Standard_D4_v3`.

![](/uploads/2021/03/azure_tower_forge.png)

**6.** Next, specify the maximum number of VMs you'd like to deploy in the `VMs count` field. 

**7.** Enable the **Autoscale** option, if you'd like to automatically scale up (`VMs count`) and down (`0` VMs) based on the number of tasks.

**8.** Enable the **Dispose resources** options, if you'd like Tower to automatically delete the deployed **Pool** once the workflow is complete.

**Advanced options**

**9.** Optionally, specify the **Jobs cleanup policy** to delete the jobs once the workflows execution is completed.

![](/uploads/2021/03/azure_advanced_options.png)


**10.** Optionally, specify the duration of the SAS token generated by Nextflow.


**11.** Finally, click on **Create** to finalize the compute environment setup. It will take approximately 20 seconds for all the resources to be created and then you will be ready to launch pipelines.

![](/uploads/2021/02/azure_newly_created_env.png)


:::note Amazing!
You now have everything you need to begin deploying massively scalable pipelines.
:::

Jump to the documentation section for [Launching Pipelines](/docs/launch/overview/).


## Launch


This section is for users with a pre-configured Azure environment. You will need an Azure Batch account, Azure Storage account already set up. In order to add a new compute environment in the Tower UI for existing Azure resources, follow these steps:

**1.** In the navigation bar on the upper right, choose your account name then choose **Compute environments** and select **New Environment**.

![](/uploads/2020/09/aws_new_env.png)


**2.** Enter a descriptive name for this environment, for example, *Azure Batch (east-us)* and select **Azure Batch** as the target platform.

![](/uploads/2021/02/azure_new_env_name.png)


**3.** Add new credentials by selecting the **+** button. Choose a name, e.g. *tower credentials* and add the Access key and Secret key. These are the keys we saved in the previous steps when creating the Azure resources.

![](/uploads/2021/02/azure_keys.png)


:::tip Multiple credentials
You can create multiple credentials in your Tower environment.
:::


**4.** Select a **Region**, for example *eastus (East US)*, and in the **Pipeline work directory** enter the Azure blob container we created in the previous section e.g: `az://towerrgstorage-container/work`.


![](/uploads/2021/02/azure_blob_container_region.png)

:::caution
The blob container should be in the same **Region** as selected above.
:::

**5.** Select the **Config mode** as **Manual** and add the name of the Azure Batch pool, provided to you by your Azure administrator, in the **Compute Pool name** section.

![](/uploads/2021/03/azure_tower_manual.png)


**Advanced options**

**6.** Optionally, specify the **Jobs cleanup policy** to delete the jobs once the workflows execution is completed.

![](/uploads/2021/03/azure_advanced_options.png)


**7.** Optionally, specify the duration of the SAS token generated by Nextflow.


**8.** Finally, click on **Create** to finalize the compute environment setup. It will take approximately 20 seconds for all the resources to be created and then you will be ready to launch pipelines.

![](/uploads/2021/02/azure_newly_created_env.png)


:::note Amazing!
You now have everything you need to begin deploying massively scalable pipelines.
:::

Jump to the documentation section for [Launching Pipelines](/launch_overview/).

