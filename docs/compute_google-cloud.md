---
title: Google Cloud Life Sciences
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Google Cloud Life Sciences Compute Environment'
description: 'Step-by-step instructions to setup Google Cloud Life Sciences for Nextflow Tower.'
menu:
  docs:
    parent: Compute Environments
    weight: 3

---
:::info Requirements
This guide assumes you have an existing [Google Cloud Account](https://console.cloud.google.com). Sign-up for a free account [here](https://cloud.google.com/).
:::

# Cloud Life Sciences

Tower provides integration to Google Cloud via the [Cloud Life Sciences API](https://cloud.google.com/life-sciences/docs/reference/rest).

The guide is split into two parts. We will begin with configuring your Google Cloud account and enabling the Google Life Sciences API. It will then guide you through creating a new Google Cloud compute environment in Tower.

## Configuration of Google Cloud

### 1. Create a new Google Cloud project or select an existing one.

Navigate to the [Google Project Selector page](https://console.cloud.google.com/projectselector2) and select an existing project or click **CREATE PROJECT**.

![](/uploads/2020/09/google_create_project.png)


Enter a name for your new project e.g: "tower-nf", if you are part of an organization the location will be set by default to match your organization parameters.

![](/uploads/2020/12/google_new_project_name.png)



### 2. Make sure Billing is enabled for the project.

At the top left of the page, in the navigation menu (**≡**) click **Billing**. You can follow the enable billing instructions [here](https://cloud.google.com/billing/docs/how-to/modify-project).

![](/uploads/2020/12/google_enable_billing.png)



### 3. Enable the Google Life Sciences, the Compute Engine , and the Google Cloud Storage APIs.

Open this [link](https://console.cloud.google.com/flows/enableapi?apiid=lifesciences.googleapis.com%2Ccompute.googleapis.com%2Cstorage-api.googleapis.com), to enable all **three APIs** on for your project. Select your project from the drop down menu and click **Enable**. Alternatively enable these APIs manually by selecting the project on the top bar and visiting the API pages:

**1.** [Google Cloud Life Sciences API](https://console.cloud.google.com/marketplace/product/google/lifesciences.googleapis.com)

**2.** [Compute Engine API](https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com)

**3.** [Google Cloud Storage JSON API](https://console.cloud.google.com/marketplace/product/google/storage-api.googleapis.com)

![](/uploads/2020/12/google_enable_apis.png)



### 4. Retrieve the Compute Engine Service account for your project

Click **Go to credentials** or visit this [link](https://console.cloud.google.com/apis/credentials/wizard?api=lifesciences.googleapis.com)

![](/uploads/2020/12/google_api_enabled_confirmation.png)



*i)* Select the **Cloud Life Sciences API** from the dropdown menu and select the radio button **Yes, I'm using one or both** to indicate we will use the Compute Engine API. The click **What credentials do I need?**

![](/uploads/2020/12/google_credential_options.png)



*ii)* A second screen appears to say you do not need any further credentials. Click **Done**.

![](/uploads/2020/12/google_credentials_confirmation.png)



You will be redirected to the **API & Services** page and the **Credentials** section. Note a **Compute Engine default service account** has been created. **Copy** the email address as you will need this to configure **Google Storage**.

### 5. Create a new key for the compute service account

Copy and click the **Email** of the service account.

![](/uploads/2020/12/google_service_account.png)



*i)* Below the page select **Add key** and **Create new key**.

![](/uploads/2020/12/google_service_account_create_key.png)



*ii)* Select **JSON** format and press **Create**.

![](/uploads/2020/12/google_service_account_create_key_json.png)



A JSON key will be downloaded to your computer. This is the credentials used by Tower and you will need it to configure the Tower compute environment. In the **Service accounts** page, you can see your key is now active and you can manage it from here.

![](/uploads/2020/12/google_service_account_create_key_manage.png)


### 6. Create a Google Storage bucket.

In top left of the page, in the navigation menu (**≡**) click **Storage** and **Create Bucket**.

![](/uploads/2020/09/google_storage.png)



![](/uploads/2020/12/google_create_bucket.png)



### 7. Configure your Bucket

:::caution Bucket Naming - No underscores _ !
Do not use underscores in your bucket name and use hyphens instead.
:::

*i)* Name your bucket, you will need this name to configure the Tower environment.

*ii)* Select **Region** as the **Location type** and the **Location** for your bucket. You will need the **Location** to configure the Tower environment.

*iii)* Select **Standard** as the **default storage class**.

*iv)* Select **Uniform** as the **Access control**.

![](/uploads/2020/12/google_create_bucket_options.png)

:::tip
The Google Cloud Life Sciences API is available in limited number of [locations](https://cloud.google.com/life-sciences/docs/concepts/locations), however, these locations are only used to store metadata about the pipeline operations. The location of the storage bucket and compute resources can be in any region.
:::

### 8. Set Bucket permissions

*i)* In the **Storage** page on the **Browser** section click on the newly created storage.

![](/uploads/2020/12/google_storage_browser.png)



*ii)* Navigate to the **Permissions** tab and click on **+ Add**,

*iii)* Copy-paste the service account email created above into the `new members box` and add the following roles:

**Storage Admin**

**Storage Legacy Bucket Owner**

**Storage Legacy Object Owner**

**Storage Object Creator**  

![](/uploads/2020/12/google_storage_roles.png)



:::note Sweet!
You have created a project, enabled the necessary Google APIs, created a bucket and a JSON file containing required credentials. You are now ready to set up a new compute environment in Tower.
:::

## Tower configuration

:::caution Requirements

The following guide to configure Tower assumes you have JSON keys for a configured Google Cloud account. You will also need the name and location of the **Google storage** bucket.

The [section above](#configuration-of-google-cloud) shows how to configure Google Cloud.

:::

To create a new compute environment for Google Cloud in Tower follow these steps:

**1.** In the navigation bar on the upper right, choose your profile then choose **Compute environments**. Select **New Environment**.

![](/uploads/2020/09/aws_new_env.png)



**2.** Enter a name for this environment. For example "Google Cloud Life Sciences (europe-west2)" and select **Google Life Sciences** as the target platform.

![](/uploads/2020/09/google_new_env.png)



**3.** Select the **+** sign to add new credentials. Name your credentials and copy & paste the contents from the Google JSON key. If you do not have a JSON key follow [this guide](#4-enable-the-google-life-sciences-api-the-compute-engine-api-and-the-google-cloud-storage-api).

![](/uploads/2020/09/google_tower_credentials.png)



**4.** Select the **Region** of your **Google storage** bucket.

**5.** You can leave the **Location** empty and Google will run the Life Sciences API Service in the closest available location.

**6.** Enter the bucket URL in the **Pipeline work directory** e.g. *gs://my-google-bucket-name*.

:::tip
This is the name of your **Google Storage bucket** with the `gs://` prefix.
:::

**7.** All other options can remain empty.

**8.** Select **Create** to finalise the creation of the compute environment.

![](/uploads/2020/09/google_tower_location.png)



:::note Awesome!
Time to start launching pipelines in your cloud.
:::

Jump to the documentation section for [Launching Pipelines](/launch_overview/).
